'use client';

import * as React from 'react';
import {
    Box,
    Card,
    TableContainer,
    FormControl,
    Typography,
    OutlinedInput,
    TableCell,
    TableRow,
    Table,
    TableBody,
} from "@mui/material";

export function DetailTableForm(): React.JSX.Element {

    return (
        <Box>
            <Card variant="outlined">
                <Box p="17px 20px">
                    <TableContainer>
                        <Table size="small" sx={{minWidth: 650}} aria-label="simple table" className="form-table">
                            <TableBody>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        이름
                                    </TableCell>
                                    <TableCell>
                                        김코난
                                    </TableCell>
                                </TableRow>

                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        아이디
                                    </TableCell>
                                    <TableCell>
                                        konan.kim@konantech.com
                                    </TableCell>
                                </TableRow>

                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        권한
                                    </TableCell>
                                    <TableCell>
                                        사용자
                                    </TableCell>
                                </TableRow>

                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        그룹
                                    </TableCell>
                                    <TableCell>
                                        DevOps
                                    </TableCell>
                                </TableRow>

                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        설명
                                    </TableCell>
                                    <TableCell>
                                        <form>
                                            <Box display="flex" alignItems="center" gap={1}>
                                                <Box width={640}>
                                                    <FormControl fullWidth>
                                                        <OutlinedInput
                                                            multiline
                                                            rows={5}
                                                            type="id"
                                                            sx={{
                                                                height: '100px',
                                                            }}
                                                            size="small"
                                                            value="설명300자이하"
                                                            readOnly
                                                        />
                                                    </FormControl>
                                                </Box>
                                            </Box>
                                        </form>
                                    </TableCell>
                                </TableRow>

                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        사용여부
                                    </TableCell>
                                    <TableCell>
                                        <Typography color="primary">활성</Typography>
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
