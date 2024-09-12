import * as React from 'react';
import {useState} from "react";
import {OutlinedInput, Box, IconButton, InputAdornment, Icon} from '@mui/material';
import DeleteCircle from '@/components/svgIcon/DeleteCircle';

export function CustomersFilters(): React.JSX.Element {
    const [value, setValue] = useState<string | null>("");

    return (
        <OutlinedInput
            defaultValue=""
            fullWidth
            size="small"
            placeholder="검색"
            value={value}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}  // Typing event
            endAdornment={
                value ? (
                    <InputAdornment position="end">
                        <IconButton size="small" onClick={() => setValue("")}
                                    sx={{opacity: 0.8, right: '-8px', ':hover': {opacity: 1}}}>
                            <Icon sx={{width: 16, height: 16}}>

                                <DeleteCircle/>
                            </Icon>
                        </IconButton>
                    </InputAdornment>
                ) : null
            }
            startAdornment={
                <InputAdornment position="start">
                    <Box
                        component="img"
                        alt="logo"
                        src="/images/ico_search-16.svg"
                        sx={{display: 'inline-block', height: '16px', width: '16px'}}
                    />
                </InputAdornment>
            }
            sx={{maxWidth: '240px'}}
        />
    );
}
