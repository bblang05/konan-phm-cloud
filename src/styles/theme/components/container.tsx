import type {Components} from '@mui/material/styles';

import type {Theme} from '../types';

export const MuiContainer = {
    styleOverrides: {
        root: {},
        maxWidthLg: {
            minWidth: '1400px'
        },
        maxWidthMd: {
            minWidth: '1200px'
        },
        maxWidthSm: {
            minWidth: '1400px'
        }
    },
} satisfies Components<Theme>['MuiContainer'];
