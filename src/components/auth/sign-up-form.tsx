'use client';

import * as React from 'react';
import {useRouter} from 'next/navigation';
import {zodResolver} from '@hookform/resolvers/zod';
import {
    Box,
    Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle,
    FormControl,
    OutlinedInput,
    Typography,
} from '@mui/material';
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

export function SignUpForm(): React.JSX.Element {
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
                    회원가입
                </Typography>
            </Box>
            <Box>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Box pb="12px">
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
                    <Box pb="12px">
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
                    <Box pb="12px">
                        <FormControl fullWidth error={Boolean(errors.email)}>
                            <OutlinedInput placeholder="이름"/>
                        </FormControl>
                    </Box>
                    <Box pb="12px">
                        <FormControl fullWidth error={Boolean(errors.email)}>
                            <OutlinedInput placeholder="회사명"/>
                        </FormControl>
                    </Box>

                    <Box sx={{margin: '20px 0 16px'}}>
                        <Button color="primary" variant="contained" size="large" onClick={handleClickOpen} fullWidth>
                            회원가입
                        </Button>

                        <Dialog
                            open={open}
                            onClose={handleClose}
                            sx={{
                                "& .MuiDialog-container": {
                                    "& .MuiPaper-root": {
                                        width: "100%",
                                        maxWidth: "450px",
                                    },
                                },
                            }}
                            aria-labelledby="alert-dialog-title"
                            aria-describedby="alert-dialog-description"
                        >
                            <DialogTitle className="alert-dialog-title" id="alert-dialog-title">{'회원가입'}</DialogTitle>
                            <DialogContent>
                                <DialogContentText id="alert-dialog-description">
                                    <Box mb="5px">
                                        <Typography>회원가입을 성공했습니다.</Typography>
                                        <Typography>관리자 승인 후 로그인 가능합니다.</Typography>
                                    </Box>
                                </DialogContentText>
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={handleClose} variant="contained">
                                    확인
                                </Button>
                            </DialogActions>
                        </Dialog>
                    </Box>
                        <Button type="submit" variant="text" fullWidth>
                            로그인
                        </Button>
                </form>
            </Box>
        </Box>
    );
}
