import type {Components} from '@mui/material/styles';

import type {Theme} from '../types';

export const MuiIconButton = {
    styleOverrides: {
        root: {
            borderRadius: '3px',
            textTransform: 'none',
            '&.outlined': {
                border: '1px solid #ddd',
            },
            '&:hover': {
                background: 'none',
            },
        },
    },
} satisfies Components<Theme>['MuiIconButton'];
