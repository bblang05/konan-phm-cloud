'use client';

import '@/styles/dashboard.scss'; // css 파일

import * as React from 'react';
// import type {Metadata} from 'next';
import { Typography } from '@mui/material';

import CustomCalendar from '@/components/dashboard/usage/custom-calendar';
import { RatePlanGraph } from '@/components/dashboard/usage/rate-plan-graph';
import { RatePlanTable } from '@/components/dashboard/usage/rate-plan-table';

// export const metadata = {title: `사용량 관리 | ${config.site.name}`} satisfies Metadata;

export default function Page(): React.JSX.Element {
    return (
        <>
            <div className="header-box">
                <h4>사용량 상세</h4>
                <div className="btn__group">
                    <Typography variant="body2">사용기간:</Typography>
                    <CustomCalendar />
                    ~
                    <CustomCalendar />
                </div>
            </div>

            <RatePlanTable />
            <RatePlanGraph />
        </>
    );
}
