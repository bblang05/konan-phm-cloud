'use client';

import * as React from 'react';
import {
    Box,
    Typography,
    MenuList,
    ListItemIcon,
    ListItemText,
    Menu,
    IconButton,
} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";

import {CreateGroup} from './create-group'
import {DotsThreeVertical as DotsThreeVerticalIcon} from "@phosphor-icons/react/dist/ssr/DotsThreeVertical";

export function GroupList(): React.JSX.Element {


    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box p={'11px 20px'}>
            <Box display="flex" justifyContent="space-between" alignItems="center" pb={'11px'}>
                <Typography variant="subtitle2">그룹목록</Typography>
                <CreateGroup/>
            </Box>

            <MenuList>
                <MenuItem sx={{paddingTop: '2px', paddingBottom: '2px',}}>
                    <ListItemIcon sx={{minWidth: '20px !important', marginRight: '8px'}}>
                        <Box
                            component="img"
                            alt="새로고침"
                            src="/images/ico_group.svg"
                            sx={{display: 'inline-block', height: '20px', width: '20px'}}
                        />
                    </ListItemIcon>
                    <ListItemText sx={{fontSize: '13px', color: 'var(--mui-palette-neutral-800)'}}>개발 1팀</ListItemText>
                    <IconButton
                        aria-label="more"
                        id="long-button"
                        aria-controls={open ? 'long-menu' : undefined}
                        aria-expanded={open ? 'true' : undefined}
                        aria-haspopup="true"
                        onClick={handleClick}
                        size="small"
                    >
                        <DotsThreeVerticalIcon/>
                    </IconButton>

                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                    >
                        <MenuItem onClick={handleClose}>수정</MenuItem>
                        <MenuItem onClick={handleClose}>삭제</MenuItem>
                    </Menu>
                </MenuItem>

                <MenuItem sx={{paddingTop: '2px', paddingBottom: '2px',}}>
                    <ListItemIcon sx={{minWidth: '20px !important', marginRight: '8px'}}>
                        <Box
                            component="img"
                            alt="새로고침"
                            src="/images/ico_group.svg"
                            sx={{display: 'inline-block', height: '20px', width: '20px'}}
                        />
                    </ListItemIcon>
                    <ListItemText sx={{fontSize: '13px', color: 'var(--mui-palette-neutral-800)'}}>개발 1팀</ListItemText>
                    <IconButton
                        aria-label="more"
                        id="long-button"
                        aria-controls={open ? 'long-menu' : undefined}
                        aria-expanded={open ? 'true' : undefined}
                        aria-haspopup="true"
                        onClick={handleClick}
                        size="small"
                    >
                        <DotsThreeVerticalIcon/>
                    </IconButton>

                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                    >
                        <MenuItem onClick={handleClose}>수정</MenuItem>
                        <MenuItem onClick={handleClose}>삭제</MenuItem>
                    </Menu>
                </MenuItem>
            </MenuList>
        </Box>
    );
}
