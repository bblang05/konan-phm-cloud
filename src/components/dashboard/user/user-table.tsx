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
    Card
} from '@mui/material';
import dayjs from 'dayjs';

import {useSelection} from '@/hooks/use-selection';
import {CustomersFilters} from '@/components/dashboard/customer/customers-filters';
import {SelectPage} from "@/components/dashboard/customer/select-page";

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
                        <Box display="flex" alignItems="center" gap={2}>
                            <SelectPage/>

                            <Stack direction="row" gap="10px" alignItems="center">
                                <IconButton edge="end" size="small" className="outlined">
                                    <Box
                                        component="img"
                                        alt="left-arrow"
                                        src="/images/ico_page-arrow-left-dis.svg"
                                        sx={{display: 'inline-block', height: '16px', width: '16px'}}
                                    />
                                </IconButton>
                                <Typography variant="body2">
                                    1 / 5
                                </Typography>
                                <IconButton edge="end" size="small" className="outlined">
                                    <Box
                                        component="img"
                                        alt="right-arrow"
                                        src="/images/ico_page-arrow-right-nor.svg"
                                        sx={{display: 'inline-block', height: '16px', width: '16px'}}
                                    />
                                </IconButton>
                            </Stack>
                        </Box>
                    </Box>
                    <Box sx={{overflowX: 'auto'}}>
                        <Table sx={{minWidth: '800px'}} className="even-table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>이름</TableCell>
                                    <TableCell>아이디</TableCell>
                                    <TableCell>권한</TableCell>
                                    <TableCell>그룹</TableCell>
                                    <TableCell>마지막 접속일</TableCell>
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
                                                <Box color="var(--mui-palette-neutral-500)">
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