'use client';

import * as React from 'react';
import { styled } from '@mui/material/styles';
import { CheckboxProps } from '@mui/material/Checkbox';
import {
    Box,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    IconButton,
    Table, TableBody, TableCell,
    TableHead, TableRow, Checkbox, Icon, TableContainer
} from '@mui/material';

import Close from "@/components/svgIcon/Close";
import {UserFilters} from "@/components/dashboard/group/user-filters";
import SmallAdd from "@/components/svgIcon/SmallAdd";
import CmIcon from "@/components/CmIcon";


function createData(
    name: string,
    email: string,
    authority: string,
) {
    return { name, email, authority };
}

const rows = [
    createData('이름1', 'example1@konantech.com', '관리자'),
    createData('이름2', 'example2@konantech.com', '관리자'),
    createData('이름3', 'example3@konantech.com', '관리자'),
    createData('이름4', 'example4@konantech.com', '관리자'),
    createData('이름5', 'example5@konantech.com', '관리자'),
    createData('이름6', 'example5@konantech.com', '관리자'),
    createData('이름7', 'example5@konantech.com', '관리자'),
    createData('이름8', 'example5@konantech.com', '관리자'),
    createData('이름9', 'example5@konantech.com', '관리자'),
    createData('이름10', 'example5@konantech.com', '관리자'),
];

const BpIcon = styled('span')({
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
});

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
            sx={{ '&:hover': { backgroundColor: 'transparent' } }}
            disableRipple
            color="default"
            checkedIcon={<BpCheckedIcon />}
            icon={<BpIcon />}
            inputProps={{ 'aria-label': 'Checkbox demo' }}
            {...props}
        />
    );
}

export function AddUser(): React.JSX.Element {
    const [open, setOpen] = React.useState(false);
    const [selectedRows, setSelectedRows] = React.useState<string[]>([]);
    const [_selectAll, setSelectAll] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleRowSelection = (name: string) => {
        setSelectedRows((prevSelectedRows) =>
            prevSelectedRows.includes(name)
                ? prevSelectedRows.filter((row) => row !== name)
                : [...prevSelectedRows, name]
        );
    };

    const handleSelectAll = (checked: boolean) => {
        setSelectAll(checked);
        setSelectedRows(checked ? rows.map((row) => row.name) : []);
    };

    const isAllSelected = selectedRows.length === rows.length && rows.length > 0;

    React.useEffect(() => {
        setSelectAll(isAllSelected);
    }, [isAllSelected]);

    return (
        <Box>
            <Button variant="contained" color="inherit"
                    size="small"
                    disableElevation
                    onClick={handleClickOpen}
                    sx={{fontSize: '12px', height: '26px', lineHeight: 'inherit'}}
                    startIcon={
                        <Icon sx={{width: 12, height: 12}}>
                            <SmallAdd/>
                        </Icon>
                    }>
                추가
            </Button>

            <Dialog
                open={open}
                onClose={handleClose}
                sx={{
                    "& .MuiDialog-container": {
                        "& .MuiPaper-root": {
                            width: "100%",
                            maxWidth: "760px",
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
                        right: 14,
                        top: 8,
                        opacity: 0.4,
                        width: '32px',
                        height: '32px',
                        '&:hover': { opacity: 1 }
                    }}
                >
                    <Icon sx={{ height: 20, width: 20, fill: 'var(--mui-palette-text-primary)' }}>
                        <Close />
                    </Icon>
                </IconButton>

                <DialogContent>
                    <Box display="flex" justifyContent="space-between" alignItems="center" pb={'10px'}>
                        <UserFilters/>
                    </Box>

                    <Box>
                        <TableContainer sx={{
                                            maxHeight: 360,
                                            overflowY: 'auto',
                                        }}>
                            <Table size="small" className="even-table dense" stickyHeader>
                                <colgroup>
                                    <col width="5%" />
                                    <col />
                                    <col />
                                    <col />
                                </colgroup>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>
                                            {/* "Select All" Checkbox */}
                                            <BpCheckbox
                                                checked={isAllSelected}
                                                onChange={(e) => handleSelectAll(e.target.checked)}
                                            />
                                        </TableCell>
                                        <TableCell>
                                            이름
                                            <CmIcon name="ico_sort" width="16"></CmIcon>
                                        </TableCell>
                                        <TableCell>
                                            아이디
                                            <CmIcon name="ico_sort" width="16"></CmIcon>
                                        </TableCell>
                                        <TableCell>
                                            권한
                                            <CmIcon name="ico_sort" width="16"></CmIcon>
                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows.map((row) => {
                                        const isSelected = selectedRows.includes(row.name);
                                        return (
                                            <TableRow
                                                hover
                                                key={row.name}
                                                sx={{
                                                    backgroundColor: isSelected ? '#F0F6FC' : 'inherit',
                                                }}
                                            >
                                                <TableCell align="center" sx={{ paddingTop: '5px', paddingBottom: '5px' }}>
                                                    <BpCheckbox
                                                        checked={isSelected}
                                                        onChange={() => handleRowSelection(row.name)}
                                                    />
                                                </TableCell>
                                                <TableCell sx={{ paddingTop: '5px', paddingBottom: '5px' }} component="th" scope="row">
                                                    {row.name}
                                                </TableCell>
                                                <TableCell sx={{ paddingTop: '5px', paddingBottom: '5px' }}>{row.email}</TableCell>
                                                <TableCell sx={{ paddingTop: '5px', paddingBottom: '5px' }}>{row.authority}</TableCell>
                                            </TableRow>
                                        );
                                    })}
                                </TableBody>
                            </Table>
                        </TableContainer>
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
