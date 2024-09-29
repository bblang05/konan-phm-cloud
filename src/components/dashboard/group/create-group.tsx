'use client';

import * as React from 'react';
import {
    Box,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    FormControl, Icon,
    IconButton,
    OutlinedInput,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableRow,
} from '@mui/material';
import SmallAdd from "@/components/svgIcon/SmallAdd";
import Close from "@/components/svgIcon/Close";

export function CreateGroup(): React.JSX.Element {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Box>
            <Button variant="contained" color="primary"
                    size="small"
                    disableElevation
                    onClick={handleClickOpen}
                    sx={{fontSize: '12px', height: '26px', lineHeight: 'inherit'}}
                    startIcon={
                        <Icon sx={{width: 12, height: 12}}>
                            <SmallAdd/>
                        </Icon>
                    }>
                생성
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
                <DialogTitle id="alert-dialog-title">{'그룹 생성'}</DialogTitle>
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
                        '&:hover': {opacity: 1}
                    }}
                >
                    <Icon sx={{height: 20, width: 20, fill: 'var(--mui-palette-text-primary)',}}>
                        <Close/>
                    </Icon>
                </IconButton>
                <DialogContent>
                    <Box>
                        <TableContainer>
                            <Table size="small" sx={{minWidth: 650}} aria-label="simple table"
                                   className="form-table">
                                <TableBody>
                                    <TableRow>
                                        <TableCell component="th" scope="row" width={160}>
                                            그룹 명
                                        </TableCell>
                                        <TableCell>
                                            <form>
                                                <Box display="flex" alignItems="center" gap={1}>
                                                    <Box width={500}>
                                                        <FormControl fullWidth>
                                                            <OutlinedInput
                                                                required
                                                                type="id"
                                                                size="small"
                                                            />
                                                        </FormControl>
                                                    </Box>
                                                </Box>
                                            </form>
                                        </TableCell>
                                    </TableRow>

                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} variant="contained" disableElevation color="inherit">
                        취소
                    </Button>
                    <Button onClick={handleClose} variant="contained" disableElevation color="primary">
                        생성
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
}
