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
    IconButton,
    OutlinedInput,
    Typography,
    Icon
} from '@mui/material';
import {Controller, useForm} from 'react-hook-form';
import {z as zod} from 'zod';

import {authClient} from '@/lib/auth/client';
import {useUser} from '@/hooks/use-user';

import PasswordChangeTable from './password-change-table';
import SecretOff from "@/components/svgIcon/SecretOff";
import SecretOn from "@/components/svgIcon/SecretOn";
import Close from "@/components/svgIcon/Close";

const schema = zod.object({
    email: zod.string().min(1, {message: '존재하지 않는 아이디입니다.'}).email(),
    password: zod.string().min(1, {message: '비밀번호가 일치하지 않습니다. (1/5회)'}),
});

type Values = zod.infer<typeof schema>;

const defaultValues = {email: 'admin@konantech.com', password: '1234'} satisfies Values;

export function FirstLogin(): React.JSX.Element {
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
                                    <OutlinedInput {...field} placeholder="아이디" type="id" sx={{
                                        '& .MuiOutlinedInput-notchedOutline': {
                                            borderWidth: errors.email ? '2px !important' : '1px',
                                        },
                                    }}/>
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
                                                <Box sx={{display: 'flex', alignItems: 'center', cursor: 'pointer'}}
                                                     onClick={(): void => {
                                                         setShowPassword(false);
                                                     }}>
                                                    <SecretOff/>
                                                </Box>
                                            ) : (
                                                <Box sx={{display: 'flex', alignItems: 'center', cursor: 'pointer'}}
                                                     onClick={(): void => {
                                                         setShowPassword(true);
                                                     }}>
                                                    <SecretOn/>
                                                </Box>
                                            )
                                        }
                                        label="Password"
                                        type={showPassword ? 'text' : 'password'}
                                        sx={{
                                            '& .MuiOutlinedInput-notchedOutline': {
                                                borderWidth: errors.password ? '2px !important' : '1px',
                                            },
                                        }}
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

                    <Button color="primary" variant="contained" disableElevation size="large" onClick={handleClickOpen} fullWidth>
                        로그인
                    </Button>

                    <Dialog
                        open={open}
                        onClose={handleClose}
                        sx={{
                            "& .MuiDialog-container": {
                                "& .MuiPaper-root": {
                                    width: "100%",
                                    maxWidth: "760px",
                                },
                            },
                        }}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                    >
                        <DialogTitle id="alert-dialog-title">{'최초 로그인 시 비밀번호 변경'}</DialogTitle>
                        <IconButton
                            aria-label="close"
                            onClick={handleClose}
                            sx={{
                                position: 'absolute',
                                right: 14,
                                top: 8,
                                opacity: 0.4,
                                '&:hover': { opacity: 1 }
                            }}
                        >
                            <Icon sx={{ height: 20, width: 20, fill: 'var(--mui-palette-text-primary)' }}>
                                <Close />
                            </Icon>
                        </IconButton>
                        <DialogContent>
                            <Box pb="20px">
                                <DialogContentText id="alert-dialog-slide-description">
                                    소중한 개인정보보호를 위해 새로운 비밀번호를 설정해 주시기 바랍니다.
                                </DialogContentText>
                            </Box>
                            <PasswordChangeTable/>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose} variant="contained" color="primary">
                                변경
                            </Button>
                        </DialogActions>
                    </Dialog>
                </form>
            </Box>
        </Box>
    );
}
