import type {Components} from '@mui/material/styles';

import type {Theme} from '../types';

export const MuiDialogTitle = {
    styleOverrides: {
        root: {
            position: 'relative',
            padding: '17px 20px 14px 20px',
            fontSize:'14px',
            '&:after': {
                content: '""',
                display: 'block',
                width: '100%',
                background: '#777D87',
                height: '1px',
                position: 'relative',
                top: '14px',
            },
            '&.alert-dialog-title&:after': {
                'height': 0,
            },
        },
    },
} satisfies Components<Theme>['MuiDialogTitle'];
