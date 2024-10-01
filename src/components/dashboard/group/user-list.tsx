'use client';

import * as React from 'react';
import { useEffect, useRef, useState } from 'react';
import {
    Box,
    Icon,
    IconButton,
    Link,
    MenuItem,
    Popover,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
} from '@mui/material';

import { useSelection } from '@/hooks/use-selection';
import CmIcon from '@/components/CmIcon';
import { AddUser } from '@/components/dashboard/group/add-user';
import More from '@/components/svgIcon/More';

function createData(name: string, email: string, authority: string) {
    return { name, email, authority };
}

const rows = [
    createData('이름', 'example1@konantech.com', '관리자'),
    createData('이름', 'example1@konantech.com', '관리자'),
    createData('이름', 'example1@konantech.com', '관리자'),
    createData('이름', 'example1@konantech.com', '관리자'),
    createData('이름', 'example1@konantech.com', '관리자'),
    createData('이름', 'example1@konantech.com', '관리자'),
    createData('이름', 'example1@konantech.com', '관리자'),
    createData('이름', 'example1@konantech.com', '관리자'),
    createData('이름', 'example1@konantech.com', '관리자'),
    createData('이름', 'example1@konantech.com', '관리자'),
    createData('이름', 'example1@konantech.com', '관리자'),
    createData('이름', 'example1@konantech.com', '관리자'),
    createData('이름', 'example1@konantech.com', '관리자'),
    createData('이름', 'example1@konantech.com', '관리자'),
    createData('이름', 'example1@konantech.com', '관리자'),
    createData('이름', 'example1@konantech.com', '관리자'),
    createData('이름', 'example1@konantech.com', '관리자'),
    createData('이름', 'example1@konantech.com', '관리자'),
];

export function UserList(): React.JSX.Element {
    const rowIds = React.useMemo(() => {
        return rows.map((customer) => customer.name);
    }, [rows]);

    const { selected } = useSelection(rowIds);

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const [paddingRight, setPaddingRight] = useState('20px');
    const tableContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const adjustPadding = () => {
            const container = tableContainerRef.current;
            if (container) {
                if (container.scrollHeight > container.clientHeight) {
                    setPaddingRight('4px');
                } else {
                    setPaddingRight('20px');
                }
            }
        };

        adjustPadding();
        window.addEventListener('resize', adjustPadding);

        return () => {
            window.removeEventListener('resize', adjustPadding);
        };
    }, []);

    return (
        <Box>
            <Box display="flex" justifyContent="space-between" alignItems="center" p={'11px 20px'}>
                <Typography variant="subtitle2">사용자 목록</Typography>
                <AddUser />
            </Box>

            <Box>
                <TableContainer
                    ref={tableContainerRef}
                    sx={{
                        height: 'calc(100vh - 270px)',
                        paddingRight: paddingRight,
                        paddingLeft: '20px',
                        overflowY: 'auto',
                    }}
                >
                    <Table className="even-table dense" stickyHeader>
                        <colgroup>
                            <col width="30%" />
                            <col width="50%" />
                            <col width="20%" />
                        </colgroup>
                        <TableHead>
                            <TableRow>
                                <TableCell>
                                    이름
                                    <Box sx={{ cursor: 'pointer', display: 'inline-block' }}>
                                        <CmIcon name="ico_sort" width="16"></CmIcon>
                                    </Box>
                                </TableCell>
                                <TableCell>
                                    아이디
                                    <Box sx={{ cursor: 'pointer', display: 'inline-block' }}>
                                        <CmIcon name="ico_sort" width="16"></CmIcon>
                                    </Box>
                                </TableCell>
                                <TableCell>
                                    권한
                                    <Box sx={{ cursor: 'pointer', display: 'inline-block' }}>
                                        <CmIcon name="ico_sort" width="16"></CmIcon>
                                    </Box>
                                </TableCell>
                                <TableCell />
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => {
                                const isSelected = selected?.has(row.name);
                                return (
                                    <TableRow hover key={row.name} selected={isSelected}>
                                        <TableCell component="td" scope="row">
                                            <Link href="#" underline="always" color="inherit">
                                                {' '}
                                                {row.name}
                                            </Link>
                                        </TableCell>
                                        <TableCell>{row.email}</TableCell>
                                        <TableCell>{row.authority}</TableCell>
                                        <TableCell align="right">
                                            <IconButton
                                                aria-label="more"
                                                id="long-button"
                                                aria-controls={open ? 'long-menu' : undefined}
                                                aria-expanded={open ? 'true' : undefined}
                                                aria-haspopup="true"
                                                onClick={handleClick}
                                                disableRipple
                                                size="small"
                                                sx={{
                                                    height: '26px',
                                                    width: '26px',
                                                    '&:hover, &:focus': {
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
                                                    <More />
                                                </Icon>
                                            </IconButton>
                                        </TableCell>
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
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
                    <MenuItem sx={{ minWidth: '70px' }} onClick={handleClose}>
                        삭제
                    </MenuItem>
                </Popover>
            </Box>
        </Box>
    );
}
