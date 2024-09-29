'use client';

import * as React from 'react';
import Card from '@mui/material/Card';
import TableContainer from '@mui/material/TableContainer';
import {
    Box,
    TableCell,
    TableRow,
    Table,
    TableBody,
    Typography
} from "@mui/material";

export function RatePlanTable(): React.JSX.Element {

    return (
        <Box marginBottom="8px">
            <Card variant="outlined">
                <Box p="14px 20px 15px 20px">
                    <Box display="flex" justifyContent="space-between" alignItems="center" pb={'11px'}>
                        <Typography variant="subtitle2">요금제</Typography>
                    </Box>
                    <Box marginBottom="6px">
                        <TableContainer>
                            <Table size="small" sx={{minWidth: 650}} aria-label="simple table"
                                   className="form-table">
                                <colgroup>
                                    <col width="240px"/>
                                    <col width=""/>
                                    <col/>
                                </colgroup>
                                <TableBody>
                                    <TableRow>
                                        <TableCell component="th" scope="row">
                                            기본 서비스
                                        </TableCell>
                                        <TableCell>
                                            <Box display="flex" alignItems="center" justifyContent="space-between" padding="0 10px">
                                                <Box>Basic</Box>
                                                <Box fontWeight="500">500,000원</Box>
                                            </Box>
                                        </TableCell>
                                    </TableRow>

                                    <TableRow>
                                        <TableCell component="th" scope="row">
                                            + 리소스 추가 사용
                                        </TableCell>
                                        <TableCell>
                                            <Box display="flex" alignItems="center" justifyContent="space-between" padding="0 10px">
                                                <Box>10GB</Box>
                                                <Box fontWeight="500">100,000원</Box>
                                            </Box>
                                        </TableCell>
                                    </TableRow>

                                    <TableRow>
                                        <TableCell component="th" scope="row">
                                            데이터 분석 및 정제 서비스
                                        </TableCell>
                                        <TableCell>
                                            <Box display="flex" alignItems="center" justifyContent="space-between" padding="0 10px">
                                                <Box>사용</Box>
                                                <Box fontWeight="500">1,000,000원</Box>
                                            </Box>
                                        </TableCell>
                                    </TableRow>

                                    <TableRow>
                                        <TableCell component="th" scope="row">
                                            AI 학습 서비스
                                        </TableCell>
                                        <TableCell>
                                            <Box display="flex" alignItems="center" justifyContent="space-between" padding="0 10px">
                                                <Box>AI Basic</Box>
                                                <Box fontWeight="500">1,666,667원</Box>
                                            </Box>
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Box>

                    <TableContainer>
                        <Table size="small" sx={{minWidth: 650}} aria-label="simple table"
                               className="form-table">
                            <colgroup>
                                <col width="240px"/>
                                <col width=""/>
                                <col/>
                            </colgroup>
                            <TableBody>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        총 요금
                                    </TableCell>
                                    <TableCell>
                                        <Box display="flex" alignItems="center" justifyContent="end" padding="0 10px">
                                            <Box>
                                                <Typography color="primary.main" fontWeight="500">총 3,266,667원</Typography>
                                            </Box>
                                        </Box>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
            </Card>
        </Box>
    );
}
