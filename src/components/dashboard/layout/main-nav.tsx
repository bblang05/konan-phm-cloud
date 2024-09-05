'use client';

import * as React from 'react';
import RouterLink from 'next/link';
import {Stack, Divider, Box, IconButton, Typography, Badge} from '@mui/material';

import {paths} from '@/paths';
import {usePopover} from '@/hooks/use-popover';
import {TopNav} from '@/components/dashboard/layout/top-nav';
import {SubNav} from '@/components/dashboard/layout/sub-nav';

import {UserPopover} from './user-popover';

export function MainNav(): React.JSX.Element {
    const userPopover = usePopover<HTMLDivElement>();

    return (
        <React.Fragment>
            < Box
                component="header"
                sx={{
                    backgroundColor: 'var(--mui-palette-background-paper)',
                    position: 'sticky',
                    top: 0,
                    zIndex: 'var(--mui-zIndex-appBar)',
                    minWidth: '1280px'
                }}
            >

                <Box sx={{display: 'flex', flex: '1 1 auto', flexDirection: 'column',}}>
                    <Box
                        component="header"
                        sx={{
                            backgroundColor: '#3D4454',
                            position: 'sticky',
                            top: 0,
                            zIndex: 'var(--mui-zIndex-appBar)',
                        }}
                    >
                        <Stack
                            direction="row"
                            spacing={2}
                            sx={{alignItems: 'center', justifyContent: 'space-between', minHeight: '56px', px: 2}}
                        >
                            <Stack sx={{alignItems: 'center'}} direction="row">
                                <Box
                                    component={RouterLink}
                                    href={paths.home}
                                    sx={{display: 'inline-block', fontSize: 0, marginRight: '97px', width: '135px'}}
                                >
                                    <Box
                                        component="img"
                                        alt="logo"
                                        src="/images/logo.svg"
                                        sx={{display: 'inline-block', height: 'auto', maxWidth: '100%', width: '135px'}}
                                    />
                                </Box>
                                <TopNav/>
                            </Stack>
                            <Stack sx={{alignItems: 'center'}} direction="row" spacing={3}
                                   divider={<Divider orientation="vertical" flexItem sx={{
                                       height: '14px',
                                       marginTop: '10px',
                                       borderColor: 'rgba(158, 166, 184, 0.5)'
                                   }}/>}>

                                <Box display="flex" alignItems="center" mr="12px" gap="6px">
                                    <Box
                                        component="img"
                                        alt="logo"
                                        src="/images/clock__line--9ea.svg"
                                        sx={{display: 'inline-block', height: '20px', width: '20px'}}
                                    />
                                    <Typography variant="subtitle2" color="var(--mui-palette-neutral-300)">
                                        9분 50초 전
                                    </Typography>
                                </Box>
                                <Box gap="12px" display="flex" justifyContent="center">
                                    <Badge color="secondary" badgeContent=" " variant="dot" overlap="circular"
                                           anchorOrigin={{
                                               vertical: 'top',
                                               horizontal: 'right',
                                           }}
                                    >
                                        <IconButton style={{
                                            backgroundColor: '#515D7880',
                                            width: '32px',
                                            height: '32px',
                                            color: '#E1E4EB',
                                            border: '1px solid #67718980',
                                            borderRadius: '100%'
                                        }}>
                                            <Box
                                                component="img"
                                                alt="logo"
                                                src="/images/alram__line--e1e.svg"
                                                sx={{display: 'inline-block', height: '20px', width: '20px'}}
                                            />
                                        </IconButton>
                                    </Badge>

                                    <IconButton style={{
                                        backgroundColor: '#515D7880',
                                        width: '32px',
                                        height: '32px',
                                        color: '#E1E4EB',
                                        border: '1px solid #67718980',
                                        borderRadius: '100%'
                                    }}>
                                        <Box
                                            component="img"
                                            alt="logo"
                                            src="/images/setting__line--e1e.svg"
                                            sx={{display: 'inline-block', height: '20px', width: '20px'}}
                                        />
                                    </IconButton>
                                    <Box onClick={userPopover.handleOpen}
                                         ref={userPopover.anchorRef} gap={0.5} sx={{
                                        cursor: 'pointer',
                                        border: '1px solid #677189',
                                        backgroundColor: '#515D78',
                                        padding: '6px 12px',
                                        height: '30px',
                                        borderRadius: '3px',
                                        color: '#E1E4EB',
                                        display: 'flex',
                                        alignItems: 'center'
                                    }}>
                                        <Typography variant="caption">김코난</Typography>
                                        <Box
                                            component="img"
                                            alt="logo"
                                            src="/images/arrow-b__line--e1e.svg"
                                            sx={{display: 'inline-block', height: '12px', width: '12px'}}
                                        />
                                    </Box>
                                    <UserPopover
                                        anchorEl={userPopover.anchorRef.current}
                                        onClose={userPopover.handleClose}
                                        open={userPopover.open}
                                    />
                                </Box>
                            </Stack>
                        </Stack>
                    </Box>
                </Box>
                <SubNav/>
            </Box>
        </React.Fragment>
    );
}
