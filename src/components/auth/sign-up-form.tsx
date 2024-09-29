'use client';

import * as React from 'react';
import {useRouter} from 'next/navigation';
import {zodResolver} from '@hookform/resolvers/zod';
import {
    Box,
    Button,
    FormControl,
    Link,
    OutlinedInput,
    Typography,
} from '@mui/material';
import {Controller, useForm} from 'react-hook-form';
import {z as zod} from 'zod';

import {authClient} from '@/lib/auth/client';
import {useUser} from '@/hooks/use-user';
import SecretOn from "@/components/svgIcon/SecretOn";
import SecretOff from "@/components/svgIcon/SecretOff";

// Validation schema using Zod
const schema = zod.object({
    email: zod.string().min(1, {message: '존재하지 않는 아이디입니다.'}).email(),
    password: zod.string().min(1, {message: '비밀번호가 일치하지 않습니다. (1/5회)'}),
});

type Values = zod.infer<typeof schema>;

const defaultValues: Values = {email: 'admin@konantech.com', password: '1234'};

export function SignUpForm(): React.JSX.Element {
    const router = useRouter();
    const {checkSession} = useUser();

    const [showPassword, setShowPassword] = React.useState<boolean>(false);
    const [_isPending, setIsPending] = React.useState<boolean>(false);

    const {
        control,
        handleSubmit,
        setError,
        formState: {errors},
    } = useForm<Values>({defaultValues, resolver: zodResolver(schema)});

    // Submission handler
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
                            name="email"
                            control={control}
                            render={({field}) => (
                                <FormControl fullWidth error={Boolean(errors.email)}>
                                    <OutlinedInput
                                        placeholder="아이디 (이메일)"
                                        type="email"
                                        sx={{
                                            '& .MuiOutlinedInput-notchedOutline': {
                                                borderWidth: errors.email ? '2px !important' : '1px',
                                            },
                                            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                                borderWidth: '2px !important',
                                            },
                                        }}
                                        {...field}
                                    />
                                    {errors.email && (
                                        <Typography color="error">
                                            {errors.email.message}
                                        </Typography>
                                    )}
                                </FormControl>
                            )}
                        />
                    </Box>

                    <Box pb="12px">
                        <Controller
                            name="password"
                            control={control}
                            render={({field}) => (
                                <FormControl fullWidth error={Boolean(errors.password)}>
                                    <OutlinedInput
                                        placeholder="비밀번호"
                                        {...field}
                                        type={showPassword ? 'text' : 'password'}
                                        sx={{
                                            '& .MuiOutlinedInput-notchedOutline': {
                                                borderWidth: errors.email ? '2px !important' : '1px',
                                            },
                                            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                                borderWidth: '2px !important',
                                            },
                                        }}
                                        endAdornment={
                                            <Box
                                                sx={{display: 'flex', alignItems: 'center', cursor: 'pointer'}}
                                                onClick={() => setShowPassword(!showPassword)}
                                            >
                                                {showPassword ? <SecretOff/> : <SecretOn/>}
                                            </Box>
                                        }
                                    />
                                    {errors.password && (
                                        <Typography color="error">
                                            {errors.password.message}
                                        </Typography>
                                    )}
                                </FormControl>
                            )}
                        />
                    </Box>

                    <Box pb="12px">
                        <FormControl fullWidth>
                            <OutlinedInput placeholder="이름" sx={{
                                '& .MuiOutlinedInput-notchedOutline': {
                                    borderWidth : '1px',
                                },
                                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                    borderWidth: '2px !important',
                                },
                            }}/>
                        </FormControl>
                    </Box>

                    <Box pb="12px">
                        <FormControl fullWidth>
                            <OutlinedInput placeholder="회사명" sx={{
                                '& .MuiOutlinedInput-notchedOutline': {
                                    borderWidth: '1px',
                                },
                                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                    borderWidth: '2px !important',
                                },
                            }}/>
                        </FormControl>
                    </Box>

                    <Box sx={{margin: '20px 0 16px'}}>
                        <Button color="primary" variant="contained" size="large" fullWidth>
                            회원가입
                        </Button>
                    </Box>

                    {/* Login link */}
                    <Box marginTop="24px" textAlign="center">
                        <Link href="" color="inherit" underline="hover">
                            <Typography variant="subtitle2" fontWeight="400" align="center" display="inline-block">로그인</Typography>
                        </Link>
                    </Box>
                </form>
            </Box>
        </Box>
    );
}
