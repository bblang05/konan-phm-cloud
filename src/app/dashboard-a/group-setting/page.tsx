import '@/styles/dashboard.scss'; // css 파일

import * as React from 'react';
import type { Metadata } from 'next';
import { Card, Grid } from '@mui/material';

import { config } from '@/config';
import { GroupList } from '@/components/dashboard/group/group-list';
import { MenuList } from '@/components/dashboard/group/menu-list';
import { UserList } from '@/components/dashboard/group/user-list';

export const metadata = { title: `그룹 관리 | ${config.site.name}` } satisfies Metadata;

export default function Page(): React.JSX.Element {
    return (
        <>
            <div className="header-box">
                <h4>그룹 관리</h4>
            </div>

            <Grid container spacing="10px">
                <Grid item xs={3}>
                    <Card variant="outlined" sx={{ height: 'calc(100vh - 220px)', overflow: 'auto' }}>
                        <GroupList />
                    </Card>
                </Grid>
                <Grid item xs>
                    <Card variant="outlined" sx={{ height: 'calc(100vh - 220px)' }}>
                        <UserList />
                    </Card>
                </Grid>
                <Grid item xs>
                    <Card variant="outlined" sx={{ height: 'calc(100vh - 220px)', overflow: 'auto' }}>
                        <MenuList />
                    </Card>
                </Grid>
            </Grid>
        </>
    );
}
