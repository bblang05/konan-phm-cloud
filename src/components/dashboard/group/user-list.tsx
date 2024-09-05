'use client';

import * as React from 'react';
import {
    Box,
    TableCell,
    TableRow,
    Table,
    TableBody,
    Typography,
    Link,
    TableHead,
    IconButton,
    Menu,
    MenuItem
} from "@mui/material";
import {useSelection} from "@/hooks/use-selection";

import {AddUser} from "@/components/dashboard/group/add-user";
import {DotsThreeVertical as DotsThreeVerticalIcon} from "@phosphor-icons/react/dist/ssr/DotsThreeVertical";

function createData(
    name: string,
    email: string,
    authority: string,
    group: string,
    lastAccessDate: Date
) {
    return {name, email, authority, group, lastAccessDate};
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
];

export function UserList(): React.JSX.Element {

    const rowIds = React.useMemo(() => {
        return rows.map((customer) => customer.name);
    }, [rows]);
    
    const {selected} = useSelection(rowIds);

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
                <Typography variant="subtitle2">사용자 목록</Typography>
                <AddUser/>
            </Box>

            <Box sx={{overflowX: 'auto'}}>
                <Table size="small" className="even-table">
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                이름
                                <Box
                                    component="img"
                                    alt="sort"
                                    src="/images/ico_sort.svg"
                                    sx={{
                                        display: 'inline-block',
                                        height: '16px',
                                        width: '16px',
                                        cursor: 'pointer',
                                        verticalAlign: 'middle'
                                    }}
                                />
                            </TableCell>
                            <TableCell>
                                아이디
                                <Box
                                    component="img"
                                    alt="sort"
                                    src="/images/ico_sort.svg"
                                    sx={{
                                        display: 'inline-block',
                                        height: '16px',
                                        width: '16px',
                                        cursor: 'pointer',
                                        verticalAlign: 'middle'
                                    }}
                                />
                            </TableCell>
                            <TableCell>
                                권한
                                <Box
                                    component="img"
                                    alt="sort"
                                    src="/images/ico_sort.svg"
                                    sx={{
                                        display: 'inline-block',
                                        height: '16px',
                                        width: '16px',
                                        cursor: 'pointer',
                                        verticalAlign: 'middle'
                                    }}
                                />
                            </TableCell>
                            <TableCell/>
                            <TableCell/>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => {
                            const isSelected = selected?.has(row.name);
                            return (
                                <TableRow hover
                                          key={row.name}
                                          selected={isSelected}
                                >
                                    <TableCell component="th" scope="row" sx={{paddingTop: '2px', paddingBottom: '2px'}}>
                                        <Link href="#" underline="always" color="inherit"> {row.name}</Link>
                                    </TableCell>
                                    <TableCell sx={{paddingTop: '2px', paddingBottom: '2px'}}>{row.email}</TableCell>
                                    <TableCell sx={{paddingTop: '2px', paddingBottom: '2px'}}>{row.authority}</TableCell>
                                    <TableCell align="right" sx={{paddingTop: '2px', paddingBottom: '2px'}}>{row.group}</TableCell>
                                    <TableCell align="right" sx={{paddingTop: '2px', paddingBottom: '2px'}}>
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
                                    </TableCell>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >
                    <MenuItem onClick={handleClose}>삭제</MenuItem>
                </Menu>
            </Box>
        </Box>
    );
}
