'use client';

import * as React from 'react';
import {
    Box,
    Link,
    Divider,
    IconButton,
    Stack,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Typography,
    Card, Icon
} from '@mui/material';
import dayjs from 'dayjs';

import {useSelection} from '@/hooks/use-selection';
import {CustomersFilters} from '@/components/dashboard/customer/customers-filters';
import {SelectPage} from "@/components/dashboard/customer/select-page";
import Sort from "@/components/svgIcon/Sort";
import PageArrowRight from "@/components/svgIcon/PageArrowRight";
import PageArrowLeft from "@/components/svgIcon/PageArrowLeft";

function createData(
    name: string,
    email: string,
    authority: string,
    group: string,
    lastAccessDate: Date) {
    return {name, email, authority, group, lastAccessDate};
}

const rows = [
    createData('이름', 'admin@konantech.com', '사용자', 'DevOps', dayjs().subtract(2, 'hours').toDate()),
    createData('이름', 'admin@konantech.com', '사용자', 'DevOps', dayjs().subtract(2, 'hours').toDate()),
    createData('이름', 'admin@konantech.com', '사용자', 'DevOps', dayjs().subtract(2, 'hours').toDate()),
    createData('이름', 'admin@konantech.com', '사용자', 'DevOps', dayjs().subtract(2, 'hours').toDate()),
    createData('이름', 'admin@konantech.com', '사용자', 'DevOps', dayjs().subtract(2, 'hours').toDate()),
];

export function UserTable(): React.JSX.Element {
    const rowIds = React.useMemo(() => {
        return rows.map((customer) => customer.name);
    }, []);

    const {selected} = useSelection(rowIds);

    return (
        <Box>
            <Card variant="outlined">
                <Box p="17px 20px">
                    <Box display="flex" alignItems="center" justifyContent="space-between" pb="17px">
                        <CustomersFilters/>
                        <Box display="flex" alignItems="center" gap="20px">
                            <SelectPage/>

                            <Stack direction="row" gap="10px" alignItems="center">
                                <IconButton className="outlined" color="inherit" disabled>
                                    <Icon sx={{height: 16, width: 16}}>
                                        <PageArrowLeft/>
                                    </Icon>
                                </IconButton>
                                <Typography variant="body2">
                                    1 / 5
                                </Typography>
                                <IconButton className="outlined" color="inherit">
                                    <Icon sx={{height: 16, width: 16}}>
                                        <PageArrowRight/>
                                    </Icon>
                                </IconButton>
                            </Stack>
                        </Box>
                    </Box>
                    <Box sx={{overflowY: 'auto'}}>
                        <Table sx={{minWidth: '800px'}} className="even-table" size="small">
                            <colgroup>
                                <col width="15%"/>
                                <col width="30%"/>
                                <col width="20%"/>
                                <col width="20%"/>
                                <col width="15%"/>
                            </colgroup>
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
                                    <TableCell>
                                        그룹
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
                                        마지막 접속일
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
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => {
                                    const isSelected = selected?.has(row.name);
                                    return (
                                        <TableRow
                                            hover
                                            key={row.name}
                                            selected={isSelected}
                                        >
                                            <TableCell component="th" scope="row">
                                                <Link href="#" underline="always" color="inherit"> {row.name}</Link>
                                            </TableCell>
                                            <TableCell>{row.email}</TableCell>
                                            <TableCell>{row.authority}</TableCell>
                                            <TableCell>{row.group}</TableCell>
                                            <TableCell>
                                                <Box color="#777D87">
                                                    {dayjs(row.lastAccessDate).format('YYYY-MM-D hh:mm:ss')}
                                                </Box>
                                            </TableCell>
                                        </TableRow>
                                    );
                                })}
                            </TableBody>
                        </Table>
                    </Box>
                    <Divider/>
                </Box>
            </Card>
        </Box>
    );
}