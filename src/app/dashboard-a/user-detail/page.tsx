'use client';

import * as React from 'react';

import {
    Typography,
    Box,
    Card,
    CardContent,
    Stack,
    Button,
    Dialog,
    DialogTitle,
    DialogContent, DialogContentText, DialogActions, Icon
} from '@mui/material';

import {DetailTableForm} from '@/components/dashboard/user/detail-table-form';
import Edit from "@/components/svgIcon/Edit";
import Delete from "@/components/svgIcon/Delete";


export default function Page(): React.JSX.Element {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Stack spacing={1}>
            <Card variant="outlined">
                <CardContent sx={{padding: '16px !important', height: '64px',}}>
                    <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                        <Box padding="4px 0">
                            <Typography variant="subtitle1">사용자 상세</Typography>
                        </Box>

                        <Box sx={{alignItems: 'center'}} gap="8px" display="flex">
                            <Button variant="contained" color="inherit"
                                    disableElevation sx={{width: '62px', height: '32px'}}
                                    startIcon={
                                        <Icon sx={{width: 14, height: 14}}>
                                            <Edit/>
                                        </Icon>
                                    }>
                                수정
                            </Button>
                            <Button variant="contained" color="inherit"
                                    disableElevation sx={{width: '62px', height: '32px'}}
                                    onClick={handleClickOpen}
                                    startIcon={
                                        <Icon sx={{width: 14, height: 14}}>
                                            <Delete/>
                                        </Icon>
                                    }>
                                삭제
                            </Button>

                            <Dialog
                                open={open}
                                onClose={handleClose}
                                sx={{
                                    "& .MuiDialog-container": {
                                        "& .MuiPaper-root": {
                                            width: "100%",
                                            maxWidth: "450px",
                                        },
                                    },
                                }}
                                aria-labelledby="alert-dialog-title"
                                aria-describedby="alert-dialog-description"
                            >
                                <DialogTitle className="alert-dialog-title"
                                             id="alert-dialog-title">{'사용자 삭제'}</DialogTitle>
                                <DialogContent>
                                    <DialogContentText id="alert-dialog-description">
                                        정말로 사용자를 삭제하시겠습니까?
                                    </DialogContentText>
                                </DialogContent>
                                <DialogActions>
                                    <Button onClick={handleClose} variant="contained" color="inherit">
                                        취소
                                    </Button>
                                    <Button onClick={handleClose} variant="contained">
                                        삭제
                                    </Button>
                                </DialogActions>
                            </Dialog>
                        </Box>
                    </Box>
                </CardContent>
            </Card>

            <DetailTableForm/>
        </Stack>
    );
}
