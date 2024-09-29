import * as React from 'react';
import { FormControl, Icon, MenuItem, Select, Box } from '@mui/material';
import ArrowBottom from "@/components/svgIcon/ArrowBottom";

export function SelectPage(): React.JSX.Element {
    const [open, setOpen] = React.useState(false);

    const handleIconClick = (event: React.MouseEvent) => {
        event.stopPropagation();
        setOpen((prevOpen) => !prevOpen); // Toggle open state
    };

    return (
        <FormControl sx={{ width: 110, position: 'relative' }}>
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
                    height: '30px',
                    backgroundColor: open ? '#EBF1FA':'var(--mui-palette-background-paper)',
                    borderColor: open ? 'var(--mui-palette-primary-main)' : 'var(--mui-palette-divider)',
                    borderWidth: '1px',
                }}
                defaultValue={1}
                IconComponent={() => null} // Disable default MUI icon
            >
                <MenuItem value={1}>10개씩 보기</MenuItem>
                <MenuItem value={2}>20개씩 보기</MenuItem>
                <MenuItem value={3}>50개씩 보기</MenuItem>
            </Select>
        </FormControl>
    );
}
