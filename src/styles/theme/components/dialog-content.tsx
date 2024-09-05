import type {Components} from '@mui/material/styles';

import type {Theme} from '../types';

export const MuiDialogContent = {
    styleOverrides: {
        root: {
            paddingLeft: '20px',
            paddingRight: '20px',
            paddingBottom: 0,
        },
    },
} satisfies Components<Theme>['MuiDialogContent'];
