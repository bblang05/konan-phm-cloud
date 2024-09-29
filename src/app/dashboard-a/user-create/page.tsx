import '@/styles/dashboard.scss'; // css 파일

import * as React from 'react';
import type { Metadata } from 'next';

import { config } from '@/config';
import { CreateTableForm } from '@/components/dashboard/user/create-table-form';

export const metadata = { title: `사용자 생성 | ${config.site.name}` } satisfies Metadata;

export default function Page(): React.JSX.Element {
    return (
        <>
            <div className="header-box">
                <h4>사용자 생성</h4>
            </div>

            <CreateTableForm />
        </>
    );
}
