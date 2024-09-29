import '@/styles/dashboard.scss'; // css 파일

import * as React from 'react';
import type { Metadata } from 'next';
import { Card, Icon } from '@mui/material';
import Button from '@mui/material/Button';

import { config } from '@/config';
import { BillingTable } from '@/components/dashboard/billing/billing-table';
import Refresh from '@/components/svgIcon/Refresh';

export const metadata = { title: `빌링관리 | ${config.site.name}` } satisfies Metadata;

export default function Page(): React.JSX.Element {
    return (
        <>
            <div className="header-box">
                <h4>빌링 목록</h4>
                <div className="btn__group">
                    <Button
                        variant="contained"
                        color="inherit"
                        disableElevation
                        sx={{ lineHeight: 'inherit' }}
                        startIcon={
                            <Icon sx={{ width: 14, height: 14 }}>
                                <Refresh />
                            </Icon>
                        }
                    >
                        새로고침
                    </Button>
                </div>
            </div>
            <Card variant="outlined">
                <BillingTable />
            </Card>
        </>
    );
}
