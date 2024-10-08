'use client';

import * as React from 'react';
import { Box, Icon, IconButton, ListItemIcon, ListItemText, MenuList, Popover, Typography } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';

import More from '@/components/svgIcon/More';

import { CreateGroup } from './create-group';

export function GroupList(): React.JSX.Element {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [selectedItem, setSelectedItem] = React.useState<string | null>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>, item: string) => {
        setAnchorEl(event.currentTarget);
        setSelectedItem(item);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box p={'11px 20px'}>
            <Box display="flex" justifyContent="space-between" alignItems="center" pb={'11px'}>
                <Typography variant="subtitle2">그룹 목록</Typography>
                <CreateGroup />
            </Box>

            <Box sx={{ height: 'calc(100vh - 281px)' }}>
                <MenuList>
                    {['개발 1팀', '개발 2팀'].map((item, index) => (
                        <MenuItem
                            disableRipple
                            key={index}
                            sx={{
                                paddingTop: '2px',
                                paddingBottom: '2px',
                                backgroundColor: selectedItem === item ? 'var(--mui-palette-primary-light)' : 'inherit',
                                transition: 'none',
                                borderRadius: '3px',
                                height:'32px',
                                '&:hover': {
                                    transition: 'none',
                                },
                            }}
                            onClick={() => setSelectedItem(item)}
                            selected={selectedItem === item}
                        >
                            <ListItemIcon sx={{minWidth: '20px !important', marginRight: '8px'}}>
                                <Box
                                    component="img"
                                    alt="그룹"
                                    src="/images/ico_group.svg"
                                    sx={{display: 'inline-block', height: '20px', width: '20px'}}
                                />
                            </ListItemIcon>
                            <ListItemText sx={{fontSize: '13px', color: 'var(--mui-palette-neutral-800)'}}>
                                {item}
                            </ListItemText>

                            <IconButton
                                aria-label="more"
                                id="long-button"
                                aria-controls={open ? 'long-menu' : undefined}
                                aria-expanded={open ? 'true' : undefined}
                                aria-haspopup="true"
                                onClick={(event) => handleClick(event, item)}
                                disableRipple
                                size="small"
                                sx={{
                                    height: '26px',
                                    width: '26px',
                                    '&:hover': {
                                        backgroundColor: '#777D871A',
                                        borderRadius: '3px',
                                    },
                                }}
                            >
                                <Icon
                                    sx={{
                                        width: 16,
                                        height: 16,
                                        fill: '#777D87',
                                        cursor: 'pointer',
                                    }}
                                >
                                    <More/>
                                </Icon>
                            </IconButton>

                            <Popover
                                id="basic-menu"
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'right',
                                }}
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                            >
                                <MenuItem sx={{minWidth: '70px'}} onClick={handleClose}>
                                    수정
                                </MenuItem>
                                <MenuItem sx={{minWidth: '70px'}} onClick={handleClose}>
                                    삭제
                                </MenuItem>
                            </Popover>
                        </MenuItem>
                    ))}
                </MenuList>
            </Box>
        </Box>
    );
}
