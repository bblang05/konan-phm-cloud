import type {Components} from '@mui/material/styles';

import type {Theme} from '../types';

export const MuiChip = {
    styleOverrides: {
        root: {
            fontSize: '12px',
            borderRadius: '3px',
            height: '18px',
            backgroundColor: 'rgba(139, 153, 173, 0.2)',
        },
        label: {
            padding: '0 6px',
            color: '#748399',
            fontWeight: '500',
        },
        colorPrimary: {
            '& .MuiChip-label': {
                color: '#2668C9',
            },
            backgroundColor: 'rgba(38, 104, 201, 0.17)',
        }
    },
} satisfies Components<Theme>['MuiChip'];
