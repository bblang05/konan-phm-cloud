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
    Card, Stack, Link
} from "@mui/material";
import Select, {SelectChangeEvent} from "@mui/material/Select";

export function DetailTableForm(): React.JSX.Element {

    const [selectValue, setSelectValue] = React.useState<string>('0');

    const handleSelectChange = (event: SelectChangeEvent) => {
        setSelectValue(event.target.value as string);
    };

    return (
        <Box>
            <Box mb={1}>
                <Card variant="outlined">
                    <Box p="11px 20px">
                        <Box display="flex" justifyContent="space-between" alignItems="center" pb={'11px'}>
                            <Typography variant="subtitle2">기본 서비스</Typography>
                            <Stack sx={{alignItems: 'center'}} direction="row" gap={1}>
                                <Button
                                    variant="contained"
                                    component={Link}
                                    disableElevation
                                    startIcon={
                                        <Box
                                            component="img"
                                            alt="edit"
                                            src="/images/ico_edit-nor.svg"
                                            sx={{display: 'inline-block', height: '14px', width: '14px'}}
                                        />
                                    }
                                    color="inherit"
                                    size="small"
                                >
                                    수정
                                </Button>
                            </Stack>
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
                                                            sx={{
                                                                height: '30px',
                                                                backgroundColor: 'var(--mui-palette-background-paper)',
                                                                color: '#777D87'
                                                            }}
                                                            value={selectValue}
                                                            size="small"
                                                            onChange={handleSelectChange}
                                                            displayEmpty
                                                            id="select"
                                                            variant="outlined"
                                                        >
                                                            <MenuItem value={0}>Basic</MenuItem>
                                                            <MenuItem value={1}>Pro</MenuItem>
                                                            <MenuItem value={2}>Premium</MenuItem>
                                                            <MenuItem value={3}>Enterprise</MenuItem>
                                                        </Select>
                                                    </FormControl>
                                                </Box>
                                            </TableCell>
                                        </TableRow>

                                        <TableRow>
                                            <TableCell component="th" scope="row">
                                                월간 요금
                                            </TableCell>
                                            <TableCell>
                                                50,000 원
                                            </TableCell>
                                            <TableCell component="th" scope="row">
                                                연간 요금
                                            </TableCell>
                                            <TableCell>
                                                40,000 원
                                            </TableCell>
                                        </TableRow>

                                        <TableRow>
                                            <TableCell component="th" scope="row">
                                                최소 IoT 개수
                                            </TableCell>
                                            <TableCell>
                                                1 개
                                            </TableCell>
                                            <TableCell component="th" scope="row">
                                                최대 IoT 개수
                                            </TableCell>
                                            <TableCell>
                                                10 개
                                            </TableCell>
                                        </TableRow>

                                        <TableRow>
                                            <TableCell component="th" scope="row">
                                                리소스 기본 제공량
                                            </TableCell>
                                            <TableCell>
                                                10GB / 월
                                            </TableCell>
                                            <TableCell component="th" scope="row">
                                                리소스 추가 비용
                                            </TableCell>
                                            <TableCell>
                                                10,000원 / GB
                                            </TableCell>
                                        </TableRow>

                                        <TableRow>
                                            <TableCell component="th" scope="row">
                                                선택 서비스 요금
                                            </TableCell>
                                            <TableCell>
                                                5,000,000 원
                                            </TableCell>
                                            <TableCell component="th" scope="row">
                                                IoT 종류
                                            </TableCell>
                                            <TableCell>
                                                1 개
                                            </TableCell>
                                        </TableRow>

                                        <TableRow>
                                            <TableCell component="th" scope="row">
                                                선택 서비스 지원
                                            </TableCell>
                                            <TableCell colSpan={3}>
                                                1회 / 2주
                                            </TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </form>
                    </Box>
                </Card>
            </Box>

            <Card variant="outlined">
                <Box p="11px 20px">
                    <Box display="flex" justifyContent="space-between" alignItems="center" pb={'11px'}>
                        <Typography variant="subtitle2">추가 서비스</Typography>
                        <Stack sx={{alignItems: 'center'}} direction="row" gap={1}>
                            <Button
                                variant="contained"
                                component={Link}
                                disableElevation
                                startIcon={
                                    <Box
                                        component="img"
                                        alt="edit"
                                        src="/images/ico_edit-nor.svg"
                                        sx={{display: 'inline-block', height: '14px', width: '14px'}}
                                    />
                                }
                                color="inherit"
                                size="small"
                            >
                                수정
                            </Button>
                        </Stack>
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
                                                        sx={{
                                                            height: '30px',
                                                            backgroundColor: 'var(--mui-palette-background-paper)',
                                                            color: '#777D87'
                                                        }}
                                                        value={selectValue}
                                                        size="small"
                                                        onChange={handleSelectChange}
                                                        displayEmpty
                                                        id="select"
                                                        variant="outlined"
                                                    >
                                                        <MenuItem value={0}>Basic</MenuItem>
                                                        <MenuItem value={1}>Pro</MenuItem>
                                                        <MenuItem value={2}>Premium</MenuItem>
                                                        <MenuItem value={3}>Enterprise</MenuItem>
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
                                            20,000,000 원
                                        </TableCell>
                                        <TableCell component="th" scope="row">
                                            IoT 종류
                                        </TableCell>
                                        <TableCell>
                                            1 개
                                        </TableCell>
                                    </TableRow>

                                    <TableRow>
                                        <TableCell component="th" scope="row">
                                            학습 대상
                                        </TableCell>
                                        <TableCell>
                                            이상탐지
                                        </TableCell>
                                        <TableCell component="th" scope="row">
                                            서비스 지원
                                        </TableCell>
                                        <TableCell>
                                            년 1회
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
