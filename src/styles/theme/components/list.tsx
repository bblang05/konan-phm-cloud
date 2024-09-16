import type {Components} from '@mui/material/styles';

import type {Theme} from '../types';

export const MuiList = {
    styleOverrides: {
        root: {
            padding: '4px 0',
            fontSize: '13px',
            lineHeight: '16px',
            color: '#777D87',
            minWidth: '10px',
        }
    },
} satisfies Components<Theme>['MuiList'];
