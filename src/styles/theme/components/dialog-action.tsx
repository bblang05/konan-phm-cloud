import type {Components} from '@mui/material/styles';

import type {Theme} from '../types';

export const MuiDialogActions = {
    styleOverrides: {
        root: {
            padding: '0 20px 18px',
            '& button': {
                padding: '6px 24px',
            }
        },
    },
} satisfies Components<Theme>['MuiDialogActions'];
