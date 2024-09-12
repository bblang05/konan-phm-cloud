import type {Components} from '@mui/material/styles';

import type {Theme} from '../types';

export const MuiSelect = {
    styleOverrides: {
        root: {
            borderRadius: '4px',
            textTransform: 'none',
            backgroundColor: '#F7F8FA',
            paddingLeft: 0,
            '&.selected': {
                fontSize: '13px',
                // backgroundColor: '#f00 !important',
            },
            '&:hover': {
                backgroundColor: '#F2F5FA',
                'fieldset': {
                    borderColor: '#A3B3CC !important',
                }
            },
            '&:focus': {
                backgroundColor: '#F2F5FA',
            },
            '&:active': {
                backgroundColor: '#EBF1FA !important',
                'fieldset': {
                    borderColor: '#6D8FC2 !important',
                }
            },
        },
        outlined: {
            fontSize: '13px',
            paddingLeft: '8px',
        },

    },
} satisfies Components<Theme>['MuiSelect'];
