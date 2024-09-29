import type {Components} from '@mui/material/styles';

import type {Theme} from '../types';

export const MuiDialogTitle = {
    styleOverrides: {
        root: {
            padding: '14px 20px',
            fontSize:'14px',
            position: 'relative',
            borderBottom: '0 !important',
            height:'48px',
            '&:after': {
                content: '""',
                display: 'block',
                width: 'calc(100% - 40px)',
                background: '#777D87',
                height: '1px',
                position: 'absolute',
                bottom: '0',
                left: '20px'
            },
            '&.alert-dialog-title&:after': {
                'height': 0,
            },
        },
    },
} satisfies Components<Theme>['MuiDialogTitle'];
