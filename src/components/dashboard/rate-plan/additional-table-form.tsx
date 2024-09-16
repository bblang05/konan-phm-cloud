'use client';

import * as React from 'react';

import TableContainer from '@mui/material/TableContainer';
import {
    Box,
    FormControl,
    TableCell,
    TableRow,
    Table,
    TableBody,
    MenuItem,
    Typography,
    Button,
    Card, Icon, Select
} from "@mui/material";
import ArrowBottom from "@/components/svgIcon/ArrowBottom";
import SmallEdit from "@/components/svgIcon/SmallEdit";

export function AdditionalTableForm(): React.JSX.Element {
    const [open, setOpen] = React.useState(false);

    return (

        <Card variant="outlined">
            <Box p="11px 20px">
                <Box display="flex" justifyContent="space-between" alignItems="center" pb={'11px'}>
                    <Typography variant="subtitle2">추가 서비스</Typography>
                    <Button variant="contained" color="inherit"
                            size="small"
                            disableElevation
                            sx={{fontSize: '12px', height: '26px', lineHeight: 'inherit'}}
                            startIcon={
                                <Icon sx={{width: 12, height: 12}}>
                                    <SmallEdit/>
                                </Icon>
                            }>
                        수정
                    </Button>
                </Box>

                <form
                    onSubmit={(event) => {
                        event.preventDefault();
                    }}
                >
                    <TableContainer>
                        <Table size="small" sx={{minWidth: 650}} aria-label="simple table"
                               className="form-table">
                            <colgroup>
                                <col width="160px"/>
                                <col width=""/>
                                <col width="160px"/>
                                <col width=""/>
                            </colgroup>
                            <TableBody>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        요금제 타입
                                    </TableCell>
                                    <TableCell colSpan={3}>
                                        <Box width={596} display="inline-block">
                                            <FormControl fullWidth>
                                                <Select
                                                    fullWidth
                                                    IconComponent={() => (
                                                        <Icon sx={{
                                                            width: 12,
                                                            height: 12,
                                                            fill: '#777D87',
                                                            transition: 'transform 0.3s ease',
                                                            transform: open ? 'rotate(180deg)' : 'rotate(0deg)'
                                                        }}>
                                                            <ArrowBottom/>
                                                        </Icon>
                                                    )}
                                                    displayEmpty
                                                    size="small"
                                                    variant="outlined"
                                                    style={open ? {backgroundColor: '#EBF1FA'} : {}}
                                                    open={open}
                                                    onOpen={() => setOpen(true)}
                                                    onClose={() => setOpen(false)}
                                                    sx={{
                                                        height: '30px',
                                                        backgroundColor: 'var(--mui-palette-background-paper)',
                                                    }}
                                                    defaultValue={0}
                                                >
                                                    <MenuItem value={0}>AI Basic</MenuItem>
                                                    <MenuItem value={1}>AI Pro</MenuItem>
                                                    <MenuItem value={2}>AI Premium</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Box>
                                    </TableCell>
                                </TableRow>

                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        연간 요금
                                    </TableCell>
                                    <TableCell>
                                        <Box padding="0 10px">
                                            20,000,000 원
                                        </Box>
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        IoT 종류
                                    </TableCell>
                                    <TableCell>
                                        <Box padding="0 10px">
                                            1 개
                                        </Box>
                                    </TableCell>
                                </TableRow>

                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        학습 대상
                                    </TableCell>
                                    <TableCell>
                                        <Box padding="0 10px">
                                            이상탐지
                                        </Box>
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        서비스 지원
                                    </TableCell>
                                    <TableCell>
                                        <Box padding="0 10px">
                                            년 1회
                                        </Box>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </form>
            </Box>
        </Card>
    );
}
