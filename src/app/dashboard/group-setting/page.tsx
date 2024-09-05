import * as React from 'react';
import type {Metadata} from 'next';
import {Typography, Box, Card, CardContent, Grid, Stack} from '@mui/material';

import {config} from '@/config';
import {GroupList} from '@/components/dashboard/group/group-list';
import {MenuList} from '@/components/dashboard/group/menu-list';
import {UserList} from '@/components/dashboard/group/user-list';

export const metadata = {title: `그룹 관리 | ${config.site.name}`} satisfies Metadata;

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
                                <Typography variant="h6">그룹 관리</Typography>
                            </Stack>
                        </Stack>
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
                    <Card variant="outlined" sx={{height: 'calc(100vh - 220px)', overflow: 'auto'}}>
                        <UserList/>
                    </Card>
                </Grid>
                <Grid item xs>
                    <Card variant="outlined" sx={{height: 'calc(100vh - 220px)', overflow: 'auto'}}>
                        <MenuList/>
                    </Card>
                </Grid>
            </Grid>
        </Stack>
    );
}

