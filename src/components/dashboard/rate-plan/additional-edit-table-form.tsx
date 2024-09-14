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
    Typography,
    Button,
    Card, Grid, OutlinedInput, Checkbox, FormControlLabel
} from "@mui/material";
import {styled} from "@mui/material/styles";
import {CheckboxProps} from "@mui/material/Checkbox";

const BpIcon = styled('span')(() => ({
    borderRadius: 3,
    width: 16,
    height: 16,
    backgroundColor: 'var(--mui-palette-neutral-200)',
    'input:hover ~ &': {
        backgroundColor: 'var(--mui-palette-neutral-200)',
    },
    'input:disabled ~ &': {
        boxShadow: 'none',
        background: 'rgba(206,217,224,.5)',
    },
}));

const BpCheckedIcon = styled(BpIcon)({
    backgroundColor: 'var(--mui-palette-primary-main)',
    '&::before': {
        display: 'block',
        width: 16,
        height: 16,
        backgroundImage:
            "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
            " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
            "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
        content: '""',
    },
    'input:hover ~ &': {
        backgroundColor: 'var(--mui-palette-primary-main)',
    },
});

function BpCheckbox(props: CheckboxProps) {
    return (
        <Checkbox
            sx={{'&:hover': {backgroundColor: 'transparent'}}}
            disableRipple
            color="default"
            checkedIcon={<BpCheckedIcon/>}
            icon={<BpIcon/>}
            inputProps={{'aria-label': 'Checkbox demo'}}
            {...props}
        />
    );
}

export function AdditionalEditTableForm(): React.JSX.Element {

    return (
        <Box>
            <Card variant="outlined">
                <Box p="14px 20px">
                    <Box display="flex" justifyContent="space-between" alignItems="center" pb={'11px'}>
                        <Typography variant="subtitle2">추가 서비스</Typography>
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
                                                AI Basic
                                            </Box>
                                        </TableCell>
                                    </TableRow>

                                    <TableRow>
                                        <TableCell component="th" scope="row">
                                            연간 요금<span className="required"/>
                                        </TableCell>
                                        <TableCell>
                                            <Box display="flex" alignItems="center" gap={1}>
                                                <Box width={100}>
                                                    <FormControl fullWidth>
                                                        <OutlinedInput
                                                            inputProps={{style: {textAlign: 'right'}}}
                                                            defaultValue="20,000,000"
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
                                            학습 대상
                                        </TableCell>
                                        <TableCell>
                                            <Box display="flex" alignItems="center" gap="20px">
                                                <FormControlLabel
                                                    sx={{gap: '10px'}}
                                                    label="이상탐지"
                                                    control={<BpCheckbox/>}
                                                />

                                                <FormControlLabel
                                                    sx={{gap: '10px'}}
                                                    label="고장진단"
                                                    control={<BpCheckbox/>}
                                                />

                                                <FormControlLabel
                                                    sx={{gap: '10px'}}
                                                    label="고장예측"
                                                    control={<BpCheckbox/>}
                                                />

                                            </Box>
                                        </TableCell>
                                        <TableCell component="th" scope="row">
                                            서비스 지원<span className="required"/>
                                        </TableCell>
                                        <TableCell>
                                            <Box display="flex" alignItems="center" gap={1}>
                                                년
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
                                                회
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
