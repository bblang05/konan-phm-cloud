import type {Components} from '@mui/material/styles';

import type {Theme} from '../types';

export const MuiListItem = {
    styleOverrides: {
        root: {
            fontSize: '13px',
            lineHeight: '16px',
            color: '#777D87'
        }
    },
} satisfies Components<Theme>['MuiListItem'];
