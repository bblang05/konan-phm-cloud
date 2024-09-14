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
    MenuItem, Icon
} from "@mui/material";
import {useSelection} from "@/hooks/use-selection";

import {AddUser} from "@/components/dashboard/group/add-user";
import Sort from "@/components/svgIcon/Sort";
import More from "@/components/svgIcon/More";

function createData(
    name: string,
    email: string,
    authority: string,
) {
    return {name, email, authority};
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
                <Table className="even-table dense" >
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                이름
                                <Icon sx={{
                                    width: 16,
                                    height: 16,
                                    fill: '#9EA6B8',
                                    cursor: 'pointer',
                                    marginLeft: '4px'
                                }}>
                                    <Sort/>
                                </Icon>
                            </TableCell>
                            <TableCell>
                                아이디
                                <Icon sx={{
                                    width: 16,
                                    height: 16,
                                    fill: '#9EA6B8',
                                    cursor: 'pointer',
                                    marginLeft: '4px'
                                }}>
                                    <Sort/>
                                </Icon>
                            </TableCell>
                            <TableCell>
                                권한
                                <Icon sx={{
                                    width: 16,
                                    height: 16,
                                    fill: '#9EA6B8',
                                    cursor: 'pointer',
                                    marginLeft: '4px'
                                }}>
                                    <Sort/>
                                </Icon>
                            </TableCell>
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
                                    <TableCell component="td" scope="row">
                                        <Link href="#" underline="always" color="inherit"> {row.name}</Link>
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
                                            size="small"
                                            sx={{
                                                height:'26px',
                                                width:'26px',
                                            }}
                                        >
                                            <Icon sx={{
                                                width: 16,
                                                height: 16,
                                                fill: '#9EA6B8',
                                                cursor: 'pointer',
                                            }}>
                                                <More/>
                                            </Icon>
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
