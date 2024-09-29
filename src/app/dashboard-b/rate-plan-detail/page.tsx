import '@/styles/dashboard.scss'; // css 파일

import * as React from 'react';
import type { Metadata } from 'next';
import { Box } from '@mui/material';

import { config } from '@/config';
import { AdditionalTableForm } from '@/components/dashboard/rate-plan/additional-table-form';
import { BasicTableForm } from '@/components/dashboard/rate-plan/basic-table-form';

export const metadata = { title: `요금제 상세 | ${config.site.name}` } satisfies Metadata;

export default function Page(): React.JSX.Element {
    return (
        <>
            <div className="header-box">
                <h4>요금제 상세</h4>
            </div>

            <Box>
                <BasicTableForm />
                <AdditionalTableForm />
            </Box>
        </>
    );
}
