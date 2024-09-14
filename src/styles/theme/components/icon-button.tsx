import type {Components} from '@mui/material/styles';

import type {Theme} from '../types';

export const MuiIconButton = {
    styleOverrides: {
        root: {
            width: 30,
            height: 30,
            borderRadius: '3px',
            textTransform: 'none',
            '&.outlined': {
                border: '1px solid #ddd',
            },
            '&:hover': {
                background: 'none',
            },
            ":disabled": {
                svg: {
                    opacity: '0.5'
                }
            }
        },
        colorInherit: {
            border: '1px solid #D3D7DE',
            borderRadius: '3px',
            backgroundColor: '#fff',
            fill: '#777D87',

            '&:hover': {
                background: '#F2F5FA',
                borderColor: '#A3B3CC',
            },
            '&:active': {
                background: '#EBF1FA',
                borderColor: '#6D8FC2',
                fill: '#2668C9',
            },
        }
    },
} satisfies Components<Theme>['MuiIconButton'];
