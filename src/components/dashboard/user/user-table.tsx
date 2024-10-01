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
// import dayjs from 'dayjs';

import {useSelection} from '@/hooks/use-selection';
import {CustomersFilters} from '@/components/dashboard/customer/customers-filters';
import {SelectPage} from "@/components/dashboard/customer/select-page";
import PageArrowRight from "@/components/svgIcon/PageArrowRight";
import PageArrowLeft from "@/components/svgIcon/PageArrowLeft";
import CmIcon from "@/components/CmIcon";

function createData(
    name: string,
    email: string,
    authority: string,
    group: string,
    lastAccessDate: string) {
    return {name, email, authority, group, lastAccessDate};
}

const rows = [
    createData('이름', 'admin@konantech.com', '사용자', 'DevOps', '2024-09-30 09:02:11'),
    createData('이름', 'admin@konantech.com', '사용자', 'DevOps', '2024-09-30 09:02:11'),
    createData('이름', 'admin@konantech.com', '사용자', 'DevOps', '2024-09-30 09:02:11'),
    createData('이름', 'admin@konantech.com', '사용자', 'DevOps', '2024-09-30 09:02:11'),
    createData('이름', 'admin@konantech.com', '사용자', 'DevOps', '2024-09-30 09:02:11'),
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
                                    <TableCell>
                                        그룹
                                        <Box sx={{ cursor: 'pointer', display: 'inline-block' }}>
                                                <CmIcon name="ico_sort" width="16"></CmIcon>
                                            </Box>
                                    </TableCell>
                                    <TableCell>
                                        마지막 접속일
                                        <Box sx={{ cursor: 'pointer', display: 'inline-block' }}>
                                                <CmIcon name="ico_sort" width="16"></CmIcon>
                                            </Box>
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
                                                    {row.lastAccessDate}
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