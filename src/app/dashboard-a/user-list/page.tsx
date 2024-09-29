import '@/styles/dashboard.scss'; // css 파일

import * as React from 'react';
import type { Metadata } from 'next';
import { Button, Icon } from '@mui/material';

import { config } from '@/config';
import { UserTable } from '@/components/dashboard/user/user-table';
import Add from '@/components/svgIcon/Add';
import Refresh from '@/components/svgIcon/Refresh';

export const metadata = { title: `사용자 목록 | ${config.site.name}` } satisfies Metadata;

export default function Page(): React.JSX.Element {
    return (
        <>
            <div className="header-box">
                <h4>사용자 목록</h4>
                <div className="btn__group">
                    <Button
                        variant="contained"
                        color="primary"
                        disableElevation
                        sx={{ width: '86px', height: '32px', fontSize: '13px' }}
                        startIcon={
                            <Icon sx={{ width: 14, height: 14 }}>
                                <Add />
                            </Icon>
                        }
                    >
                        생성
                    </Button>
                    <Button
                        variant="contained"
                        color="inherit"
                        disableElevation
                        sx={{ lineHeight: 'inherit' }}
                        startIcon={
                            <Icon sx={{ width: 14, height: 14 }}>
                                <Refresh />
                            </Icon>
                        }
                    >
                        새로고침
                    </Button>
                </div>
            </div>
            <UserTable />
        </>
    );
}
