'use client';

import * as React from 'react';
import type {Metadata} from 'next';
import {Typography, Box, Card, CardContent, Stack } from '@mui/material';

import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {DatePicker} from "@mui/x-date-pickers/DatePicker";

import {RatePlanTable} from '@/components/dashboard/usage/rate-plan-table';
import {RatePlanGraph} from '@/components/dashboard/usage/rate-plan-graph';

// export const metadata = {title: `사용량 관리 | ${config.site.name}`} satisfies Metadata;

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
                                <Typography variant="subtitle1">사용량 상세</Typography>
                            </Stack>

                            <Stack sx={{alignItems: 'center'}} direction="row" gap={1}>
                                <Box display="flex" alignItems="center" gap={1}>
                                    <Typography variant="body2">사용기간:</Typography>
                                    <Box className="date-custom" width={210}>
                                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                                            <DatePicker label=""
                                                        slotProps={{textField: {size: 'small', fullWidth: true}}}/>
                                        </LocalizationProvider>
                                    </Box>
                                    ~
                                    <Box className="date-custom" width={210}>
                                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                                            <DatePicker label=""
                                                        slotProps={{textField: {size: 'small', fullWidth: true}}}/>
                                        </LocalizationProvider>
                                    </Box>
                                </Box>
                            </Stack>
                        </Stack>
                    </Box>
                </CardContent>
            </Card>

            <RatePlanTable/>
            <RatePlanGraph/>
        </Stack>
    );
}

