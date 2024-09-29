import type {Components} from '@mui/material/styles';

import type {Theme} from '../types';

export const MuiPopover = {
    styleOverrides: {
        root: {},
        paper: {
            borderRadius: '3px',
        }
    },
} satisfies Components<Theme>['MuiPopover'];
