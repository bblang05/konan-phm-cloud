import * as React from 'react';
import type {Metadata} from 'next';
import {Typography, Box, Card, CardContent, Stack} from '@mui/material';

import {config} from '@/config';
import {EditTableForm} from '@/components/dashboard/user/edit-table-form';

export const metadata = {title: `사용자 수정 | ${config.site.name}`} satisfies Metadata;

export default function Page(): React.JSX.Element {

    return (
        <Stack spacing={1}>
            <Card variant="outlined">
                <CardContent sx={{padding: '16px !important', height: '64px'}}>
                    <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                        <Box padding="4px 0">
                            <Typography variant="subtitle1">사용자 수정</Typography>
                        </Box>
                    </Box>
                </CardContent>
            </Card>

            <EditTableForm/>
        </Stack>
    );
}
