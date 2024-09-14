'use client';

import * as React from 'react';
// import type {Metadata} from 'next';
import {Typography, Box, Card, CardContent, Stack} from '@mui/material';

// import {config} from '@/config';
import {RatePlanTable} from '@/components/dashboard/usage/rate-plan-table';
import {RatePlanGraph} from '@/components/dashboard/usage/rate-plan-graph';
import CustomCalendar from "@/components/dashboard/usage/custom-calendar";

// export const metadata = {title: `사용량 관리 | ${config.site.name}`} satisfies Metadata;

export default function Page(): React.JSX.Element {

    return (
        <Stack spacing={1}>
            <Card variant="outlined">
                <CardContent sx={{padding: '16px !important', height: '64px'}}>
                    <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                        <Box padding="4px 0">
                            <Typography variant="subtitle1">사용량 상세</Typography>
                        </Box>
                        <Box display="flex" alignItems="center" gap={1}>
                            <Typography variant="body2">사용기간:</Typography>
                            <CustomCalendar/>
                            ~
                            <CustomCalendar/>
                        </Box>
                    </Box>
                </CardContent>
            </Card>

            <RatePlanTable/>
            <RatePlanGraph/>
        </Stack>
    );
}

