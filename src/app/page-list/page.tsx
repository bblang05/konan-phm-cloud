import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';

export default function Page() {
    return (
        <Box p={3}>
            <Box mb={2}>
                <Typography variant="h5">📄 페이지 리스트</Typography>
            </Box>
            <TableContainer component={Card}>
                <Table sx={{minWidth: 650}} aria-label="simple table">
                    <colgroup>
                        <col width="20%"/>
                        <col width=""/>
                        <col/>
                    </colgroup>
                    <TableHead>
                        <TableRow>
                            <TableCell>화면명(링크)</TableCell>
                            <TableCell>설명</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell component="th" scope="row">
                                <Link href="/auth/sign-in">시스템 로그인</Link>
                            </TableCell>
                            <TableCell>사용자 로그인 화면</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell component="th" scope="row">
                                <Link href="/auth/password-error">비밀번호 에러</Link>
                            </TableCell>
                            <TableCell></TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell component="th" scope="row">
                                <Link href="/auth/change-password">비밀번호 변경</Link>
                            </TableCell>
                            <TableCell></TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell component="th" scope="row">
                                <Link href="/auth/first-login">최초 로그인</Link>
                            </TableCell>
                            <TableCell></TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell component="th" scope="row">
                                <Link href="/auth/change-password-day">비밀번호 변경주기 경과(90일)</Link>
                            </TableCell>
                            <TableCell></TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell component="th" scope="row">
                                <Link href="/dashboard/user-list">사용자 관리-사용자 목록</Link>
                            </TableCell>
                            <TableCell></TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell component="th" scope="row">
                                <Link href="/dashboard/user-create">사용자 관리-사용자 생성</Link>
                            </TableCell>
                            <TableCell></TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell component="th" scope="row">
                                <Link href="/dashboard/user-detail">사용자 관리-사용자 상세</Link>
                            </TableCell>
                            <TableCell></TableCell>
                        </TableRow>

                        {/**/}
                        <TableRow>
                            <TableCell component="th" scope="row">
                                <Link href="/dashboard/user-edit">사용자 관리-사용자 수정</Link>
                            </TableCell>
                            <TableCell></TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell component="th" scope="row">
                                <Link href="/dashboard/group-setting">그룹관리</Link>
                            </TableCell>
                            <TableCell></TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell component="th" scope="row">
                                <Link href="/dashboard/billing-setting">빌링관리-빌링목록</Link>
                            </TableCell>
                            <TableCell></TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell component="th" scope="row">
                                <Link href="/dashboard/group-setting">테넌트관리-그룹 관리</Link>
                            </TableCell>
                            <TableCell></TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell component="th" scope="row">
                                <Link href="/dashboard/tenant-create">테넌트관리-테넌트 생성</Link>
                            </TableCell>
                            <TableCell>수정</TableCell>
                        </TableRow>

                        {/* 2차*/}
                        <TableRow>
                            <TableCell component="th" scope="row">
                                <Link href="/auth/sign-up">회원가입</Link>
                            </TableCell>
                            <TableCell>2차 추가</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell component="th" scope="row">
                                <Link href="/dashboard/usage-setting">사용량 관리</Link>
                            </TableCell>
                            <TableCell>2차 추가</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell component="th" scope="row">
                                <Link href="/dashboard/rate-plan-detail">요금제 상세</Link>
                            </TableCell>
                            <TableCell>2차 추가</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell component="th" scope="row">
                                <Link href="/dashboard/default-rate-plan-edit">요금제 수정-기본 서비스</Link>
                            </TableCell>
                            <TableCell>2차 추가</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell component="th" scope="row">
                                <Link href="/dashboard/additional-rate-plan-edit">요금제 수정-추가 서비스</Link>
                            </TableCell>
                            <TableCell>2차 추가</TableCell>
                        </TableRow>

                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
}
