import {paperClasses} from '@mui/material/Paper';
import type {Components} from '@mui/material/styles';

import type {Theme} from '../types';

export const MuiCard = {
    styleOverrides: {
        root: ({theme}) => {
            return {
                borderRadius: '6px',
                boxShadow: '0px 5px 10px #22262B26',
                border: '1px solid #E6E8EB',
                [`&.${paperClasses.outlined}`]: {
                    boxShadow: 'none',
                }
            };
        },
    },
} satisfies Components<Theme>['MuiCard'];
