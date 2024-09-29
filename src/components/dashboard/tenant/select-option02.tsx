import * as React from 'react';
import {FormControl, Icon, MenuItem, Select, Box} from '@mui/material';
import ArrowBottom from "@/components/svgIcon/ArrowBottom";

export function SelectOption02(): React.JSX.Element {
    const [open, setOpen] = React.useState(false);

    const handleIconClick = (event: React.MouseEvent) => {
        event.stopPropagation();
        setOpen((prevOpen) => !prevOpen); // Toggle open state
    };


    return (
        <FormControl sx={{width: 54}}>
            {/* Icon Container */}
            <Box
                onClick={handleIconClick}
                sx={{
                    position: 'absolute',
                    right: 8,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    cursor: 'pointer',
                    zIndex: 1,
                    pointerEvents: 'auto',
                }}
            >
                <Icon
                    sx={{
                        width: 12,
                        height: 12,
                        fill: '#777D87',
                        transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
                    }}
                >
                    <ArrowBottom />
                </Icon>
            </Box>

            {/* Select Component */}
            <Select
                fullWidth
                displayEmpty
                size="small"
                variant="outlined"
                style={open ? { backgroundColor: '#EBF1FA' } : {}}
                open={open}
                onOpen={() => setOpen(true)}
                onClose={() => setOpen(false)}
                sx={{
                    textAlign:'left',
                    height: '24px',
                    backgroundColor: 'var(--mui-palette-background-paper)',
                    borderColor: open ? 'var(--mui-palette-primary-main)' : 'var(--mui-palette-divider)',
                    transition: 'border-color 0.3s ease, border-width 0.3s ease',
                }}
                defaultValue={4}
                IconComponent={() => null} // Disable default MUI icon
            >
                <MenuItem value="1">1</MenuItem>
                <MenuItem value="2">2</MenuItem>
                <MenuItem value="3">3</MenuItem>
                <MenuItem value="4">4</MenuItem>
            </Select>

        </FormControl>
    );
}