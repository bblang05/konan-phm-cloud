'use client';

import * as React from 'react';
import {useRouter} from 'next/navigation';
import {zodResolver} from '@hookform/resolvers/zod';
import {
    Box,
    FormControl,
    FormHelperText,
    OutlinedInput,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableRow,
    Typography,
} from '@mui/material';
import {Controller, useForm} from 'react-hook-form';
import {z as zod} from 'zod';

import {authClient} from '@/lib/auth/client';
import {useUser} from '@/hooks/use-user';

const schema = zod.object({
    password: zod.string().min(1, {message: '비밀번호가 일치하지 않습니다. (1/5회)'}),
});

type Values = zod.infer<typeof schema>;

const defaultValues: Values = {password: '1234'};

export default function PasswordChangeTable() {
    const router = useRouter();
    const {checkSession} = useUser();
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

    return (
        <Box>
            <form onSubmit={handleSubmit(onSubmit)}>
                <TableContainer>
                    <Table size="small" sx={{minWidth: 650}} aria-label="simple table" className="form-table">
                        <TableBody>
                            <TableRow>
                                <TableCell component="th" scope="row" width={160}>
                                    기존 비밀번호
                                </TableCell>
                                <TableCell>
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <Box display="flex" alignItems="center" gap={1}>
                                            <Box width={320}>
                                                <Controller
                                                    control={control}
                                                    name="password"
                                                    render={({field}) => (
                                                        <FormControl fullWidth error={Boolean(errors.password)}>
                                                            <OutlinedInput
                                                                type="password"
                                                                size="small"
                                                                placeholder="비밀번호"
                                                                {...field}
                                                            />
                                                            <FormHelperText>{errors.password?.message}</FormHelperText>
                                                        </FormControl>
                                                    )}
                                                />
                                            </Box>
                                        </Box>
                                    </form>
                                </TableCell>
                            </TableRow>

                            <TableRow>
                                <TableCell component="th" scope="row" width={160}>
                                    변경 비밀번호
                                </TableCell>
                                <TableCell>
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <Box display="flex" alignItems="center" gap={2}>
                                            <Box width={320}>
                                                <Controller
                                                    control={control}
                                                    name="password"
                                                    render={({field}) => (
                                                        <FormControl fullWidth error={Boolean(errors.password)}>
                                                            <OutlinedInput
                                                                type="password"
                                                                size="small"
                                                                placeholder="비밀번호"
                                                                {...field}
                                                            />
                                                            <FormHelperText>{errors.password?.message}</FormHelperText>
                                                        </FormControl>
                                                    )}
                                                />
                                            </Box>
                                        </Box>
                                    </form>
                                </TableCell>
                            </TableRow>

                            <TableRow>
                                <TableCell component="th" scope="row" width={160}>
                                    변경 비밀번호 확인
                                </TableCell>
                                <TableCell>
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <Box display="flex" alignItems="center" gap={2}>
                                            <Box width={320}>
                                                <Controller
                                                    control={control}
                                                    name="password"
                                                    render={({field}) => (
                                                        <FormControl fullWidth error={Boolean(errors.password)}>
                                                            <OutlinedInput
                                                                type="password"
                                                                error
                                                                size="small"
                                                                placeholder="비밀번호"
                                                                {...field}
                                                            />
                                                        </FormControl>
                                                    )}
                                                />
                                            </Box>
                                            <Box>
                                                <FormHelperText error={true}>비밀번호가 일치하지 않습니다.</FormHelperText>
                                            </Box>
                                        </Box>
                                    </form>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>

                <Box pt={2}>
                    <Typography variant="caption" color="var(--mui-palette-neutral-500)">
                        * 영문 대소문자, 숫자, 특수문자(!@#$%^&*-=+)를 혼합하여 9~24자 이내로 입력하시기 바랍니다.
                    </Typography>
                </Box>
            </form>
        </Box>
    );
}
