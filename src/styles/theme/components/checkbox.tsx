import type {Components} from '@mui/material/styles';

import type {Theme} from '../types';

export const MuiCheckbox = {
    styleOverrides: {
        root: {
            padding: 0,
        },
    },
} satisfies Components<Theme>['MuiCheckbox'];
