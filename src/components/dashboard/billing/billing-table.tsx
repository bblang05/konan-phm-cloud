'use client';

import * as React from 'react';
import {
    Box,
    Divider,
    IconButton,
    Stack,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Typography, Chip
} from '@mui/material';
import dayjs from 'dayjs';

import {useSelection} from '@/hooks/use-selection';

function createData(
    startDay: Date,
    endDay: Date,
    state: React.ReactNode,
) {
    return {startDay, endDay, state};
}

const rows = [
    createData(dayjs().subtract(2, 'hours').toDate(), dayjs().subtract(2, 'hours').toDate(), <Chip label="구독 만료" />),
    createData(dayjs().subtract(2, 'hours').toDate(), dayjs().subtract(2, 'hours').toDate(), <Chip label="구독중" color="primary" />),
    createData(dayjs().subtract(2, 'hours').toDate(), dayjs().subtract(2, 'hours').toDate(), <Chip label="구독중" color="primary" />),
];

export function BillingTable(): React.JSX.Element {

    const rowIds = React.useMemo(() => {
        return rows.map((billingInfo) => billingInfo.startDay);
    }, [rows]);

    const {selected} = useSelection(rowIds);

    return (
        <Box p="17px 20px">
            <Box display="flex" alignItems="center" justifyContent="flex-end" pb="17px">
                <Stack direction="row" gap={2} alignItems="center">
                    <IconButton edge="end" size="small" className="outlined">
                        <Box
                            component="img"
                            alt="logo"
                            src="/images/ico_page-arrow-left-dis.svg"
                            sx={{display: 'inline-block', height: '16px', width: '16px'}}
                        />
                    </IconButton>
                    <Typography variant="body2">
                        1 / 1
                    </Typography>
                    <IconButton edge="end" size="small" className="outlined">
                        <Box
                            component="img"
                            alt="logo"
                            src="/images/ico_page-arrow-right-nor.svg"
                            sx={{display: 'inline-block', height: '16px', width: '16px'}}
                        />
                    </IconButton>
                </Stack>
            </Box>
            <Box sx={{overflowX: 'auto'}}>
                <Table sx={{minWidth: '800px'}} className="even-table">
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                구독 시작일
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
                                구독 만료일
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
                                구독 상태
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
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => {
                            const isSelected = selected?.has(row.startDay);
                            return (
                                <TableRow hover key={row.startDay}
                                          selected={isSelected}
                                >
                                    <TableCell component="th" scope="row">
                                        {dayjs(row.startDay).format('YYYY-MM-D')}
                                    </TableCell>
                                    <TableCell>{dayjs(row.endDay).format('YYYY-MM-D')}</TableCell>
                                    <TableCell>{row.state}</TableCell>
                                </TableRow>
                            )
                        })}

                    </TableBody>
                </Table>
            </Box>
            <Divider/>
        </Box>
    );
}
