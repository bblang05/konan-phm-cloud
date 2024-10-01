'use client';

import * as React from 'react';
import { Box, Button, Grid, Icon, Typography } from '@mui/material';

import SmallEdit from '@/components/svgIcon/SmallEdit';

export default function CustomIcons() {
    return <Box sx={{ height: 'calc(100vh - 340px)', minWidth: '100%' }} />;
}

export function MenuListDefault(): React.JSX.Element {
    return (
        <Box p={'11px 20px 18px 20px'}>
            <Box display="flex" justifyContent="space-between" alignItems="center" pb={'11px'}>
                <Typography variant="subtitle2">메뉴 목록</Typography>
                <Button
                    variant="contained"
                    color="inherit"
                    size="small"
                    disableElevation
                    disabled
                    sx={{ fontSize: '12px', height: '26px', lineHeight: 'inherit' }}
                    startIcon={
                        <Icon sx={{ width: 12, height: 12 }}>
                            <SmallEdit />
                        </Icon>
                    }
                >
                    권한 수정
                </Button>
            </Box>
            <CustomIcons />
            <Grid container direction="row" justifyContent="flex-end" alignItems="center" gap={1} pt="20px">
                <Button variant="contained" color="inherit" disableElevation sx={{ width: '74px', height: '32px' }}>
                    취소
                </Button>
                <Button variant="contained" color="primary" disableElevation sx={{ width: '74px', height: '32px' }}>
                    저장
                </Button>
            </Grid>
        </Box>
    );
}
