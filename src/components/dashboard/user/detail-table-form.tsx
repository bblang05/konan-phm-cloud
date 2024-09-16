'use client';

import * as React from 'react';
import {
    Box,
    Card,
    TableContainer,
    FormControl,
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
                    <form>
                        <TableContainer>
                            <Table sx={{minWidth: 650}} aria-label="simple table" className="form-table">
                                <colgroup>
                                    <col width="160px"/>
                                    <col width=""/>
                                </colgroup>
                                <TableBody>
                                    <TableRow>
                                        <TableCell component="th" scope="row">
                                            이름
                                        </TableCell>
                                        <TableCell>
                                            <Box padding="0 10px">
                                                김코난
                                            </Box>
                                        </TableCell>
                                    </TableRow>

                                    <TableRow>
                                        <TableCell component="th" scope="row">
                                            아이디
                                        </TableCell>
                                        <TableCell>
                                            <Box padding="0 10px">
                                                konan.kim@konantech.com
                                            </Box>
                                        </TableCell>
                                    </TableRow>

                                    <TableRow>
                                        <TableCell component="th" scope="row">
                                            권한
                                        </TableCell>
                                        <TableCell>
                                            <Box padding="0 10px">
                                                사용자
                                            </Box>
                                        </TableCell>
                                    </TableRow>

                                    <TableRow>
                                        <TableCell component="th" scope="row">
                                            그룹
                                        </TableCell>
                                        <TableCell>
                                            <Box padding="0 10px">
                                                DevOps
                                            </Box>
                                        </TableCell>
                                    </TableRow>

                                    <TableRow>
                                        <TableCell component="th" scope="row">
                                            설명
                                        </TableCell>
                                        <TableCell>
                                            <Box display="flex" alignItems="center" gap={1}>
                                                <Box width={640}>
                                                    <FormControl fullWidth>
                                                        <OutlinedInput
                                                            readOnly
                                                            required
                                                            multiline
                                                            rows={5}
                                                            type="id"
                                                            size="small"
                                                            value="설명300자이하"
                                                            sx={{
                                                                height: '100px',
                                                                '&:has([readonly])': {
                                                                    backgroundColor: '#fff',
                                                                    "& .MuiOutlinedInput-notchedOutline": {
                                                                        borderColor: "#cecece !important",
                                                                    },
                                                                },
                                                            }}
                                                        />
                                                    </FormControl>
                                                </Box>
                                            </Box>
                                        </TableCell>
                                    </TableRow>

                                    <TableRow>
                                        <TableCell component="th" scope="row">
                                            사용여부
                                        </TableCell>
                                        <TableCell>
                                            <Box padding="0 10px" sx={{fontSize:'13px', color:'#2668C9'}}>
                                                활성
                                            </Box>
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </form>
                </Box>
            </Card>
        </Box>

    );
}
