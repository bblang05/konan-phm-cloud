'use client';

import * as React from 'react';

import {
    Typography,
    Box,
    Card,
    CardContent,
    Link,
    Stack,
    Button,
    Dialog,
    DialogTitle,
    DialogContent, DialogContentText, DialogActions
} from '@mui/material';

import {DetailTableForm} from '@/components/dashboard/user/detail-table-form';


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
                <CardContent sx={{padding: '20px !important'}}>
                    <Box
                        sx={{
                            backgroundColor: 'var(--mui-palette-background-paper)',
                        }}
                    >
                        <Stack direction="row"
                               sx={{alignItems: 'center', justifyContent: 'space-between'}}>
                            <Stack sx={{alignItems: 'center'}} direction="row">
                                <Typography variant="subtitle1">사용자 상세</Typography>
                            </Stack>

                            <Stack sx={{alignItems: 'center'}} direction="row" gap={1}>
                                <Button
                                    variant="contained"
                                    component={Link}
                                    disableElevation
                                    startIcon={
                                        <Box
                                            component="img"
                                            alt="edit"
                                            src="/images/ico_edit-nor.svg"
                                            sx={{display: 'inline-block', height: '14px', width: '14px'}}
                                        />
                                    }
                                    color="inherit"
                                    size="small"
                                >
                                    수정
                                </Button>
                                <Button
                                    variant="contained"
                                    component={Link}
                                    disableElevation
                                    onClick={handleClickOpen}
                                    startIcon={
                                        <Box
                                            component="img"
                                            alt="delete"
                                            src="/images/ico_delete-nor.svg"
                                            sx={{display: 'inline-block', height: '14px', width: '14px'}}
                                        />
                                    }
                                    color="inherit"
                                    size="small"
                                >
                                    삭제
                                </Button>

                                <Dialog
                                    open={open}
                                    onClose={handleClose}
                                    sx={{
                                        "& .MuiDialog-container": {
                                            "& .MuiPaper-root": {
                                                width: "100%",
                                                maxWidth: "450px",  // Set your width here
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

                            </Stack>
                        </Stack>
                    </Box>
                </CardContent>
            </Card>

            <DetailTableForm/>
        </Stack>
    );
}
