'use client';

import * as React from 'react';

import TableContainer from '@mui/material/TableContainer';
import {
    Box,
    TableCell,
    TableRow,
    Table,
    TableBody,
    MenuItem,
    Typography,
    Button,
    Card, Icon, Select, FormControl
} from "@mui/material";
import ArrowBottom from "@/components/svgIcon/ArrowBottom";
import SmallEdit from "@/components/svgIcon/SmallEdit";

export function BasicTableForm(): React.JSX.Element {
    const [open, setOpen] = React.useState(false);

    const handleIconClick = (event: React.MouseEvent) => {
        event.stopPropagation();
        setOpen((prevOpen) => !prevOpen); // Toggle open state
    };

    return (
        <Box mb={1}>
            <Card variant="outlined">
                <Box p="11px 20px 15px 20px">
                    <Box display="flex" justifyContent="space-between" alignItems="center" pb={'11px'}>
                        <Typography variant="subtitle2">기본 서비스</Typography>
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
                                            <FormControl sx={{ width: 596, position: 'relative' }}>
                                                <Box
                                                    onClick={handleIconClick}
                                                    sx={{
                                                        position: 'absolute',
                                                        right: 8,
                                                        top: '50%',
                                                        transform: 'translateY(-50%)',
                                                        cursor: 'pointer',
                                                        zIndex: 1,
                                                        pointerEvents: 'auto',
                                                    }}
                                                >
                                                    <Icon
                                                        sx={{
                                                            width: 12,
                                                            height: 12,
                                                            fill: '#777D87',
                                                            transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
                                                        }}
                                                    >
                                                        <ArrowBottom />
                                                    </Icon>
                                                </Box>

                                                <Select
                                                    fullWidth
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
                                                        borderColor: open ? 'var(--mui-palette-primary-main)' : 'var(--mui-palette-divider)',
                                                        transition: 'border-color 0.3s ease, border-width 0.3s ease',
                                                    }}
                                                    defaultValue={1}
                                                    IconComponent={() => null} // Disable default MUI icon
                                                >
                                                    <MenuItem value={0}>Free</MenuItem>
                                                    <MenuItem value={1}>Basic</MenuItem>
                                                    <MenuItem value={2}>Pro</MenuItem>
                                                    <MenuItem value={3}>Premium</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </TableCell>
                                    </TableRow>

                                    <TableRow>
                                        <TableCell component="th" scope="row">
                                            월간 요금
                                        </TableCell>
                                        <TableCell>
                                            <Box padding="0 10px">
                                                50,000 원
                                            </Box>
                                        </TableCell>
                                        <TableCell component="th" scope="row">
                                            연간 요금
                                        </TableCell>
                                        <TableCell>
                                            <Box padding="0 10px">
                                                40,000 원
                                            </Box>
                                        </TableCell>
                                    </TableRow>

                                    <TableRow>
                                        <TableCell component="th" scope="row">
                                            최소 IoT 개수
                                        </TableCell>
                                        <TableCell>
                                            <Box padding="0 10px">
                                                1 개
                                            </Box>
                                        </TableCell>
                                        <TableCell component="th" scope="row">
                                            최대 IoT 개수
                                        </TableCell>
                                        <TableCell>
                                            <Box padding="0 10px">
                                                10 개
                                            </Box>
                                        </TableCell>
                                    </TableRow>

                                    <TableRow>
                                        <TableCell component="th" scope="row">
                                            리소스 기본 제공량
                                        </TableCell>
                                        <TableCell>
                                            <Box padding="0 10px">
                                                10GB / 월
                                            </Box>
                                        </TableCell>
                                        <TableCell component="th" scope="row">
                                            리소스 추가 비용
                                        </TableCell>
                                        <TableCell>
                                            <Box padding="0 10px">
                                                10,000원 / GB
                                            </Box>
                                        </TableCell>
                                    </TableRow>

                                    <TableRow>
                                        <TableCell component="th" scope="row">
                                            선택 서비스 요금
                                        </TableCell>
                                        <TableCell>
                                            <Box padding="0 10px">
                                                5,000,000 원
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
                                            선택 서비스 지원
                                        </TableCell>
                                        <TableCell colSpan={3}>
                                            <Box padding="0 10px">
                                                1회 / 2주
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
