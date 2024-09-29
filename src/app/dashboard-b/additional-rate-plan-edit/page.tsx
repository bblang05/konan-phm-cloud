import '@/styles/dashboard.scss'; // css 파일

import * as React from 'react';
import type { Metadata } from 'next';

import { config } from '@/config';
import { AdditionalEditTableForm } from '@/components/dashboard/rate-plan/additional-edit-table-form';

export const metadata = { title: `요금제 수정 | ${config.site.name}` } satisfies Metadata;

export default function Page(): React.JSX.Element {
    return (
        <>
            <div className="header-box">
                <h4>요금제 수정</h4>
            </div>

            <AdditionalEditTableForm />
        </>
    );
}
