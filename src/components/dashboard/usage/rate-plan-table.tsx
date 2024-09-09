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
        <Box>
            <Card variant="outlined">
                <Box p="17px 20px">
                    <Box mb={1}>
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
                                            <Box display="flex" alignItems="center" justifyContent="space-between">
                                                <Box>Basic</Box>
                                                <Box>500,000원</Box>
                                            </Box>
                                        </TableCell>
                                    </TableRow>

                                    <TableRow>
                                        <TableCell component="th" scope="row">
                                            + 리소스 추가 사용
                                        </TableCell>
                                        <TableCell>
                                            <Box display="flex" alignItems="center" justifyContent="space-between">
                                                <Box>10GB</Box>
                                                <Box>100,000원</Box>
                                            </Box>
                                        </TableCell>
                                    </TableRow>

                                    <TableRow>
                                        <TableCell component="th" scope="row">
                                            데이터 분석 및 정제 서비스
                                        </TableCell>
                                        <TableCell>
                                            <Box display="flex" alignItems="center" justifyContent="space-between">
                                                <Box>사용</Box>
                                                <Box>1,000,000원</Box>
                                            </Box>
                                        </TableCell>
                                    </TableRow>

                                    <TableRow>
                                        <TableCell component="th" scope="row">
                                            AI 학습 서비스
                                        </TableCell>
                                        <TableCell>
                                            <Box display="flex" alignItems="center" justifyContent="space-between">
                                                <Box>AI Basic</Box>
                                                <Box>1,666,667원</Box>
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
                                        <Box display="flex" alignItems="center" justifyContent="space-between">
                                            <Box></Box>
                                            <Box>
                                                `<Typography color="primary.main">총 3,266,667원</Typography>`
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
