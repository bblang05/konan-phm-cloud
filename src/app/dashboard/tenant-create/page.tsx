import * as React from 'react';
import type {Metadata} from 'next';
import {Typography, Box, Card, CardContent, Stack} from '@mui/material';

import {config} from '@/config';
import {CreateTableForm} from '@/components/dashboard/tenant/create-table-form';

export const metadata = {title: `테넌트 생성 | ${config.site.name}`} satisfies Metadata;

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
                                <Typography variant="subtitle1">테넌트 생성</Typography>
                            </Stack>

                        </Stack>
                    </Box>
                </CardContent>
            </Card>

            <CreateTableForm/>
        </Stack>
    );
}
