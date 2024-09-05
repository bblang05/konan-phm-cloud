'use client';

import * as React from 'react';
import {useRouter} from 'next/navigation';
import {zodResolver} from '@hookform/resolvers/zod';
import {
    Box,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    FormControl,
    FormHelperText, IconButton,
    OutlinedInput,
    Typography,
} from '@mui/material';

import PasswordChangeTable from './password-change-table'
import {Controller, useForm} from 'react-hook-form';
import {z as zod} from 'zod';

import {authClient} from '@/lib/auth/client';
import {useUser} from '@/hooks/use-user';

const schema = zod.object({
    email: zod.string().min(1, {message: '존재하지 않는 아이디입니다.'}).email(),
    password: zod.string().min(1, {message: '비밀번호가 일치하지 않습니다. (1/5회)'}),
});

type Values = zod.infer<typeof schema>;

const defaultValues = {email: 'admin@konantech.com', password: '1234'} satisfies Values;

export function ChangePassword(): React.JSX.Element {
    const router = useRouter();

    const {checkSession} = useUser();

    const [showPassword, setShowPassword] = React.useState<boolean>();

    const [isPending, setIsPending] = React.useState<boolean>(false);

    const {
        control,
        handleSubmit,
        setError,
        formState: {errors},
    } = useForm<Values>({defaultValues, resolver: zodResolver(schema)});

    const onSubmit = React.useCallback(
        async (values: Values): Promise<void> => {
            setIsPending(true);

            const {error} = await authClient.signInWithPassword(values);

            if (error) {
                setError('root', {type: 'server', message: error});
                setIsPending(false);
                return;
            }

            await checkSession?.();

            router.refresh();
        },
        [checkSession, router, setError]
    );

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Box>
            <Box sx={{marginBottom: '30px'}}>
                <Typography variant="h4" textAlign="center">
                    로그인
                </Typography>
            </Box>
            <Box>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Box sx={{padding: '0 0 12px'}}>
                        <Controller
                            control={control}
                            name="email"
                            render={({field}) => (
                                <FormControl fullWidth error={Boolean(errors.email)}>
                                    <OutlinedInput {...field} placeholder="아이디" type="id"/>
                                </FormControl>
                            )}
                        />
                    </Box>
                    <Box sx={{padding: '0 0 12px'}}>
                        <Controller
                            control={control}
                            name="password"
                            render={({field}) => (
                                <FormControl fullWidth error={Boolean(errors.password)}>
                                    <OutlinedInput
                                        placeholder="비밀번호"
                                        {...field}
                                        endAdornment={
                                            showPassword ? (
                                                <Box
                                                    component="img"
                                                    onClick={(): void => {
                                                        setShowPassword(false);
                                                    }}
                                                    src="/images/secret-on__line--555.svg"
                                                    sx={{
                                                        display: 'inline-block',
                                                        height: '20px',
                                                        width: '20px',
                                                        cursor: 'pointer'
                                                    }}
                                                />
                                            ) : (
                                                <Box
                                                    component="img"
                                                    onClick={(): void => {
                                                        setShowPassword(true);
                                                    }}
                                                    src="/images/secret-off__line--434.svg"
                                                    sx={{
                                                        display: 'inline-block',
                                                        height: '20px',
                                                        width: '20px',
                                                        cursor: 'pointer'
                                                    }}
                                                />
                                            )
                                        }
                                        label="Password"
                                        type={showPassword ? 'text' : 'password'}
                                    />
                                </FormControl>
                            )}
                        />
                    </Box>
                    <Box sx={{margin: '2px 0 11px', minHeight: '19px'}}>
                        {errors.email ? (
                            <FormHelperText className="center" error={true}>
                                {errors.email.message}
                            </FormHelperText>
                        ) : null}
                        {errors.password ? (
                            <FormHelperText className="center" error={true}>
                                {errors.password.message}
                            </FormHelperText>
                        ) : null}
                    </Box>

                    <Button color="primary" variant="contained" size="large" onClick={handleClickOpen} fullWidth>
                        로그인
                    </Button>

                    <Dialog
                        open={open}
                        onClose={handleClose}
                        maxWidth={"sm"}
                        fullWidth
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                    >
                        <DialogTitle id="alert-dialog-title">{'비밀번호 변경'}</DialogTitle>
                        <IconButton
                            aria-label="close"
                            onClick={handleClose}
                            sx={{
                                position: 'absolute',
                                right: 8,
                                top: 8,
                                color: (theme) => theme.palette.grey[500],
                            }}
                        >
                            <Box
                                component="img"
                                alt="logo"
                                src="/images/close__line--222.svg"
                                sx={{display: 'inline-block', height: '20px', width: '20px'}}
                            />
                        </IconButton>
                        <DialogContent>
                            <PasswordChangeTable/>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose} variant="contained" color="inherit">
                                취소
                            </Button>
                            <Button onClick={handleClose} variant="contained">
                                변경
                            </Button>
                        </DialogActions>
                    </Dialog>
                </form>
            </Box>
        </Box>
    );
}
