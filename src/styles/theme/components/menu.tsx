import type {Components} from '@mui/material/styles';

import type {Theme} from '../types';
import {menuItemClasses} from "@mui/material/MenuItem";

export const MuiMenuItem = {
    styleOverrides: {
        root: {
            fontSize: '13px',
            padding: '6px 4px 6px 12px',
            minHeight: '30px',
            minWidth: '70px',
            color: 'var(--mui-palette-neutral-800)',

            [`& .${menuItemClasses.root}`]: {
                icon: {

                    minWidth: '0',
                },
            },
        },
    },
} satisfies Components<Theme>['MuiMenuItem'];
