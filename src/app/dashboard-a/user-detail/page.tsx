'use client';

import '@/styles/dashboard.scss'; // css 파일

import * as React from 'react';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    Icon,
    Typography,
} from '@mui/material';

import { DetailTableForm } from '@/components/dashboard/user/detail-table-form';
import Delete from '@/components/svgIcon/Delete';
import Edit from '@/components/svgIcon/Edit';

export default function Page(): React.JSX.Element {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <div className="header-box">
                <h4>사용자 상세</h4>
                <div className="btn__group">
                    <Button
                        variant="contained"
                        color="inherit"
                        disableElevation
                        startIcon={
                            <Icon sx={{ width: 14, height: 14 }}>
                                <Edit />
                            </Icon>
                        }
                    >
                        수정
                    </Button>
                    <Button
                        variant="contained"
                        color="inherit"
                        disableElevation
                        onClick={handleClickOpen}
                        startIcon={
                            <Icon sx={{ width: 14, height: 14 }}>
                                <Delete />
                            </Icon>
                        }
                    >
                        삭제
                    </Button>

                    <Dialog
                        open={open}
                        onClose={handleClose}
                        sx={{
                            '& .MuiDialog-container': {
                                '& .MuiPaper-root': {
                                    width: '100%',
                                    maxWidth: '450px',
                                },
                            },
                        }}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                    >
                        <DialogContent>
                            <DialogContentText sx={{ marginBottom: '12px' }}>
                                <Typography variant="subtitle2">사용자 삭제</Typography>
                            </DialogContentText>
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
                </div>
            </div>

            <DetailTableForm />
        </>
    );
}
