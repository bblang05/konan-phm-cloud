import type {Components} from '@mui/material/styles';

import type {Theme} from '../types';

export const MuiDialogTitle = {
    styleOverrides: {
        root: {
            position: 'relative',
            padding: '18px 20px 14px 20px',
            '&:after': {
                content: '""',
                display: 'block',
                width: '100%',
                background: '#777D87',
                height: '1px',
                position: 'relative',
                top: '16px',
            },
            '&.alert-dialog-title&:after': {
                'height': 0,
            },
        },
    },
} satisfies Components<Theme>['MuiDialogTitle'];
