'use client';
import * as React from 'react';
import {styled} from '@mui/material/styles';
import {CheckboxProps} from '@mui/material/Checkbox';
import {RadioProps} from '@mui/material/Radio';

import {
    Box,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    TableContainer,
    Table,
    TableBody,
    TableCell,
    TableRow,
    Checkbox,
    ToggleButton,
    ToggleButtonGroup,
    Typography,
    Radio,
    RadioGroup,
    FormControlLabel,
    Icon, IconButton
} from '@mui/material';
import {SelectOption01} from "@/components/dashboard/tenant/select-option01";
import {SelectOption02} from "@/components/dashboard/tenant/select-option02";
import Close from "@/components/svgIcon/Close";


const BpIcon = styled('span')(() => ({
    borderRadius: 3,
    width: 16,
    height: 16,
    backgroundColor: '#D3D7DE',
    'input:hover ~ &': {
        backgroundColor: '#D3D7DE',
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
            " fillRule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
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

const RadioIcon = styled('span')(() => ({
    borderRadius: '50%',
    width: 16,
    height: 16,
    backgroundColor: '#D3D7DE',
    padding: 0,
    'input:hover ~ &': {
        backgroundColor: '#bac0cd',
    },
    'input:disabled ~ &': {
        boxShadow: 'none',
        background: '#D3D7DE',
    },
}));

const RadioCheckedIcon = styled(RadioIcon)({
    backgroundColor: '#2668C9',
    '&::before': {
        display: 'block',
        width: 16,
        height: 16,
        backgroundImage: 'radial-gradient(#fff,#fff 28%,transparent 32%)',
        content: '""',
    },
    'input:hover ~ &': {
        backgroundColor: '#106ba3',
    },
});

function BpRadio(props: RadioProps) {
    return (
        <Radio
            disableRipple
            color="default"
            checkedIcon={<RadioCheckedIcon/>}
            icon={<RadioIcon/>}
            {...props}
        />
    );
}


export function SelectRatePlan(): React.JSX.Element {
    const [alignment, setAlignment] = React.useState('week');
    const [open, setOpen] = React.useState(false);
    const [selectedPlan, setSelectedPlan] = React.useState<string | null>(null);

    const handleChange = (
        _: React.MouseEvent<HTMLElement>,
        newAlignment: string | null,
    ) => {
        if (newAlignment !== null) {
            setAlignment(newAlignment);
        }
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedPlan(event.target.value);
    };

    return (
        <Box>
            <Button
                variant="contained"
                onClick={handleClickOpen}
                color="inherit"
                sx={{
                    height: '30px',
                }}
            >
                요금제 선택
            </Button>

            <Dialog
                open={open}
                onClose={handleClose}
                sx={{
                    "& .MuiDialog-container": {
                        "& .MuiPaper-root": {
                            width: "100%",
                            maxWidth: "1080px",
                        },
                    },
                }}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{'요금제 선택'}</DialogTitle>
                <IconButton
                    aria-label="close"
                    onClick={handleClose}
                    sx={{
                        position: 'absolute',
                        right: 14,
                        top: 8,
                        opacity: 0.4,
                        '&:hover': {opacity: 1}
                    }}
                >
                    <Icon sx={{height: 20, width: 20, fill: 'var(--mui-palette-text-primary)',}}>
                        <Close/>
                    </Icon>
                </IconButton>
                <DialogContent sx={{height: '531px', overflowY: 'auto'}}>
                    <Box paddingBottom="10px">
                        <Box marginBottom="10px">기본 서비스</Box>

                        <ToggleButtonGroup
                            size="small"
                            value={alignment}
                            exclusive
                            onChange={handleChange}
                            aria-label="Platform"
                        >
                            <ToggleButton value="week">월간 요금</ToggleButton>
                            <ToggleButton value="year">연간 요금</ToggleButton>
                        </ToggleButtonGroup>
                    </Box>

                    <form>
                        <Box marginBottom="16px">
                            <RadioGroup
                                name="basic-service-radio-group"
                                value={selectedPlan}
                                onChange={handleRadioChange}
                            >
                                <TableContainer>
                                    <Table size="small" sx={{minWidth: 650}} aria-label="simple table"
                                           className="form-table tiny bordered">
                                        <colgroup>
                                            <col width="240px"/>
                                            <col width=""/>
                                            <col width=""/>
                                            <col width=""/>
                                            <col width=""/>
                                            <col/>
                                        </colgroup>
                                        <TableBody>
                                            <TableRow>
                                                <TableCell component="th" scope="row"/>
                                                <TableCell component="th" align="center" scope="row">
                                                    <FormControlLabel value="free"
                                                                      control={<BpRadio/>}
                                                                      label="Free"
                                                                      labelPlacement="bottom"
                                                                      sx={{
                                                                          margin: 0,
                                                                          paddingTop: '2px',
                                                                          '.MuiFormControlLabel-label': {
                                                                              fontWeight: '500',
                                                                              fontSize: '13px',
                                                                          },
                                                                      }}/>
                                                </TableCell>
                                                <TableCell component="th" align="center" scope="row">
                                                    <FormControlLabel value="basic"
                                                                      control={<BpRadio/>}
                                                                      label="Basic"
                                                                      labelPlacement="bottom"
                                                                      sx={{
                                                                          margin: 0,
                                                                          paddingTop: '2px',
                                                                          '.MuiFormControlLabel-label': {
                                                                              fontWeight: '500',
                                                                              fontSize: '13px',
                                                                          },
                                                                      }}/>
                                                </TableCell>
                                                <TableCell component="th" align="center" scope="row">
                                                    <FormControlLabel value="pro"
                                                                      control={<BpRadio/>}
                                                                      label="Pro"
                                                                      labelPlacement="bottom"
                                                                      sx={{
                                                                          margin: 0,
                                                                          paddingTop: '2px',
                                                                          '.MuiFormControlLabel-label': {
                                                                              fontWeight: '500',
                                                                              fontSize: '13px',
                                                                          },
                                                                      }}/>
                                                </TableCell>
                                                <TableCell component="th" align="center" scope="row">
                                                    <FormControlLabel value="premium"
                                                                      control={<BpRadio/>}
                                                                      label="Premium"
                                                                      labelPlacement="bottom"
                                                                      sx={{
                                                                          margin: 0,
                                                                          paddingTop: '2px',
                                                                          '.MuiFormControlLabel-label': {
                                                                              fontWeight: '500',
                                                                              fontSize: '13px',
                                                                          },
                                                                      }}/>
                                                </TableCell>
                                                <TableCell component="th" align="center" scope="row">
                                                    <FormControlLabel value="enterprise" control={<BpRadio/>}
                                                                      label="Enterprise" labelPlacement="bottom"
                                                                      sx={{
                                                                          margin: 0,
                                                                          paddingTop: '2px',
                                                                          '.MuiFormControlLabel-label': {
                                                                              fontWeight: '500',
                                                                              fontSize: '13px',
                                                                          },
                                                                      }}/>
                                                </TableCell>
                                            </TableRow>

                                            <TableRow>
                                                <TableCell component="th" scope="row">
                                                    월간 요금
                                                </TableCell>
                                                <TableCell align="center">
                                                    무료
                                                </TableCell>
                                                <TableCell align="center">
                                                    50,000원 ⨉ IoT 개수
                                                </TableCell>
                                                <TableCell align="center">
                                                    40,000원 ⨉ IoT 개수
                                                </TableCell>
                                                <TableCell align="center">
                                                    30,000원 ⨉ IoT 개수
                                                </TableCell>
                                                <TableCell align="center" rowSpan={6}>
                                                    가격 별도 협의
                                                </TableCell>
                                            </TableRow>

                                            <TableRow>
                                                <TableCell component="th" scope="row">
                                                    IoT 개수
                                                </TableCell>
                                                <TableCell align="center">
                                                    1
                                                </TableCell>
                                                <TableCell align="center">
                                                    1 ~ 10
                                                </TableCell>
                                                <TableCell align="center">
                                                    11 ~ 25
                                                </TableCell>
                                                <TableCell align="center">
                                                    26 ~ 50
                                                </TableCell>
                                            </TableRow>

                                            <TableRow>
                                                <TableCell component="th" scope="row">
                                                    <Typography variant="body2" lineHeight="1.3" fontWeight="500">
                                                        리소스 기본 제공량
                                                        <Typography color="var(--mui-palette-neutral-500)"
                                                                    variant="body2">
                                                            * 기본 제공량 초과 시, 추가 비용 발생
                                                        </Typography>
                                                    </Typography>
                                                </TableCell>
                                                <TableCell align="center">
                                                    <Typography variant="body2" lineHeight="1.3">
                                                        30MB 이하 / 일
                                                        <Box color="var(--mui-palette-neutral-500)">
                                                            (10,000원 / GB)
                                                        </Box>
                                                    </Typography>
                                                </TableCell>
                                                <TableCell align="center">
                                                    <Typography variant="body2" lineHeight="1.3">
                                                        10GB 이하 / 월
                                                        <Box color="var(--mui-palette-neutral-500)">
                                                            (10,000원 / GB)
                                                        </Box>
                                                    </Typography>
                                                </TableCell>
                                                <TableCell align="center">
                                                    <Typography variant="body2" lineHeight="1.3">
                                                        25GB 이하 / 월
                                                        <Box color="var(--mui-palette-neutral-500)">
                                                            (10,000원 / GB)
                                                        </Box>
                                                    </Typography>
                                                </TableCell>
                                                <TableCell align="center">
                                                    <Typography variant="body2" lineHeight="1.3">
                                                        50GB 이하 / 월
                                                        <Box color="var(--mui-palette-neutral-500)">
                                                            (10,000원 / GB)
                                                        </Box>
                                                    </Typography>
                                                </TableCell>
                                            </TableRow>

                                            <TableRow>
                                                <TableCell component="th" scope="row">
                                                    데이터 분석 및 정제 서비스
                                                    <Typography color="primary.main"
                                                                display="inline-block">(선택)</Typography>
                                                </TableCell>
                                                <TableCell align="center">
                                                    -
                                                </TableCell>
                                                <TableCell align="center">
                                                    <BpCheckbox disabled={selectedPlan !== 'basic'} />
                                                </TableCell>
                                                <TableCell align="center">
                                                    <BpCheckbox disabled={selectedPlan !== 'pro'} />
                                                </TableCell>
                                                <TableCell align="center">
                                                    <BpCheckbox disabled={selectedPlan !== 'premium'} />
                                                </TableCell>
                                            </TableRow>

                                            <TableRow>
                                                <TableCell component="th" scope="row">
                                                    IoT 종류
                                                </TableCell>
                                                <TableCell align="center">
                                                    -
                                                </TableCell>
                                                <TableCell align="center">
                                                    1
                                                </TableCell>
                                                <TableCell align="center">
                                                    <SelectOption01/>
                                                </TableCell>
                                                <TableCell align="center">
                                                    <SelectOption02/>
                                                </TableCell>
                                            </TableRow>

                                            <TableRow>
                                                <TableCell component="th" scope="row">
                                                    추가 요금
                                                </TableCell>
                                                <TableCell align="center">
                                                    -
                                                </TableCell>
                                                <TableCell align="center">
                                                    기본 요금 ⨉ IoT 종류
                                                </TableCell>
                                                <TableCell align="center">
                                                    기본 요금 ⨉ IoT 종류
                                                </TableCell>
                                                <TableCell align="center">
                                                    기본 요금 ⨉ IoT 종류
                                                </TableCell>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </RadioGroup>
                        </Box>
                    </form>

                    <Box>
                        <Box marginBottom="10px">
                            추가 서비스 <Typography color="primary.main" display="inline-block">(선택)</Typography>
                        </Box>
                        <form>
                            <RadioGroup
                                name="additional-service-radio-button-group"
                            >
                                <TableContainer>
                                    <Table size="small" sx={{minWidth: 650}} aria-label="simple table"
                                           className="form-table tiny bordered">
                                        <colgroup>
                                            <col width="240px"/>
                                            <col width=""/>
                                            <col width=""/>
                                            <col width=""/>
                                            <col width=""/>
                                            <col/>
                                        </colgroup>
                                        <TableBody>
                                            <TableRow>
                                                <TableCell component="th" scope="row"/>
                                                <TableCell component="th" align="center" scope="row">
                                                    <FormControlLabel value="aiBasic" control={<BpRadio/>}
                                                                      label="AI Basic"
                                                                      labelPlacement="bottom"
                                                                      sx={{
                                                                          margin: 0,
                                                                          paddingTop: '2px',
                                                                          '.MuiFormControlLabel-label': {
                                                                              fontWeight: '500',
                                                                              fontSize: '13px',
                                                                          },
                                                                      }}/>
                                                </TableCell>
                                                <TableCell component="th" align="center" scope="row">
                                                    <FormControlLabel value="aiPro" control={<BpRadio/>}
                                                                      label="AI Pro"
                                                                      labelPlacement="bottom"
                                                                      sx={{
                                                                          margin: 0,
                                                                          paddingTop: '2px',
                                                                          '.MuiFormControlLabel-label': {
                                                                              fontWeight: '500',
                                                                              fontSize: '13px',
                                                                          },
                                                                      }}/>
                                                </TableCell>
                                                <TableCell component="th" align="center" scope="row">
                                                    <FormControlLabel value="aiPremium" control={<BpRadio/>}
                                                                      label="AI Premium"
                                                                      labelPlacement="bottom"
                                                                      sx={{
                                                                          margin: 0,
                                                                          paddingTop: '2px',
                                                                          '.MuiFormControlLabel-label': {
                                                                              fontWeight: '500',
                                                                              fontSize: '13px',
                                                                          },
                                                                      }}/>
                                                </TableCell>
                                            </TableRow>

                                            <TableRow>
                                                <TableCell component="th" scope="row">
                                                    IoT 종류
                                                </TableCell>
                                                <TableCell align="center">
                                                    1
                                                </TableCell>
                                                <TableCell align="center">
                                                    <SelectOption01/>
                                                </TableCell>
                                                <TableCell align="center">
                                                    <SelectOption02/>
                                                </TableCell>
                                            </TableRow>

                                            <TableRow>
                                                <TableCell component="th" scope="row">
                                                    연간 요금
                                                </TableCell>
                                                <TableCell align="center">
                                                    기본 요금 ⨉ IoT 종류
                                                </TableCell>
                                                <TableCell align="center">
                                                    기본 요금 ⨉ IoT 종류
                                                </TableCell>
                                                <TableCell align="center">
                                                    기본 요금 ⨉ IoT 종류
                                                </TableCell>
                                            </TableRow>

                                            <TableRow>
                                                <TableCell component="th" scope="row">
                                                    현장 방문
                                                </TableCell>
                                                <TableCell align="center">
                                                    년 1회
                                                </TableCell>
                                                <TableCell align="center">
                                                    년 2회
                                                </TableCell>
                                                <TableCell align="center">
                                                    년 2회
                                                </TableCell>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </RadioGroup>
                        </form>
                    </Box>
                </DialogContent>

                <DialogActions>
                    <Button onClick={handleClose} variant="contained" color="inherit" disableElevation>
                        취소
                    </Button>
                    <Button onClick={handleClose} variant="contained" color="primary" disableElevation>
                        선택
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
}