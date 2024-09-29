'use client';

import * as React from 'react';
import {
    Box,
    Card,
    Button,
    FormControl,
    TableContainer,
    OutlinedInput,
    TableCell,
    TableRow,
    Table,
    TableBody,
    Switch,
    Grid,
    FormGroup,
    FormControlLabel, Icon, Typography, Select, MenuItem
} from "@mui/material";
import ArrowBottom from "@/components/svgIcon/ArrowBottom";

export function EditTableForm(): React.JSX.Element {
    const [open, setOpen] = React.useState(false);
    const [checked, setChecked] = React.useState(false);

    const toggleChecked = () => {
        setChecked((prev) => !prev);
    };
    const handleIconClick = (event: React.MouseEvent) => {
        event.stopPropagation();
        setOpen((prevOpen) => !prevOpen);
    };

    return (
        <Box>
            <Card variant="outlined">
                <Box p="20px">
                    <form
                        onSubmit={(event) => {
                            event.preventDefault();
                        }}
                    >
                        <TableContainer>
                            <Table size="small" sx={{minWidth: 650}} aria-label="simple table" className="form-table">
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
                                            <Box display="flex" alignItems="center" gap={1}>
                                                <Box width={640}>
                                                    <FormControl fullWidth>
                                                        <OutlinedInput
                                                            defaultValue="김코난2"
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
                                            권한<span className="required"/>
                                        </TableCell>
                                        <TableCell>
                                            <Box display="flex" alignItems="center" gap={1}>
                                                <Box width={320}>
                                                    <FormControl fullWidth>
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
                                                            open={open}
                                                            defaultValue={'관리자'}
                                                            onOpen={() => setOpen(true)}
                                                            onClose={() => setOpen(false)}
                                                            sx={{
                                                                height: '30px',
                                                                backgroundColor: open ? '#EBF1FA' : 'var(--mui-palette-background-paper)',
                                                                borderColor: open ? 'var(--mui-palette-primary-main)' : 'var(--mui-palette-divider)',
                                                                borderWidth: '1px',
                                                            }}
                                                            IconComponent={() => null}
                                                            renderValue={(value: any) => {
                                                                if (!value) {
                                                                    return (
                                                                        <Typography color="text.disabled" variant="body2">
                                                                            권한 선택
                                                                        </Typography>
                                                                    );
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
                                                            multiline
                                                            rows={5}
                                                            type="id"
                                                            sx={{
                                                                height: '100px',
                                                            }}
                                                            size="small"
                                                            defaultValue="설명 300자"
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
                                            <FormGroup>
                                                <FormControlLabel
                                                    control={<Switch size="small" checked={checked}
                                                                     onChange={toggleChecked}/>}
                                                    label={checked ?
                                                        <Box sx={{ color:'#2668C9'}}>
                                                            활성
                                                        </Box>
                                                         : '비활성'}
                                                />
                                            </FormGroup>
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
