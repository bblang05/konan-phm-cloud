'use client';

import * as React from 'react';
import {styled} from '@mui/material/styles';
import {CheckboxProps} from '@mui/material/Checkbox';

import {
    Box,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    IconButton, Link,
    Table, TableBody, TableCell,
    TableHead, TableRow, Checkbox
} from '@mui/material';

import {useSelection} from "@/hooks/use-selection";
import {UserFilters} from "@/components/dashboard/group/user-filters";

function createData(
    checkbox: React.ReactNode,
    name: string,
    email: string,
    authority: string,
) {
    return {checkbox, name, email, authority};
}

const rows = [
    createData(<BpCheckbox/>, '이름', 'example1@konantech.com', '관리자'),
    createData(<BpCheckbox/>, '이름', 'example1@konantech.com', '관리자'),
    createData(<BpCheckbox/>, '이름', 'example1@konantech.com', '관리자'),
    createData(<BpCheckbox/>, '이름', 'example1@konantech.com', '관리자'),
    createData(<BpCheckbox/>, '이름', 'example1@konantech.com', '관리자'),
    createData(<BpCheckbox/>, '이름', 'example1@konantech.com', '관리자'),
    createData(<BpCheckbox/>, '이름', 'example1@konantech.com', '관리자'),
    createData(<BpCheckbox/>, '이름', 'example1@konantech.com', '관리자'),
    createData(<BpCheckbox/>, '이름', 'example1@konantech.com', '관리자'),
    createData(<BpCheckbox/>, '이름', 'example1@konantech.com', '관리자'),
];

const BpIcon = styled('span')(({theme}) => ({
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
            sx={{'&:hover': {bgcolor: 'transparent'}}}
            disableRipple
            color="default"
            checkedIcon={<BpCheckedIcon/>}
            icon={<BpIcon/>}
            inputProps={{'aria-label': 'Checkbox demo'}}
            {...props}
        />
    );
}


export function AddUser(): React.JSX.Element {


    const rowIds = React.useMemo(() => {
        return rows.map((customer) => customer.name);
    }, [rows]);


    const {selected} = useSelection(rowIds);

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Box>
            <Button
                variant="contained"
                onClick={handleClickOpen}
                disableElevation
                startIcon={
                    <Box
                        component="img"
                        alt="logo"
                        src="/images/ico_add-g12-nor.svg"
                        sx={{display: 'inline-block', height: '14px', width: '14px'}}
                    />
                }
                color="inherit"
                size="small"
            >
                추가
            </Button>

            <Dialog
                open={open}
                onClose={handleClose}
                sx={{
                    "& .MuiDialog-container": {
                        "& .MuiPaper-root": {
                            width: "100%",
                            maxWidth: "760px",  // Set your width here
                        },
                    },
                }}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{'사용자 추가'}</DialogTitle>
                <IconButton
                    aria-label="close"
                    onClick={handleClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <Box
                        component="img"
                        alt="logo"
                        src="/images/close__line--222.svg"
                        sx={{display: 'inline-block', height: '20px', width: '20px'}}
                    />
                </IconButton>
                <DialogContent>
                    <Box display="flex" justifyContent="space-between" alignItems="center" pb={'10px'}>
                        <UserFilters/>
                    </Box>

                    <Box sx={{height: '360px', overflowX: 'auto'}}>
                        <Table size="small" className="even-table">
                            <colgroup>
                                <col width="2%"/>
                                <col/>
                                <col/>
                                <col/>
                            </colgroup>
                            <TableHead>
                                <TableRow>
                                    <TableCell>
                                        <BpCheckbox/>
                                    </TableCell>
                                    <TableCell>
                                        이름
                                        <Box
                                            component="img"
                                            alt="logo"
                                            src="/images/ico_sort.svg"
                                            sx={{
                                                display: 'inline-block',
                                                height: '16px',
                                                width: '16px',
                                                cursor: 'pointer',
                                                verticalAlign: 'middle'
                                            }}
                                        />
                                    </TableCell>
                                    <TableCell>
                                        아이디
                                        <Box
                                            component="img"
                                            alt="logo"
                                            src="/images/ico_sort.svg"
                                            sx={{
                                                display: 'inline-block',
                                                height: '16px',
                                                width: '16px',
                                                cursor: 'pointer',
                                                verticalAlign: 'middle'
                                            }}
                                        />
                                    </TableCell>
                                    <TableCell>
                                        권한
                                        <Box
                                            component="img"
                                            alt="logo"
                                            src="/images/ico_sort.svg"
                                            sx={{
                                                display: 'inline-block',
                                                height: '16px',
                                                width: '16px',
                                                cursor: 'pointer',
                                                verticalAlign: 'middle'
                                            }}
                                        />
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => {
                                    const isSelected = selected?.has(row.name);
                                    return (
                                        <TableRow hover
                                                  key={row.name}
                                                  selected={isSelected}
                                        >
                                            <TableCell align={"center"} sx={{paddingTop: '5px', paddingBottom: '5px'}}>{row.checkbox}</TableCell>
                                            <TableCell sx={{paddingTop: '5px', paddingBottom: '5px'}} component="th" scope="row">
                                                {row.name}
                                            </TableCell>
                                            <TableCell sx={{paddingTop: '5px', paddingBottom: '5px'}}>{row.email}</TableCell>
                                            <TableCell sx={{paddingTop: '5px', paddingBottom: '5px'}}>{row.authority}</TableCell>
                                        </TableRow>
                                    )
                                })}
                            </TableBody>
                        </Table>
                    </Box>
                </DialogContent>

                <DialogActions>
                    <Button onClick={handleClose} variant="contained" color="inherit">
                        취소
                    </Button>
                    <Button onClick={handleClose} variant="contained">
                        추가
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
}
