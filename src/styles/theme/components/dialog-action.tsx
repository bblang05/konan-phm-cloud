import type {Components} from '@mui/material/styles';

import type {Theme} from '../types';

export const MuiDialogActions = {
    styleOverrides: {
        root: {
            padding: '18px 20px',
            '& button': {
                padding: '6px 24px',
            }
        },
    },
} satisfies Components<Theme>['MuiDialogActions'];
