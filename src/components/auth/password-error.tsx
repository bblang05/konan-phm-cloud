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
    DialogContentText,
    DialogTitle,
    FormControl,
    FormHelperText,
    OutlinedInput,
    Typography,
} from '@mui/material';
import {Controller, useForm} from 'react-hook-form';
import {z as zod} from 'zod';

import {authClient} from '@/lib/auth/client';
import {useUser} from '@/hooks/use-user';

import SecretOn from "@/components/svgIcon/SecretOn";
import SecretOff from "@/components/svgIcon/SecretOff";

const schema = zod.object({
    email: zod.string().min(1, {message: '존재하지 않는 아이디입니다.'}).email(),
    password: zod.string().min(1, {message: '비밀번호가 일치하지 않습니다. (1/5회)'}),
});

type Values = zod.infer<typeof schema>;

const defaultValues = {email: 'admin@konantech.com', password: '1234'} satisfies Values;

export function PasswordError(): React.JSX.Element {
    const router = useRouter();

    const {checkSession} = useUser();

    const [showPassword, setShowPassword] = React.useState<boolean>();

    const [_isPending, setIsPending] = React.useState<boolean>(false);

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
                                                <Box sx={{display: 'flex', alignItems: 'center', cursor: 'pointer'}} onClick={(): void => {
                                                    setShowPassword(false);
                                                }}>
                                                    <SecretOff/>
                                                </Box>
                                            ) : (
                                                <Box sx={{display: 'flex', alignItems: 'center', cursor: 'pointer'}} onClick={(): void => {
                                                    setShowPassword(true);
                                                }}>
                                                    <SecretOn/>
                                                </Box>
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
                        sx={{
                            "& .MuiDialog-container": {
                                "& .MuiPaper-root": {
                                    width: "100%",
                                    maxWidth: "450px",  // Set your width here
                                },
                            },
                        }}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                    >
                        <DialogTitle className="alert-dialog-title" id="alert-dialog-title">{'비밀번호 5회 실패'}</DialogTitle>
                        <DialogContent>
                            <DialogContentText id="alert-dialog-description">
                                <Box mb="5px">
                                    <Typography>비밀번호 5회 이상 실패로 계정이 비활성화되었습니다.</Typography>
                                    <Typography>관리자 문의 바랍니다.</Typography>
                                </Box>
                                <Typography>관리자 문의: 0000-0000</Typography>
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose} variant="contained">
                                확인
                            </Button>
                        </DialogActions>
                    </Dialog>
                </form>
            </Box>
        </Box>
    );
}
