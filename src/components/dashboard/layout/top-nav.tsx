'use client';

import * as React from 'react';
import RouterLink from 'next/link';
import {usePathname} from 'next/navigation';
import {Box, Stack, Typography} from '@mui/material';

import type {MainNavItemConfig} from '@/types/main-nav';
import {isNavItemActive} from '@/lib/is-nav-item-active';

import {mainNavItems} from './top-nav-path';

export function TopNav(): React.JSX.Element {
    const pathname = usePathname();

    return (
        <Box>
            <Box component="nav" sx={{flex: '1 1 auto'}}>
                {renderMainNavItems({pathname, items: mainNavItems})}
            </Box>
        </Box>
    );
}

function renderMainNavItems({items = [], pathname}: {
    items?: MainNavItemConfig[];
    pathname: string
}): React.JSX.Element {
    const children = items.reduce((acc: React.ReactNode[], curr: MainNavItemConfig): React.ReactNode[] => {
        const {key, ...item} = curr;

        acc.push(<MainNavItems key={key} pathname={pathname} {...item} />);

        return acc;
    }, []);

    return (
        <Stack component="ul" direction="row" spacing={1} sx={{listStyle: 'none', m: 0, p: 0}}>
            {children}
        </Stack>
    );
}

interface NavItemProps extends Omit<MainNavItemConfig, 'items'> {
    pathname: string;
}

function MainNavItems({disabled, external, href, matcher, pathname, title}: NavItemProps): React.JSX.Element {
    const active = isNavItemActive({disabled, external, href, matcher, pathname});

    return (
        <li>
            <Box
                {...(href
                    ? {
                        component: external ? 'a' : RouterLink,
                        href,
                        target: external ? '_blank' : undefined,
                        rel: external ? 'noreferrer' : undefined,
                    }
                    : {role: 'button'})}
                sx={{
                    alignItems: 'center',
                    color: 'var(--mui-palette-neutral-200)',
                    cursor: 'pointer',
                    display: 'flex',
                    flex: '0 0 auto',
                    gap: 1,
                    p: '16px',
                    position: 'relative',
                    textDecoration: 'none',
                    whiteSpace: 'nowrap',
                    ...(disabled && {
                        bgcolor: 'var(--NavItem-disabled-background)',
                        color: 'var(--NavItem-disabled-color)',
                        cursor: 'not-allowed',
                    }),
                    ...(active && {
                        borderBottom: '3px solid #FF9D24',
                        bgcolor: 'rgba(107, 121, 153, 0.2)',
                        color: 'var(--mui-palette-neutral-200)'
                    }),
                }}
            >
                <Box sx={{flex: '1 1 auto'}}>
                    <Typography
                        component="span"
                        sx={{color: 'inherit', fontSize: '0.94rem', fontWeight: 500, lineHeight: '20px'}}
                    >
                        {title}
                    </Typography>
                </Box>
            </Box>
        </li>
    );
}
