import * as React from 'react';
import {OutlinedInput, Box} from '@mui/material';

export function CustomersFilters(): React.JSX.Element {
    return (
        <OutlinedInput
            defaultValue=""
            fullWidth
            size="small"
            placeholder="검색"
            startAdornment={
                <Box
                    component="img"
                    alt="logo"
                    src="/images/ico_search-16.svg"
                    sx={{display: 'inline-block', height: '16px', width: '16px'}}
                />
            }
            sx={{maxWidth: '240px'}}
        />
    );
}
