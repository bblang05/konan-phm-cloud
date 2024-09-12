import * as React from 'react';
import { FormControl, MenuItem } from '@mui/material';
import Select, { SelectChangeEvent } from "@mui/material/Select";

export function SelectPage(): React.JSX.Element {
    const handleChange = (event: SelectChangeEvent) => {
        setSelectedValue(event.target.value as string);
    };

    const [selected, setSelected] = React.useState(false);
    const [selectedValue, setSelectedValue] = React.useState('1');

    return (
        <FormControl sx={{ minWidth: 80 }}>
            <Select
                sx={{
                    height: '30px',
                    color: '#777D87'
                }}
                value={selectedValue}
                size="small"
                onChange={handleChange}
                displayEmpty
                variant="outlined"
                id="select"
                style={selected ? { backgroundColor: '#EBF1FA' } : {}}
                onOpen={() => setSelected(true)}
                onClose={() => setSelected(false)}
            >
                <MenuItem value="1">10개씩 보기</MenuItem>
                <MenuItem value="2">20개씩 보기</MenuItem>
                <MenuItem value="3">50개씩 보기</MenuItem>
            </Select>
        </FormControl>
    );
}