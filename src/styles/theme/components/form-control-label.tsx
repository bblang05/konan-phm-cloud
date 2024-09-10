import type {Components} from '@mui/material/styles';

import type {Theme} from '../types';

export const MuiFormControlLabel = {
    styleOverrides: {
        root: {
            marginLeft: 0,
            marginRight: 0,
        }
    },
} satisfies Components<Theme>['MuiFormControlLabel'];
