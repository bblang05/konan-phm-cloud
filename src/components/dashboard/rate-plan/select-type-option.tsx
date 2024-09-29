import * as React from 'react';
import {Box, FormControl, Icon, MenuItem, Select} from '@mui/material';
import ArrowBottom from "@/components/svgIcon/ArrowBottom";

export function SelectTypeOption(): React.JSX.Element {
    const [open, setOpen] = React.useState(false);

    const handleIconClick = (event: React.MouseEvent) => {
        event.stopPropagation();
        setOpen((prevOpen) => !prevOpen); // Toggle open state
    };

    return (
        <FormControl fullWidth>
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
                    height: '30px',
                    backgroundColor: 'var(--mui-palette-background-paper)',
                    borderColor: open ? 'var(--mui-palette-primary-main)' : 'var(--mui-palette-divider)',
                    transition: 'border-color 0.3s ease, border-width 0.3s ease',
                }}
                defaultValue={1}
                IconComponent={() => null} // Disable default MUI icon
            >
                <MenuItem value={0}>MB</MenuItem>
                <MenuItem value={1}>GB</MenuItem>
            </Select>
        </FormControl>
    );
}