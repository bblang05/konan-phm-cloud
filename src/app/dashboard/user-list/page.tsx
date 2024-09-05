import * as React from 'react';
import type {Metadata} from 'next';
import {Typography, Box, Card, CardContent, Link, Stack, Button} from '@mui/material';

import {config} from '@/config';
import {UserTable} from '@/components/dashboard/user/user-table';

export const metadata = {title: `사용자 목록 | ${config.site.name}`} satisfies Metadata;

export default function Page(): React.JSX.Element {

    return (
        <Stack spacing={1}>
            <Card variant="outlined">
                <CardContent sx={{padding: '20px !important'}}>
                    <Box
                        sx={{
                            backgroundColor: 'var(--mui-palette-background-paper)',
                        }}
                    >
                        <Stack direction="row"
                               sx={{alignItems: 'center', justifyContent: 'space-between'}}>
                            <Stack sx={{alignItems: 'center'}} direction="row">
                                <Typography variant="subtitle1">사용자 목록</Typography>
                            </Stack>

                            <Stack sx={{alignItems: 'center'}} direction="row" gap={1}>
                                <Button
                                    variant="contained"
                                    component={Link}
                                    href=""
                                    disableElevation
                                    startIcon={
                                        <Box
                                            component="img"
                                            alt="logo"
                                            src="/images/ico_add-14.svg"
                                            sx={{display: 'inline-block', height: '14px', width: '14px'}}
                                        />
                                    }
                                    color="primary"
                                    size="small"
                                    sx={{width: '86px'}}
                                >
                                    생성
                                </Button>
                                <Button
                                    variant="contained"
                                    component={Link}
                                    href=""
                                    disableElevation
                                    startIcon={
                                        <Box
                                            component="img"
                                            alt="logo"
                                            src="/images/ico_refresh-nor.svg"
                                            sx={{display: 'inline-block', height: '14px', width: '14px'}}
                                        />
                                    }
                                    color="inherit"
                                    size="small"
                                    sx={{width: '86px'}}
                                >
                                    새로고침
                                </Button>
                            </Stack>
                        </Stack>
                    </Box>
                </CardContent>
            </Card>
            <UserTable/>
        </Stack>
    );
}
