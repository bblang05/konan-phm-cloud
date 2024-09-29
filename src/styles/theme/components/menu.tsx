import type {Components} from '@mui/material/styles';

import type {Theme} from '../types';
import {menuItemClasses} from "@mui/material/MenuItem";

export const MuiMenuItem = {
    styleOverrides: {
        root: {
            fontSize: '13px',
            padding: '6px 4px 6px 12px',
            minHeight: '30px',
            minWidth: '50px',
            color: 'var(--mui-palette-neutral-800)',
            '&.Mui-selected': {
                backgroundColor: '#F0F6FC',
            },
            [`& .${menuItemClasses.root}`]: {
                icon: {
                    minWidth: '0',
                },
            },
            '&:hover': {
                backgroundColor: '#F0F2F5',
            },
        },
    },
} satisfies Components<Theme>['MuiMenuItem'];
