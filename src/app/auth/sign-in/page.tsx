import * as React from 'react';

import '@/styles/global.css';
import '@/styles/common.scss';

import type { Metadata } from 'next';

import { config } from '@/config';
import { Layout } from '@/components/auth/layout';
import { SignInForm } from '@/components/auth/sign-in-form';

export const metadata = { title: `로그인 | ${config.site.name}` } satisfies Metadata;

export default function Page(): React.JSX.Element {
    return (
        <Layout>
            <SignInForm />
        </Layout>
    );
}
