import * as React from 'react';
import type {Metadata} from 'next';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import {config} from '@/config';
import {BillingTable} from '@/components/dashboard/billing/billing-table';
import {Box, Link, Card, CardContent} from "@mui/material";

export const metadata = {title: `빌링관리 | ${config.site.name}`} satisfies Metadata;

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
                                <Typography variant="subtitle1">빌링관리</Typography>
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
                                            alt="새로고침"
                                            src="/images/ico_refresh-nor.svg"
                                            sx={{display: 'inline-block', height: '14px', width: '14px'}}
                                        />
                                    }
                                    color="inherit"
                                    size="small"
                                >
                                    새로고침
                                </Button>
                            </Stack>
                        </Stack>
                    </Box>
                </CardContent>
            </Card>
            <Card variant="outlined">
                <BillingTable/>
            </Card>
        </Stack>
    );
}
