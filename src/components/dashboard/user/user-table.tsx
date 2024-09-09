'use client';

import * as React from 'react';
import {
    Box,
    Link,
    Divider,
    FormControl,
    IconButton,
    MenuItem,
    Stack,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Typography,
    Card
} from '@mui/material';
import Select, {SelectChangeEvent} from '@mui/material/Select';
import dayjs from 'dayjs';

import {useSelection} from '@/hooks/use-selection';
import {CustomersFilters} from '@/components/dashboard/customer/customers-filters';

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
    createData('이름', 'admin@konantech.com', '사용자', 'DevOps', dayjs().subtract(2, 'hours').toDate()),
    createData('이름', 'admin@konantech.com', '사용자', 'DevOps', dayjs().subtract(2, 'hours').toDate()),
    createData('이름', 'admin@konantech.com', '사용자', 'DevOps', dayjs().subtract(2, 'hours').toDate()),
    createData('이름', 'admin@konantech.com', '사용자', 'DevOps', dayjs().subtract(2, 'hours').toDate()),
    createData('이름', 'admin@konantech.com', '사용자', 'DevOps', dayjs().subtract(2, 'hours').toDate()),
];

export function UserTable(): React.JSX.Element {
    const rowIds = React.useMemo(() => {
        return rows.map((customer) => customer.name);
    }, [rows]);

    const handleChange = (event: SelectChangeEvent) => {

    };

    const {selected} = useSelection(rowIds);

    return (
        <Box>
            <Card variant="outlined">
                <Box p="17px 20px">
                    <Box display="flex" alignItems="center" justifyContent="space-between" pb="17px">
                        <CustomersFilters/>
                        <Box display="flex" alignItems="center" gap={2}>
                            <FormControl sx={{minWidth: 80}}>
                                <Select
                                    sx={{
                                        height: '30px',
                                        bgcolor: 'var(--mui-palette-background-paper)',
                                        color: '#777D87'
                                    }}
                                    value="10"
                                    size="small"
                                    onChange={handleChange}
                                    displayEmpty
                                    id="select"
                                >
                                    <MenuItem value="5">5개씩 보기</MenuItem>
                                    <MenuItem value="10">10개씩 보기</MenuItem>
                                    <MenuItem value="15">15개씩 보기</MenuItem>
                                </Select>
                            </FormControl>

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
                                    <TableCell>
                                        이름
                                        <Box
                                            component="img"
                                            alt="logo"
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
                                            alt="logo"
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
                                            alt="logo"
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
                                        그룹
                                        <Box
                                            component="img"
                                            alt="logo"
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
                                        마지막 접속일
                                        <Box
                                            component="img"
                                            alt="logo"
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
                                            <TableCell component="th" scope="row">
                                                <Link href="#" underline="always" color="inherit"> {row.name}</Link>
                                            </TableCell>
                                            <TableCell>{row.email}</TableCell>
                                            <TableCell>{row.authority}</TableCell>
                                            <TableCell>{row.group}</TableCell>
                                            <TableCell><Box
                                                color='var(--mui-palette-neutral-500)'>{dayjs(row.lastAccessDate).format('YYYY-MM-D hh:mm:ss')}</Box></TableCell>
                                        </TableRow>
                                    )
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
