'use client';

import * as React from 'react';
import {
    Box,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    FormControl,
    IconButton,
    OutlinedInput,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableRow,
} from '@mui/material';

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
            <Button
                variant="contained"
                disableElevation
                onClick={handleClickOpen}
                startIcon={
                    <Box
                        component="img"
                        alt="logo"
                        src="/images/ico_add-14.svg"
                        sx={{display: 'inline-block', height: '14px', width: '14px'}}
                    />
                }
                color="primary"
                size="small"
            >
                생성
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
                <DialogTitle id="alert-dialog-title">{'그룹 생성'}</DialogTitle>
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
                    <Button onClick={handleClose} variant="contained" color="inherit">
                        취소
                    </Button>
                    <Button onClick={handleClose} variant="contained">
                        생성
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
}
