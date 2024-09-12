import type {Components} from '@mui/material/styles';

import type {Theme} from '../types';

export const MuiLink = {
    styleOverrides: {
        root: {},
        underlineHover: {
            '&:active': {
                color: 'var(--mui-palette-primary-main)',
                textDecoration: 'none',
            },
        },
    },
    defaultProps: {
        underline: 'hover'
    }
} satisfies Components<Theme>['MuiLink'];
