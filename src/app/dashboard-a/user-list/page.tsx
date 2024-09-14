import * as React from 'react';
import type {Metadata} from 'next';
import {Typography, Box, Card, CardContent, Stack, Button, Icon} from '@mui/material';

import {config} from '@/config';
import {UserTable} from '@/components/dashboard/user/user-table';
import Add from "@/components/svgIcon/Add";
import Refresh from "@/components/svgIcon/Refresh";

export const metadata = {title: `사용자 목록 | ${config.site.name}`} satisfies Metadata;

export default function Page(): React.JSX.Element {

    return (
        <Stack spacing={1}>
            <Card variant="outlined">
                <CardContent sx={{padding: '16px !important', height: '64px'}}>
                    <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                        <Box padding="4px 0">
                            <Typography variant="subtitle1">사용자 목록</Typography>
                        </Box>

                        <Box sx={{alignItems: 'center'}} gap="8px" display="flex">
                            <Button variant="contained" color="primary"
                                    disableElevation sx={{width: '86px', height: '32px', fontSize: '13px'}}
                                    startIcon={
                                        <Icon sx={{width: 14, height: 14}}>
                                            <Add/>
                                        </Icon>
                                    }>
                                생성
                            </Button>
                            <Button variant="contained" color="inherit"
                                    disableElevation sx={{lineHeight: 'inherit'}}
                                    startIcon={
                                        <Icon sx={{width: 14, height: 14}}>
                                            <Refresh/>
                                        </Icon>
                                    }>
                                새로고침
                            </Button>
                        </Box>
                    </Box>
                </CardContent>
            </Card>
            <UserTable/>
        </Stack>
    );
}
