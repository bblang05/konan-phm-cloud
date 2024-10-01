import type {Components} from '@mui/material/styles';

import type {Theme} from '../types';

export const MuiDialogContent = {
    styleOverrides: {
        root: {
            padding: '16px 20px 20px 20px !important',
        },
    },
} satisfies Components<Theme>['MuiDialogContent'];
