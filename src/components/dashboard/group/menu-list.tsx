'use client';

import * as React from 'react';
import { Box, Button, Grid, Icon, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';

import ArrowBottomTriangle from '@/components/svgIcon/ArrowBottomTriangle';
import ArrowRightTriangle from '@/components/svgIcon/ArrowRightTriangle';
import Dash from '@/components/svgIcon/Dash';
import SmallEdit from '@/components/svgIcon/SmallEdit';

export default function CustomIcons() {
    const [expandedItems, setExpandedItems] = React.useState<string[]>([]);

    const handleExpandToggle = (itemId: string) => {
        setExpandedItems((prevExpanded) =>
            prevExpanded.includes(itemId) ? prevExpanded.filter((id) => id !== itemId) : [...prevExpanded, itemId]
        );
    };

    const isItemExpanded = (itemId: string) => expandedItems.includes(itemId);

    return (
        <Box sx={{ height: 'calc(100vh - 340px)', minWidth: '100%' }}>
            <List>
                {/* Parent Item */}
                <ListItem
                    sx={{
                        height: '32px',
                        p: '8px 12px',
                        borderRadius: '3px',
                        '&:hover': {
                            backgroundColor: '#F0F2F5',
                        },
                    }}
                >
                    <ListItemIcon sx={{ minWidth: '16px', gap: '8px', marginRight: '8px' }}>
                        <Icon
                            sx={{ width: '12px', height: '12px', fill: '#43464D' }}
                            onClick={() => handleExpandToggle('grid')}
                        >
                            {isItemExpanded('grid') ? <ArrowBottomTriangle /> : <ArrowRightTriangle />}
                        </Icon>
                    </ListItemIcon>
                    <ListItemText sx={{ color: '#43464D' }}>대시보드</ListItemText>
                </ListItem>

                {isItemExpanded('grid') && (
                    <Box>
                        <ListItem
                            sx={{
                                height: '32px',
                                p: '8px 16px 8px 18px',
                                borderRadius: '3px',
                                '&:hover': {
                                    backgroundColor: '#F0F2F5',
                                },
                            }}
                        >
                            <ListItemIcon sx={{ minWidth: '16px', gap: '8px', marginRight: '8px' }}>
                                <Icon
                                    sx={{ width: '12px', height: '12px', fill: '#43464D' }}
                                    onClick={() => handleExpandToggle('grid')}
                                >
                                    <Dash />
                                </Icon>
                            </ListItemIcon>
                            <ListItemText sx={{ color: '#43464D' }}>설비 모니터링</ListItemText>
                        </ListItem>
                        <ListItem
                            sx={{
                                height: '32px',
                                p: '8px 16px 8px 18px',
                                borderRadius: '3px',
                                '&:hover': {
                                    backgroundColor: '#F0F2F5',
                                },
                            }}
                        >
                            <ListItemIcon sx={{ minWidth: '16px', gap: '8px', marginRight: '8px' }}>
                                <Icon
                                    sx={{ width: '12px', height: '12px', fill: '#43464D' }}
                                    onClick={() => handleExpandToggle('grid')}
                                >
                                    <Dash />
                                </Icon>
                            </ListItemIcon>
                            <ListItemText sx={{ color: '#43464D' }}>품목 모니터링</ListItemText>
                        </ListItem>
                        <ListItem
                            sx={{
                                height: '32px',
                                p: '8px 16px 8px 18px',
                                borderRadius: '3px',
                                '&:hover': {
                                    backgroundColor: '#F0F2F5',
                                },
                            }}
                        >
                            <ListItemIcon sx={{ minWidth: '16px', gap: '8px', marginRight: '8px' }}>
                                <Icon
                                    sx={{ width: '12px', height: '12px', fill: '#43464D' }}
                                    onClick={() => handleExpandToggle('grid')}
                                >
                                    <Dash />
                                </Icon>
                            </ListItemIcon>
                            <ListItemText sx={{ color: '#43464D' }}>데이터 시각화</ListItemText>
                        </ListItem>
                    </Box>
                )}

                {/* Another Parent Item */}
                <ListItem
                    sx={{
                        height: '32px',
                        p: '8px 12px',
                        borderRadius: '3px',
                        '&:hover': {
                            backgroundColor: '#F0F2F5',
                        },
                    }}
                >
                    <ListItemIcon sx={{ minWidth: '16px', gap: '8px', marginRight: '8px' }}>
                        <Icon
                            sx={{ width: '12px', height: '12px', fill: '#43464D' }}
                            onClick={() => handleExpandToggle('pickers')}
                        >
                            {isItemExpanded('pickers') ? <ArrowBottomTriangle /> : <ArrowRightTriangle />}
                        </Icon>
                    </ListItemIcon>
                    <ListItemText sx={{ color: '#43464D' }}>설정</ListItemText>
                </ListItem>

                {isItemExpanded('pickers') && (
                    <Box>
                        <ListItem
                            sx={{
                                height: '32px',
                                p: '8px 16px 8px 18px',
                                borderRadius: '3px',
                                '&:hover': {
                                    backgroundColor: '#F0F2F5',
                                },
                            }}
                        >
                            <ListItemIcon sx={{ minWidth: '16px', gap: '8px', marginRight: '8px' }}>
                                <Icon
                                    sx={{ width: '12px', height: '12px', fill: '#43464D' }}
                                    onClick={() => handleExpandToggle('grid')}
                                >
                                    <Dash />
                                </Icon>
                            </ListItemIcon>
                            <ListItemText sx={{ color: '#43464D' }}>임계값 설정</ListItemText>
                        </ListItem>
                        <ListItem
                            sx={{
                                height: '32px',
                                p: '8px 16px 8px 18px',
                                borderRadius: '3px',
                                '&:hover': {
                                    backgroundColor: '#F0F2F5',
                                },
                            }}
                        >
                            <ListItemIcon sx={{ minWidth: '16px', gap: '8px', marginRight: '8px' }}>
                                <Icon
                                    sx={{ width: '12px', height: '12px', fill: '#43464D' }}
                                    onClick={() => handleExpandToggle('grid')}
                                >
                                    <Dash />
                                </Icon>
                            </ListItemIcon>
                            <ListItemText sx={{ color: '#43464D' }}>구간 설정</ListItemText>
                        </ListItem>
                    </Box>
                )}
            </List>
        </Box>
    );
}

export function MenuList(): React.JSX.Element {
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
