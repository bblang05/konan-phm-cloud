import * as React from 'react';
import type {Metadata} from 'next';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import {config} from '@/config';
import {BillingTable} from '@/components/dashboard/billing/billing-table';
import {Box, Card, CardContent, Icon} from "@mui/material";
import Refresh from "@/components/svgIcon/Refresh";

export const metadata = {title: `빌링관리 | ${config.site.name}`} satisfies Metadata;

export default function Page(): React.JSX.Element {

    return (
        <Stack spacing={1}>
            <Card variant="outlined">
                <CardContent sx={{padding: '16px !important', height: '64px',}}>
                    <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                        <Box padding="4px 0">
                            <Typography variant="subtitle1">빌링관리</Typography>
                        </Box>

                        <Box sx={{alignItems: 'center'}} gap="8px" display="flex">
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
            <Card variant="outlined">
                <BillingTable/>
            </Card>
        </Stack>
    );
}
