'use client';

import * as React from 'react';
import RouterLink from 'next/link';
import {usePathname} from 'next/navigation';
import {Box, Container, Stack} from '@mui/material';

import type {SubNavItemConfig} from '@/types/sub-nav';
import {isNavItemActive} from '@/lib/is-nav-item-active';

import {subNavItems} from './sub-nav-path';

export function SubNav(): React.JSX.Element {
    const pathname = usePathname();

    return (
        <Box
            sx={{
                '--SideNav-background': 'var(--mui-palette-background-paper)',
                '--SideNav-color': 'var(--mui-palette-common-white)',
                '--NavItem-color': 'var(--mui-palette-neutral-300)',
                '--NavItem-hover-background': 'rgba(255, 255, 255, 0.04)',
                '--NavItem-active-color': 'var(--mui-palette-text-primary)',
                '--NavItem-disabled-color': 'var(--mui-palette-neutral-500)',
                backgroundColor: 'var(--SideNav-background)',
                color: 'var(--mui-palette-neutral-300)',
                display: 'flex',
                flexDirection: 'column',
                borderBottom: '1px solid #D8DDE3',
                width: 'var(--SideNav-width)',
                '&::-webkit-scrollbar': {display: 'none'},
            }}
        >
            <Container>
                <Box component="nav" sx={{flex: '1 1 auto'}}>
                    {renderNavItems({pathname, items: subNavItems})}
                </Box>
            </Container>
        </Box>
    );
}

function renderNavItems({items = [], pathname}: { items?: SubNavItemConfig[]; pathname: string }): React.JSX.Element {
    const children = items.reduce((acc: React.ReactNode[], curr: SubNavItemConfig): React.ReactNode[] => {
        const {key, ...item} = curr;

        acc.push(<NavItem key={key} pathname={pathname} {...item} />);

        return acc;
    }, []);

    return (
        <Stack component="ul" direction="row" spacing={1} sx={{listStyle: 'none', m: 0, p: 0}}>
            {children}
        </Stack>
    );
}

interface NavItemProps extends Omit<SubNavItemConfig, 'items'> {
    pathname: string;
}

function NavItem({disabled, external, href, matcher, pathname, title}: NavItemProps): React.JSX.Element {
    const active = isNavItemActive({disabled, external, href, matcher, pathname});

    return (
        <li style={{padding: '0 14px'}}>
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
                    cursor: 'pointer',
                    display: 'flex',
                    flex: '0 0 auto',
                    p: '14px 0',
                    position: 'relative',
                    textDecoration: 'none',
                    height: '48px',
                    whiteSpace: 'nowrap',
                    ...(disabled && {
                        backgroundColor: 'var(--NavItem-disabled-background)',
                        color: 'var(--NavItem-disabled-color)',
                        cursor: 'not-allowed',
                    }),
                    ...(active
                        ? {
                            fontWeight: '500',
                            borderBottom: '2px solid #22262B',
                            backgroundColor: 'var(--NavItem-active-background)',
                            color: 'var(--NavItem-active-color)',
                        }
                        : {
                            fontWeight: '400',
                            color: '#22262B',
                        }),

                }}
            >
                {title}
            </Box>
        </li>
    );
}
