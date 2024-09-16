import * as React from 'react';
import {FormControl, Icon, MenuItem, Select} from '@mui/material';
import ArrowBottom from "@/components/svgIcon/ArrowBottom";

export function SelectDayOption(): React.JSX.Element {
    const [open, setOpen] = React.useState(false);

    return (
        <FormControl fullWidth>
            <Select
                id="day"
                fullWidth
                IconComponent={() => (
                    <Icon sx={{
                        width: 12,
                        height: 12,
                        fill: '#777D87',
                        transition: 'transform 0.3s ease',
                        transform: open ? 'rotate(180deg)' : 'rotate(0deg)'
                    }}>
                        <ArrowBottom/>
                    </Icon>
                )}
                displayEmpty
                size="small"
                variant="outlined"
                style={open ? {backgroundColor: '#EBF1FA'} : {}}
                open={open}
                onOpen={() => setOpen(true)}
                onClose={() => setOpen(false)}
                sx={{
                    height: '30px',
                    backgroundColor: 'var(--mui-palette-background-paper)',
                }}
                defaultValue={1}
                MenuProps={{
                    PaperProps: {
                        sx: {
                            width: '54px',
                        },
                    },
                }}
            >
                <MenuItem value={0}>일</MenuItem>
                <MenuItem value={1}>월</MenuItem>
            </Select>
        </FormControl>
    );
}