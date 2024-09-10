import type {Components} from '@mui/material/styles';

import type {Theme} from '../types';

export const MuiTableCell = {
    styleOverrides: {
        root: {
            fontSize: '13px',
            color: 'var(--mui-palette-neutral-600)',
            borderBottom: 'var(--TableCell-borderWidth, 1px) solid var(--mui-palette-TableCell-border)',
            padding: '8px 16px',
            minHeight:'40px',
        },
        sizeSmall: {
            padding: '2px 12px',
        },
        paddingCheckbox: {padding: '0 0 0 24px'},
    },
} satisfies Components<Theme>['MuiTableCell'];
