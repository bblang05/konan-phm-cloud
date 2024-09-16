import * as React from 'react';
import type {Metadata} from 'next';

import {config} from '@/config';
import {Layout} from '@/components/auth/layout';
import {FirstLogin} from '@/components/auth/first-login';

export const metadata = {title: `로그인 | ${config.site.name}`} satisfies Metadata;

export default function Page(): React.JSX.Element {
    return (
        <Layout>
            <FirstLogin/>
        </Layout>
    );
}
