import * as React from 'react';
import type {Metadata} from 'next';
import {Typography, Box, Card, CardContent, Grid, Stack} from '@mui/material';

import {config} from '@/config';
import {GroupList} from '@/components/dashboard/group/group-list';
import {UserListDefalt} from '@/components/dashboard/group/user-list-default';
import {MenuListDefault} from '@/components/dashboard/group/menu-list-default';

export const metadata = {title: `그룹 관리 | ${config.site.name}`} satisfies Metadata;

export default function Page(): React.JSX.Element {

    return (
        <Stack spacing={1}>
            <Card variant="outlined">
                <CardContent sx={{padding: '16px !important', height: '64px'}}>
                    <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                        <Box padding="4px 0">
                            <Typography variant="subtitle1">그룹 관리</Typography>
                        </Box>
                    </Box>
                </CardContent>
            </Card>

            <Grid container spacing={2}>
                <Grid item xs={3}>
                    <Card variant="outlined" sx={{height: 'calc(100vh - 220px)', overflow: 'auto'}}>
                        <GroupList/>
                    </Card>
                </Grid>
                <Grid item xs>
                    <Card variant="outlined" sx={{height: 'calc(100vh - 220px)'}}>
                        <UserListDefalt/>
                    </Card>
                </Grid>
                <Grid item xs>
                    <Card variant="outlined" sx={{height: 'calc(100vh - 220px)', overflow: 'auto'}}>
                        <MenuListDefault/>
                    </Card>
                </Grid>
            </Grid>
        </Stack>
    );
}

