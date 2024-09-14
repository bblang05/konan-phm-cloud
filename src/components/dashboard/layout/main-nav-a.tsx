'use client';

import * as React from 'react';
import RouterLink from 'next/link';
import {Stack, Divider, Box, IconButton, Badge, Button, Icon} from '@mui/material';

import {paths} from '@/paths';
import {usePopover} from '@/hooks/use-popover';
import {TopNavA} from '@/components/dashboard/layout/top-nav-a';
import {SubNav} from '@/components/dashboard/layout/sub-nav';

import {UserPopover} from './user-popover';
import Clock from "@/components/svgIcon/Clock";
import Alram from "@/components/svgIcon/Alram";
import Setting from "@/components/svgIcon/Setting";
import ArrowBottom from "@/components/svgIcon/ArrowBottom";

export function MainNavA(): React.JSX.Element {
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
                                <TopNavA/>
                            </Stack>
                            <Stack sx={{alignItems: 'center'}} direction="row" spacing={3}
                                   divider={<Divider orientation="vertical" flexItem sx={{
                                       height: '14px',
                                       marginTop: '10px',
                                       borderColor: 'rgba(158, 166, 184, 0.5)'
                                   }}/>}>

                                <Button variant="text" color="inherit" disableElevation sx={{
                                    padding: '5px 12px'
                                }}
                                        startIcon={
                                            <Icon sx={{ width: 20, height: 20}}>
                                                <Clock/>
                                            </Icon>
                                        }>
                                    9분 50초 전
                                </Button>
                                <Box gap="12px" display="flex" justifyContent="center">
                                    <Badge color="secondary" badgeContent="" variant="dot" overlap="circular"
                                           anchorOrigin={{
                                               vertical: 'top',
                                               horizontal: 'right',
                                           }}
                                    >
                                        <IconButton
                                            sx={{
                                                backgroundColor: '#515D7880',
                                                width: '32px',
                                                height: '32px',
                                                color: '#E1E4EB',
                                                border: '1px solid #67718980',
                                                borderRadius: '100%',
                                                '&:hover': {
                                                    backgroundColor: '#515D78CC',
                                                    border: '1px solid #677189CC',
                                                }
                                            }}
                                        >
                                            <Icon sx={{height: 20, width: 20, fill: '#E1E4EB', display: 'flex'}}>
                                                <Alram />
                                            </Icon>
                                        </IconButton>
                                    </Badge>
                                    <IconButton
                                        sx={{
                                            backgroundColor: '#515D7880',
                                            width: '32px',
                                            height: '32px',
                                            color: '#E1E4EB',
                                            border: '1px solid #67718980',
                                            borderRadius: '100%',
                                            '&:hover': {backgroundColor: '#515D78CC', border: '1px solid #677189CC',}
                                        }}
                                    >
                                        <Icon sx={{height: 20, width: 20, fill: '#E1E4EB', display: 'flex'}}>
                                            <Setting/>
                                        </Icon>
                                    </IconButton>

                                    <Box onClick={userPopover.handleOpen} ref={userPopover.anchorRef}>
                                        <Button variant="outlined" color="inherit" disableElevation sx={{
                                            padding: '6px 12px', fontSize: '12px'
                                        }}
                                                endIcon={
                                                    <Icon sx={{width: 12, height: 12}}>
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
                <SubNav/>
            </Box>
        </React.Fragment>
    );
}
