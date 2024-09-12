import * as React from 'react';
import type {Metadata} from 'next';
import {Typography, Box, Card, CardContent, Link, Stack, Button, Icon} from '@mui/material';

import {config} from '@/config';
import {UserTable} from '@/components/dashboard/user/user-table';
import Add from "@/components/svgIcon/Add";
import Refresh from "@/components/svgIcon/Refresh";

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
                                <Button variant="contained" color="primary" component={Link} href=""
                                        disableElevation sx={{width: '86px', fontSize:'13px'}}
                                        startIcon={
                                            <Icon sx={{width: 14, height: 14}}>
                                                <Add/>
                                            </Icon>
                                        }>
                                    생성
                                </Button>
                                <Button variant="contained" color="inherit" component={Link} href=""
                                        disableElevation sx={{width: '86px', fontSize:'13px'}}
                                        startIcon={
                                            <Icon sx={{width: 14, height: 14}}>
                                                <Refresh/>
                                            </Icon>
                                        }>
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
