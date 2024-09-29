'use client';

import * as React from 'react';
import {styled} from '@mui/material/styles';

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
    Typography,
    Button,
    Card,
} from "@mui/material";
import {SelectRatePlan} from "@/components/dashboard/tenant/select-rate-plan";

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});

export function CreateTableForm(): React.JSX.Element {

    return (
        <Box>
            <Box mb={1}>
                <Card variant="outlined">
                    <Box p="14px 20px 15px 20px">
                        <Box display="flex" justifyContent="space-between" alignItems="center" pb={'11px'}>
                            <Typography variant="subtitle2">기본 정보</Typography>
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
                                        <col/>
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
                                                                size="small"
                                                                required
                                                                type="id"
                                                                inputProps={{maxLength: 50}}
                                                            />
                                                        </FormControl>
                                                    </Box>
                                                </Box>
                                            </TableCell>
                                        </TableRow>

                                        <TableRow>
                                            <TableCell component="th" scope="row">
                                                시스템 계정<span className="required"/>
                                            </TableCell>
                                            <TableCell>
                                                <Box display="flex" alignItems="center" gap={1}>
                                                    <Box width={640}>
                                                        <FormControl fullWidth>
                                                            <OutlinedInput
                                                                size="small"
                                                                required
                                                                type="id"
                                                                inputProps={{maxLength: 50}}
                                                            />
                                                        </FormControl>
                                                    </Box>
                                                </Box>
                                            </TableCell>
                                        </TableRow>

                                        <TableRow>
                                            <TableCell component="th" scope="row">
                                                요금제<span className="required"/>
                                            </TableCell>
                                            <TableCell>
                                                <Box display="flex" gap="10px" alignItems="center">
                                                    <SelectRatePlan/>
                                                    <Box display="flex" alignItems="center" gap={1}>
                                                        <Box width={540}>
                                                            <FormControl fullWidth>
                                                                <OutlinedInput
                                                                    readOnly
                                                                    required
                                                                    type="id"
                                                                    size="small"
                                                                    sx={{
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
                                                </Box>
                                            </TableCell>
                                        </TableRow>

                                        <TableRow>
                                            <TableCell component="th" scope="row">
                                                시스템 로고
                                            </TableCell>
                                            <TableCell>
                                                <Box display="flex" gap="10px" alignItems="center">
                                                    <Button
                                                        component="label"
                                                        role={undefined}
                                                        variant="contained"
                                                        tabIndex={-1}
                                                        color="inherit"
                                                        sx={{
                                                            height: '30px',
                                                        }}
                                                    >
                                                        파일 선택
                                                        <VisuallyHiddenInput
                                                            type="file"
                                                            onChange={(event) => console.log(event.target.files)}
                                                            multiple
                                                        />
                                                    </Button>

                                                    <Box display="flex" alignItems="center" gap={1}>
                                                        <Box width={553}>
                                                            <FormControl fullWidth>
                                                                <OutlinedInput
                                                                    readOnly
                                                                    required
                                                                    type="id"
                                                                    size="small"
                                                                    sx={{
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
                                                    <FormHelperText>최대 파일 크기: 1MB</FormHelperText>
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
                                                                size="small"
                                                                multiline
                                                                rows={5}
                                                                inputProps={{maxLength: 300}}
                                                                type="id"
                                                                sx={{
                                                                    height: '100px',
                                                                }}
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
            </Box>

            <Card variant="outlined">
                <Box p="14px 20px 15px 20px">
                    <Box display="flex" justifyContent="space-between" alignItems="center" pb={'11px'}>
                        <Typography variant="subtitle2">관리자 정보</Typography>
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
                                    <col/>
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
                                            아이디 (이메일)<span className="required"/>
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
