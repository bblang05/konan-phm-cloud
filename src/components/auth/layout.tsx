'use client';

import * as React from 'react';
import RouterLink from 'next/link';
import { Box, Button, Card, Icon, Stack, Typography } from '@mui/material';

import { paths } from '@/paths';
import CmHeader from '@/components/CmHeader'; // header 컴포넌트
import Download from '@/components/svgIcon/Download';
import '@/styles/dashboard.scss';
import CmIcon from '@/components/CmIcon'; // css 파일

export interface LayoutProps {
    children: React.ReactNode;
}

export function Layout({ children }: LayoutProps): React.JSX.Element {
    return (
        <>
            {/* header */}
            <CmHeader
                utiles={
                    <button type="button" className="btn__line">
                        <CmIcon name="download__line--266" width="16"></CmIcon>
                        <span>매뉴얼 다운로드</span>
                    </button>
                }
            ></CmHeader>

            <Box
                sx={{
                    display: { xs: 'flex', lg: 'grid' },
                    flexDirection: 'column',
                    backgroundColor: '#F5F6F7',
                    minHeight: '100%',
                }}
            >
                <Box sx={{ display: 'flex', flex: '1 1 auto', flexDirection: 'column', minHeight: 'calc(100vh - 100px)' }}>
                    <Box
                        component="header"
                        sx={{
                            borderBottom: '1px solid var(--mui-palette-divider)',
                            backgroundColor: '#3D4454',
                            position: 'sticky',
                            top: 0,
                            zIndex: 'var(--mui-zIndex-appBar)',
                        }}
                    >
                        <Stack
                            direction="row"
                            spacing={2}
                            sx={{ alignItems: 'center', justifyContent: 'space-between', minHeight: '56px', px: 3 }}
                        >
                            <Stack sx={{ alignItems: 'center' }} direction="row" spacing={2}>
                                <Box component={RouterLink} href={paths.home} sx={{ display: 'inline-block', fontSize: 0 }}>
                                    <Box
                                        component="img"
                                        alt="logo"
                                        src="/images/logo.svg"
                                        sx={{ display: 'inline-block', height: 'auto', maxWidth: '100%', width: '135px' }}
                                    />
                                </Box>
                            </Stack>
                            <Stack sx={{ alignItems: 'center' }} direction="row" spacing={2}>
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    disableElevation
                                    startIcon={
                                        <Icon sx={{ marginRight: '4px', width: '16px', height: '16px' }}>
                                            <Download />
                                        </Icon>
                                    }
                                >
                                    매뉴얼 다운로드
                                </Button>
                            </Stack>
                        </Stack>
                    </Box>

                    <Box sx={{ alignItems: 'center', display: 'flex', flex: '1 1 auto', justifyContent: 'center', p: 3 }}>
                        <Box sx={{ maxWidth: '416px', width: '100%' }}>
                            <Card
                                elevation={9}
                                sx={{
                                    padding: '69px 48px 90px',
                                    zIndex: 1,
                                    width: '100%',
                                    maxWidth: '416px',
                                    borderColor: '#E6E8EB',
                                }}
                            >
                                {children}
                            </Card>

                            <Stack pt="20px">
                                <Typography variant="caption" textAlign="center" color="var(--mui-palette-neutral-300)">
                                    COPYRIGHT KONAN TECHNOLOGY INC. ALL RIGHTS RESERVED.
                                </Typography>
                            </Stack>
                        </Box>
                    </Box>
                </Box>
                <Box
                    sx={{
                        alignItems: 'center',
                        display: 'flex',
                        flex: '1 1 auto',
                        justifyContent: 'end',
                        padding: '20px 25px',
                    }}
                >
                    <Box
                        component="img"
                        alt="logo"
                        src="/images/watermark.svg"
                        sx={{ display: 'inline-block', height: 'auto', maxWidth: '100%', width: '130px' }}
                    />
                </Box>
            </Box>
        </>
    );
}
