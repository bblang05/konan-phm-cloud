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
    Typography, Chip, Icon
} from '@mui/material';
import dayjs from 'dayjs';

import {useSelection} from '@/hooks/use-selection';
import PageArrowRight from "@/components/svgIcon/PageArrowRight";
import PageArrowLeft from "@/components/svgIcon/PageArrowLeft";
import Sort from "@/components/svgIcon/Sort";

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
                <Stack direction="row" gap="10px" alignItems="center">
                    <IconButton className="outlined" color="inherit" disabled>
                        <Icon sx={{height: 16, width: 16}}>
                            <PageArrowLeft/>
                        </Icon>
                    </IconButton>
                    <Typography variant="body2">
                        1 / 1
                    </Typography>
                    <IconButton className="outlined" color="inherit">
                        <Icon sx={{height: 16, width: 16}}>
                            <PageArrowRight/>
                        </Icon>
                    </IconButton>
                </Stack>
            </Box>
            <Box sx={{overflowY: 'auto'}}>
                <Table sx={{minWidth: '800px'}} className="even-table">
                    <colgroup>
                        <col width=""/>
                        <col width=""/>
                        <col width="12%"/>
                    </colgroup>
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                구독 시작일
                                <Icon
                                    sx={{
                                        width: 16,
                                        height: 16,
                                        fill: '#9EA6B8',
                                        cursor: 'pointer',
                                        marginLeft: '4px',
                                    }}
                                >
                                    <Sort />
                                </Icon>
                            </TableCell>
                            <TableCell>
                                구독 만료일
                                <Icon
                                    sx={{
                                        width: 16,
                                        height: 16,
                                        fill: '#9EA6B8',
                                        cursor: 'pointer',
                                        marginLeft: '4px',
                                    }}
                                >
                                    <Sort />
                                </Icon>
                            </TableCell>
                            <TableCell>
                                구독 상태
                                <Icon
                                    sx={{
                                        width: 16,
                                        height: 16,
                                        fill: '#9EA6B8',
                                        cursor: 'pointer',
                                        marginLeft: '4px',
                                    }}
                                >
                                    <Sort />
                                </Icon>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => {
                            const isSelected = selected?.has(row.startDay);
                            return (
                                <TableRow hover key={row.startDay.getTime()}
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
