import type {Components} from '@mui/material/styles';

import type {Theme} from '../types';

export const MuiSelect = {
    styleOverrides: {
        root: {
            borderRadius: '4px',
            textTransform: 'none',
            backgroundColor: '#F7F8FA',
            paddingLeft: 0,
            height: '30px',
            '&.selected': {
                fontSize: '13px',
            },
        },
        outlined: {
            fontSize: '13px',
            paddingLeft: '8px',
        },

    },
} satisfies Components<Theme>['MuiSelect'];
