import type {Components} from '@mui/material/styles';

import type {Theme} from '../types';

export const MuiToggleButton = {
    styleOverrides: {
        root: {
            background: '#E9EDF5',
            borderRadius: '3px',
            color: '#7B828C',
            padding: '3px 12px',
            border: 'none',
            ['&:hover']: {
                background: '#d2dae6',

            },
            '&.Mui-selected': {
                background: '#2668C9',
                borderRadius: '3px',
                color: '#fff',
                fontSize: '13px',
                ['&:hover']: {
                    background: '#1855ae',

                },
            },
            '&.MuiToggleButtonGroup-lastButton': {
                marginLeft: 0,
            }
        },
    },
} satisfies Components<Theme>['MuiToggleButton'];
