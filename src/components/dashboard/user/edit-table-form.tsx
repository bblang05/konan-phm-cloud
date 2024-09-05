'use client';

import * as React from 'react';
import {
    Box,
    Card,
    Button,
    FormControl,
    TableContainer,
    OutlinedInput,
    TableCell,
    TableRow,
    Table,
    TableBody,
    Switch,
    Grid,
    FormGroup,
    FormControlLabel
} from "@mui/material";
import Select, {SelectChangeEvent} from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

export function EditTableForm(): React.JSX.Element {

    const [checked, setChecked] = React.useState(false);

    const toggleChecked = () => {
        setChecked((prev) => !prev);
    };

    const [pageNum, setPageNum] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setPageNum(event.target.value);
    };

    return (
        <Box>
            <Card variant="outlined">
                <Box p="17px 20px">
                    <form
                        onSubmit={(event) => {
                            event.preventDefault();
                        }}
                    >
                        <TableContainer>
                            <Table size="small" sx={{minWidth: 650}} aria-label="simple table" className="form-table">
                                <TableBody>
                                    <TableRow>
                                        <TableCell component="th" scope="row">
                                            이름
                                        </TableCell>
                                        <TableCell>
                                            <form>
                                                <Box display="flex" alignItems="center" gap={1}>
                                                    <Box width={640}>
                                                        <FormControl fullWidth>
                                                            <OutlinedInput
                                                                defaultValue="김코난2"
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

                                    <TableRow>
                                        <TableCell component="th" scope="row">
                                            아이디
                                        </TableCell>
                                        <TableCell>
                                            konan.kim@konantech.com
                                        </TableCell>
                                    </TableRow>

                                    <TableRow>
                                        <TableCell component="th" scope="row">
                                            권한<span className="required"/>
                                        </TableCell>
                                        <TableCell>
                                            <form>
                                                <Box display="flex" alignItems="center" gap={1}>
                                                    <Box width={320}>
                                                        <FormControl fullWidth>
                                                            <Select
                                                                value={pageNum}
                                                                onChange={handleChange}
                                                                displayEmpty
                                                                placeholder="권한 선택"
                                                            >
                                                                <MenuItem value="">관리자</MenuItem>
                                                                <MenuItem value="">운영자</MenuItem>
                                                                <MenuItem value="">사용자</MenuItem>
                                                            </Select>
                                                        </FormControl>
                                                    </Box>
                                                </Box>
                                            </form>
                                        </TableCell>
                                    </TableRow>

                                    <TableRow>
                                        <TableCell component="th" scope="row">
                                            그룹
                                        </TableCell>
                                        <TableCell>
                                            <Box display="flex" alignItems="center" gap={1}>
                                                DevOps
                                            </Box>
                                        </TableCell>
                                    </TableRow>

                                    <TableRow>
                                        <TableCell component="th" scope="row">
                                            설명
                                        </TableCell>
                                        <TableCell>
                                            <form>
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
                                            </form>
                                        </TableCell>
                                    </TableRow>

                                    <TableRow>
                                        <TableCell component="th" scope="row">
                                            사용여부
                                        </TableCell>
                                        <TableCell>

                                            <FormGroup>
                                                <FormControlLabel
                                                    control={<Switch size="small" checked={checked}
                                                                     onChange={toggleChecked}/>}
                                                    label={`${checked ? '활성' : '비활성'}`}
                                                />
                                            </FormGroup>
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
                <Button variant="contained" color="inherit" sx={{width: '74px'}}>
                    취소
                </Button>
                <Button variant="contained" sx={{width: '74px'}}>
                    저장
                </Button>
            </Grid>
        </Box>
    );
}
