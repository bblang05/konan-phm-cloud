import * as React from 'react';
import type { Metadata } from 'next';
import Container from '@mui/material/Container';
import GlobalStyles from '@mui/material/GlobalStyles';

import { config } from '@/config';
import { MainNavA } from '@/components/dashboard/layout/main-nav-a';

interface LayoutProps {
    children: React.ReactNode;
}

export const metadata = { title: `${config.site.name}` } satisfies Metadata;

export default function Layout({ children }: LayoutProps): React.JSX.Element {
    return (
        <>
            <GlobalStyles
                styles={{
                    body: {
                        '--MainNav-height': '56px',
                        '--MainNav-zIndex': 1000,
                        backgroundColor: '#F5F6F7',
                    },
                }}
            />
            <MainNavA />
            <main>
                <Container sx={{ py: '20px' }}>{children}</Container>
            </main>
        </>
    );
}
