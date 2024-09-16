'use client';

import * as React from 'react';
import RouterLink from 'next/link';
import {Stack, Divider, Box, Button, Icon} from '@mui/material';

import {paths} from '@/paths';
import {usePopover} from '@/hooks/use-popover';
import {TopNavB} from '@/components/dashboard/layout/top-nav-b';

import {UserPopover} from './user-popover';
import ArrowBottom from "@/components/svgIcon/ArrowBottom";

export function MainNavB(): React.JSX.Element {
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
                                <TopNavB/>
                            </Stack>
                            <Stack sx={{alignItems: 'center'}} direction="row" spacing={3}
                                   divider={<Divider orientation="vertical" flexItem sx={{
                                       height: '14px',
                                       marginTop: '10px',
                                       borderColor: 'rgba(158, 166, 184, 0.5)'
                                   }}/>}>

                                <Box gap="12px" display="flex" justifyContent="center">

                                    <Box onClick={userPopover.handleOpen} ref={userPopover.anchorRef}>
                                        <Button variant="outlined" color="inherit" disableElevation sx={{
                                            padding: '6px 12px', fontSize: '12px', lineHeight: '1',
                                        }}
                                                endIcon={
                                                    <Icon sx={{width: 12, height: 12, marginLeft: '-4px',}}>
                                                        <ArrowBottom/>
                                                    </Icon>
                                                }>
                                            김코난
                                        </Button>
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
            </Box>
        </React.Fragment>
    );
}
