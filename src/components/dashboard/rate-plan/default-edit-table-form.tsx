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
    Card, Grid, OutlinedInput, Icon, Select
} from "@mui/material";
import ArrowBottom from "@/components/svgIcon/ArrowBottom";

export function DefaultEditTableForm(): React.JSX.Element {
    const [open, setOpen] = React.useState(false);

    return (
        <Box>
            <Card variant="outlined">
                <Box p="14px 20px">
                    <Box display="flex" justifyContent="space-between" alignItems="center" pb={'11px'}>
                        <Typography variant="subtitle2">기본 서비스</Typography>
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
                                            <Box padding="0 10px">
                                                Basic
                                            </Box>
                                        </TableCell>
                                    </TableRow>

                                    <TableRow>
                                        <TableCell component="th" scope="row">
                                            월간 요금<span className="required"/>
                                        </TableCell>
                                        <TableCell>
                                            <Box display="flex" alignItems="center" gap={1}>
                                                <Box width={100}>
                                                    <FormControl fullWidth>
                                                        <OutlinedInput
                                                            inputProps={{style: {textAlign: 'right'}}}
                                                            defaultValue="50,000"
                                                            required
                                                            type="id"
                                                            size="small"
                                                        />
                                                    </FormControl>
                                                </Box>
                                                원
                                            </Box>
                                        </TableCell>
                                        <TableCell component="th" scope="row">
                                            연간 요금<span className="required"/>
                                        </TableCell>
                                        <TableCell>
                                            <Box display="flex" alignItems="center" gap={1}>
                                                <Box width={100}>
                                                    <FormControl fullWidth>
                                                        <OutlinedInput
                                                            inputProps={{style: {textAlign: 'right'}}}
                                                            defaultValue="40,000"
                                                            required
                                                            type="id"
                                                            size="small"
                                                        />
                                                    </FormControl>
                                                </Box>
                                                원
                                            </Box>
                                        </TableCell>
                                    </TableRow>

                                    <TableRow>
                                        <TableCell component="th" scope="row">
                                            최소 IoT 개수<span className="required"/>
                                        </TableCell>
                                        <TableCell>
                                            <Box display="flex" alignItems="center" gap={1}>
                                                <Box width={100}>
                                                    <FormControl fullWidth>
                                                        <OutlinedInput
                                                            inputProps={{style: {textAlign: 'right'}}}
                                                            defaultValue="1"
                                                            required
                                                            type="id"
                                                            size="small"
                                                        />
                                                    </FormControl>
                                                </Box>
                                                개
                                            </Box>
                                        </TableCell>
                                        <TableCell component="th" scope="row">
                                            최대 IoT 개수<span className="required"/>
                                        </TableCell>
                                        <TableCell>
                                            <Box display="flex" alignItems="center" gap={1}>
                                                <Box width={100}>
                                                    <FormControl fullWidth>
                                                        <OutlinedInput
                                                            inputProps={{style: {textAlign: 'right'}}}
                                                            defaultValue="10"
                                                            required
                                                            type="id"
                                                            size="small"
                                                        />
                                                    </FormControl>
                                                </Box>
                                                개
                                            </Box>
                                        </TableCell>
                                    </TableRow>

                                    <TableRow>
                                        <TableCell component="th" scope="row">
                                            리소스 기본 제공량<span className="required"/>
                                        </TableCell>
                                        <TableCell>
                                            <Box display="flex" alignItems="center" gap={1}>
                                                <Box width={100}>
                                                    <FormControl fullWidth>
                                                        <OutlinedInput
                                                            inputProps={{style: {textAlign: 'right'}}}
                                                            defaultValue="10"
                                                            required
                                                            type="id"
                                                            size="small"
                                                        />
                                                    </FormControl>
                                                </Box>
                                                <Box width={54}>
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
                                                            defaultValue={1}
                                                        >
                                                            <MenuItem value={0}>MB</MenuItem>
                                                            <MenuItem value={1}>GB</MenuItem>
                                                        </Select>
                                                    </FormControl>
                                                </Box>
                                                /
                                                <Box width={54}>
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
                                                            defaultValue={1}
                                                        >
                                                            <MenuItem value={0}>월</MenuItem>
                                                            <MenuItem value={1}>년</MenuItem>
                                                        </Select>
                                                    </FormControl>
                                                </Box>
                                            </Box>
                                        </TableCell>
                                        <TableCell component="th" scope="row">
                                            리소스 추가 비용<span className="required"/>
                                        </TableCell>
                                        <TableCell>
                                            <Box display="flex" alignItems="center" gap={1}>
                                                <Box width={100}>
                                                    <FormControl fullWidth>
                                                        <OutlinedInput
                                                            inputProps={{style: {textAlign: 'right'}}}
                                                            defaultValue="10,000"
                                                            required
                                                            type="id"
                                                            size="small"
                                                        />
                                                    </FormControl>
                                                </Box>
                                                원 / GB
                                            </Box>
                                        </TableCell>
                                    </TableRow>

                                    <TableRow>
                                        <TableCell component="th" scope="row">
                                            선택 서비스 요금<span className="required"/>
                                        </TableCell>
                                        <TableCell>
                                            <Box display="flex" alignItems="center" gap={1}>
                                                <Box width={100}>
                                                    <FormControl fullWidth>
                                                        <OutlinedInput
                                                            inputProps={{style: {textAlign: 'right'}}}
                                                            defaultValue="5,000,000"
                                                            required
                                                            type="id"
                                                            size="small"
                                                        />
                                                    </FormControl>
                                                </Box>
                                                원
                                            </Box>
                                        </TableCell>
                                        <TableCell component="th" scope="row">
                                            IoT 종류<span className="required"/>
                                        </TableCell>
                                        <TableCell>
                                            <Box display="flex" alignItems="center" gap={1}>
                                                <Box width={100}>
                                                    <FormControl fullWidth>
                                                        <OutlinedInput
                                                            inputProps={{style: {textAlign: 'right'}}}
                                                            defaultValue="1"
                                                            required
                                                            type="id"
                                                            size="small"
                                                        />
                                                    </FormControl>
                                                </Box>
                                                개
                                            </Box>
                                        </TableCell>
                                    </TableRow>

                                    <TableRow>
                                        <TableCell component="th" scope="row">
                                            선택 서비스 지원<span className="required"/>
                                        </TableCell>
                                        <TableCell colSpan={3}>
                                            <Box display="flex" alignItems="center" gap={1}>
                                                <Box width={100}>
                                                    <FormControl fullWidth>
                                                        <OutlinedInput
                                                            inputProps={{style: {textAlign: 'right'}}}
                                                            defaultValue="1"
                                                            required
                                                            type="id"
                                                            size="small"
                                                        />
                                                    </FormControl>
                                                </Box>
                                                회 /
                                                <Box width={100}>
                                                    <FormControl fullWidth>
                                                        <OutlinedInput
                                                            inputProps={{style: {textAlign: 'right'}}}
                                                            defaultValue="2"
                                                            required
                                                            type="id"
                                                            size="small"
                                                        />
                                                    </FormControl>
                                                </Box>
                                                주
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
