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
    MenuItem,
    Typography, Icon, Select
} from "@mui/material";
import ArrowBottom from "@/components/svgIcon/ArrowBottom";

export function CreateTableForm(): React.JSX.Element {
    const [open, setOpen] = React.useState(false);

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
                                                            style={open ? { backgroundColor: '#EBF1FA' } : {}}
                                                            open={open}
                                                            onOpen={() => setOpen(true)}
                                                            onClose={() => setOpen(false)}
                                                            sx={{
                                                                height: '30px',
                                                                backgroundColor: 'var(--mui-palette-background-paper)',
                                                            }}
                                                            renderValue={(value: any) => {
                                                                if (!value) {
                                                                    return <Typography color="text.disabled"
                                                                                       variant="body2">권한
                                                                        선택</Typography>;
                                                                }
                                                                return value;
                                                            }}
                                                        >
                                                            <MenuItem value={'관리자'}>관리자</MenuItem>
                                                            <MenuItem value={'운영자'}>운영자</MenuItem>
                                                            <MenuItem value={'사용자'}>사용자</MenuItem>
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
                <Button variant="contained" color="inherit" disableElevation sx={{width: '74px'}}>
                    취소
                </Button>
                <Button variant="contained" color="primary" disableElevation sx={{width: '74px'}}>
                    저장
                </Button>
            </Grid>
        </Box>
    );
}
