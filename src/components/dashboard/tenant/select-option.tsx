import * as React from 'react';
import {FormControl, Icon, MenuItem, Select} from '@mui/material';
import ArrowBottom from "@/components/svgIcon/ArrowBottom";

export function SelectOption(): React.JSX.Element {
    const [open, setOpen] = React.useState(false);

    return (
        <FormControl sx={{width: 54}}>
            <Select
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
                    height: '26px',
                    backgroundColor: 'var(--mui-palette-background-paper)',
                }}
                defaultValue={1}
            >
                <MenuItem value="1">1</MenuItem>
                <MenuItem value="2">2</MenuItem>
                <MenuItem value="3">3</MenuItem>
                <MenuItem value="3">4</MenuItem>
            </Select>
        </FormControl>
    );
}