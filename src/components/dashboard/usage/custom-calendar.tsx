import React, {useState} from 'react';
import {
    Box,
    Button,
    Grid,
    IconButton,
    OutlinedInput,
    InputAdornment,
    DialogActions,
    Typography,
    Popper,
} from '@mui/material';
import CalendarArrowRight from "@/components/svgIcon/CalendarArrowRight";
import CalendarArrowLeft from "@/components/svgIcon/CalendarArrowLeft";
import Calendar from "@/components/svgIcon/Calendar";
import dayjs, {Dayjs} from 'dayjs';

const weekDays = ['일', '월', '화', '수', '목', '금', '토'];

function CustomCalendar() {
    const today = dayjs();

    const [currentDate, setCurrentDate] = useState<Dayjs>(today);
    const [selectedDate, setSelectedDate] = useState<Dayjs | null>(today);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleDateClick = (day: number) => {
        setSelectedDate(currentDate.date(day));
        setAnchorEl(null);
    };

    const handleCalendarIconClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };

    const open = Boolean(anchorEl);

    const handlePrevMonth = () => {
        setCurrentDate(currentDate.subtract(1, 'month'));
    };

    const handleNextMonth = () => {
        setCurrentDate(currentDate.add(1, 'month'));
    };

    const handlePrevYear = () => {
        setCurrentDate(currentDate.subtract(1, 'year'));
    };

    const handleNextYear = () => {
        setCurrentDate(currentDate.add(1, 'year'));
    };

    const renderDays = () => {
        const startOfMonth = currentDate.startOf('month');
        const endOfMonth = currentDate.endOf('month');
        const startDay = startOfMonth.day();
        const daysInMonth = endOfMonth.date();
        const days = [];

        for (let i = 0; i < startDay; i++) {
            days.push(<Box key={`empty-${i}`} sx={{minWidth: 40, height: 40}}/>);
        }

        // 현재 날짜
        for (let day = 1; day <= daysInMonth; day++) {
            days.push(
                <Box
                    key={day}
                    sx={{
                        width: 24,
                        height: 24,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        cursor: 'pointer',
                        backgroundColor: selectedDate?.date() === day ? '#2668C9' : 'transparent',
                        color: selectedDate?.date() === day ? '#fff' : '#555759',
                        borderRadius: '5px',
                        '&:hover': {
                            backgroundColor: selectedDate?.date() === day ? '#F2F5FA' : '#f2f4fa',
                        },
                    }}
                    onClick={() => handleDateClick(day)}
                >
                    {day}
                </Box>
            );
        }
        return days;
    };

    return (
        <Box sx={{width: 210}}>
            {/* 달력 OutlinedInput */}
            <OutlinedInput
                fullWidth
                size="small"
                value={selectedDate ? selectedDate.format('YYYY-MM-DD') : ''}
                placeholder="날짜 선택"
                sx={{fontWeight: '400', color: '#555759'}}
                readOnly
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton onClick={handleCalendarIconClick} edge="end" sx={{
                            borderRadius: '0 4px 4px 0',
                            marginRight: '-10px',
                            fill: open ? '#2668C9' : '#777D87',
                            border: open ? '1px solid #2668C9' : '1px solid #D3D7DE',
                            borderLeft: '1px solid #D3D7DE !important',
                            zIndex: open ? '1' : '',
                            background: open ? 'transparent linear-gradient(to bottom, #DEEDFC, #CCDEF6)' : 'transparent linear-gradient(to bottom, #FAFBFC, #F2F4F7)',
                            '&:hover': {
                                fill: '#2668C9',
                                background: 'transparent linear-gradient(to bottom, #DEEDFC, #CCDEF6)',
                            }
                        }}>
                            <Calendar/>
                        </IconButton>
                    </InputAdornment>
                }
            />

            <Popper open={open} anchorEl={anchorEl} placement="bottom-end">
                <Box
                    sx={{
                        padding: "12px",
                        border: '1px solid #E6E8EB',
                        borderRadius: '5px',
                        width: '216px',
                        backgroundColor: '#fff',
                        textAlign: 'center',
                        boxShadow: '0px 4px 8px rgba(34, 38, 43, 0.15)',
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            mb: "10px",
                        }}
                    >
                        <Box gap="4px" display="flex">
                            <IconButton size="small" color="inherit" sx={{
                                width: 20,
                                height: 20,
                                border: '1px solid #67718980',
                                fill: '#6580A8',
                            }} onClick={handlePrevYear}>
                                <CalendarArrowLeft/>
                            </IconButton>
                            <IconButton size="small" color="inherit" sx={{
                                width: 20,
                                height: 20,
                                border: '1px solid #67718980',
                                fill: '#6580A8',
                            }} onClick={handlePrevMonth}>
                                <CalendarArrowLeft/>
                            </IconButton>
                        </Box>
                        <Typography variant="body2" fontWeight="500">
                            {currentDate.format('YYYY년 M월')}
                        </Typography>
                        <Box gap="4px" display="flex">
                            <IconButton size="small" color="inherit" sx={{
                                width: 20,
                                height: 20,
                                border: '1px solid #67718980',
                                fill: '#6580A8',
                            }} onClick={handleNextMonth}>
                                <CalendarArrowRight/>
                            </IconButton>
                            <IconButton size="small" color="inherit" sx={{
                                width: 20,
                                height: 20,
                                border: '1px solid #67718980',
                                fill: '#6580A8',
                            }} onClick={handleNextYear}>
                                <CalendarArrowRight/>
                            </IconButton>
                        </Box>
                    </Box>

                    {/* 요일 */}
                    <Grid container spacing={0} sx={{mb: "2px"}}>
                        {weekDays.map((day) => (
                            <Grid item xs={1.71} key={day} sx={{textAlign: 'center'}}>
                                <Typography variant="body2" sx={{color: '#7B828C'}}>
                                    {day}
                                </Typography>
                            </Grid>
                        ))}
                    </Grid>

                    {/* 달력 Days */}
                    <Grid container spacing={0} mb={1}>
                        {renderDays().map((day, index) => (
                            <Grid item xs={1.71} key={index}
                                  sx={{textAlign: 'center', marginBottom: '5px', height: '24px', overflow: 'hidden'}}>
                                {day}
                            </Grid>
                        ))}
                    </Grid>

                    {/* 하단 Action Button */}
                    <DialogActions
                        sx={{
                            padding: '3px 0',
                            justifyContent: 'end',
                            '& button': {
                                minWidth: '54px',
                                height: '26px',
                                fontSize: '12px',
                                marginLeft: '4px',
                                padding: '4px 16px',
                            },
                        }}
                    >
                        <Button
                            variant="contained"
                            color="inherit"
                            onClick={() => setAnchorEl(null)}
                        >
                            취소
                        </Button>
                        <Button
                            color="primary"
                            variant="contained"
                            size="small"
                            onClick={() => setAnchorEl(null)}
                        >
                            저장
                        </Button>
                    </DialogActions>
                </Box>
            </Popper>
        </Box>
    );
}

export default CustomCalendar;
