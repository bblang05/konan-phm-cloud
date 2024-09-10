'use client';

import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import TableContainer from '@mui/material/TableContainer';
import {
    Box,
    FormControl,
    FormHelperText,
    OutlinedInput,
    TableCell,
    TableRow,
    Table,
    TableBody,
    Grid,
    MenuItem
} from "@mui/material";
import Select, {SelectChangeEvent} from "@mui/material/Select";

export function CreateTableForm(): React.JSX.Element {

    const [selectValue, setSelectValue] = React.useState<string>('0');

    const handleSelectChange = (event: SelectChangeEvent) => {
        setSelectValue(event.target.value as string);
    };

    return (
        <Box>
            <Card variant="outlined">
                <Box p="17px 20px">
                    <form
                        onSubmit={(event) => {
                            event.preventDefault();
                        }}
                    >
                        <TableContainer>
                            <Table sx={{minWidth: 650}} aria-label="simple table"
                                   className="form-table">
                                <colgroup>
                                    <col width="160px"/>
                                    <col width=""/>
                                </colgroup>
                                <TableBody>
                                    <TableRow>
                                        <TableCell component="th" scope="row">
                                            이름<span className="required"/>
                                        </TableCell>
                                        <TableCell>
                                            <Box display="flex" alignItems="center" gap={1}>
                                                <Box width={640}>
                                                    <FormControl fullWidth>
                                                        <OutlinedInput
                                                            required
                                                            type="id"
                                                            size="small"
                                                        />
                                                    </FormControl>
                                                </Box>
                                            </Box>
                                        </TableCell>
                                    </TableRow>

                                    <TableRow>
                                        <TableCell component="th" scope="row">
                                            아이디(이메일)<span className="required"/>
                                        </TableCell>
                                        <TableCell>
                                            <Box display="flex" alignItems="center" gap={1}>
                                                <Box width={640}>
                                                    <FormControl fullWidth>
                                                        <OutlinedInput
                                                            required
                                                            type="id"
                                                            size="small"
                                                        />
                                                    </FormControl>
                                                </Box>
                                            </Box>
                                        </TableCell>
                                    </TableRow>

                                    <TableRow>
                                        <TableCell component="th" scope="row">
                                            권한<span className="required"/>
                                        </TableCell>
                                        <TableCell>
                                            <Box display="flex" alignItems="center" gap={1}>
                                                <Box width={320}>
                                                    <FormControl fullWidth>
                                                        <Select
                                                            sx={{
                                                                height: '30px',
                                                                backgroundColor: 'var(--mui-palette-background-paper)',
                                                                // color: '#777D87'
                                                            }}
                                                            value={selectValue}
                                                            size="small"
                                                            onChange={handleSelectChange}
                                                            displayEmpty
                                                            id="select"
                                                            variant="outlined"
                                                        >
                                                            <MenuItem value={0}>
                                                                권한 선택
                                                            </MenuItem>
                                                            <MenuItem value={1}>관리자</MenuItem>
                                                            <MenuItem value={2}>운영자</MenuItem>
                                                            <MenuItem value={3}>사용자</MenuItem>
                                                        </Select>
                                                    </FormControl>
                                                </Box>
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
                                                            multiline
                                                            rows={5}
                                                            type="id"
                                                            sx={{
                                                                height: '100px',
                                                            }}
                                                            size="small"
                                                        />
                                                    </FormControl>
                                                </Box>
                                            </Box>
                                        </TableCell>
                                    </TableRow>

                                    <TableRow>
                                        <TableCell component="th" scope="row">
                                            비밀번호<span className="required"/>
                                        </TableCell>
                                        <TableCell>
                                            <Box display="flex" alignItems="center">
                                                <Box width={320} mr="12px">
                                                    <FormControl fullWidth>
                                                        <OutlinedInput
                                                            required
                                                            type="id"
                                                            size="small"
                                                        />
                                                    </FormControl>
                                                </Box>
                                                <FormHelperText>영문 대소문자, 숫자, 특수문자(!@#$%^&*-=+)를 혼합하여 9~24자
                                                    이내로 입력하시기 바랍니다.</FormHelperText>
                                            </Box>
                                        </TableCell>
                                    </TableRow>

                                    <TableRow>
                                        <TableCell component="th" scope="row">
                                            비밀번호 확인<span className="required"/>
                                        </TableCell>
                                        <TableCell>
                                            <Box display="flex" alignItems="center" gap={1}>
                                                <Box width={320}>
                                                    <FormControl fullWidth>
                                                        <OutlinedInput
                                                            required
                                                            type="id"
                                                            size="small"
                                                        />
                                                    </FormControl>
                                                </Box>
                                            </Box>
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </form>
                </Box>
            </Card>
            <Grid
                container
                direction="row"
                justifyContent="flex-end"
                alignItems="center"
                gap={1}
                pt="20px"
            >
                <Button variant="contained" color="inherit" sx={{width: '74px'}}>
                    취소
                </Button>
                <Button variant="contained" sx={{width: '74px'}}>
                    저장
                </Button>
            </Grid>
        </Box>
    );
}
