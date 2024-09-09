import type {Components} from '@mui/material/styles';

import type {Theme} from '../types';

export const MuiButton = {
    styleOverrides: {
        root: {
            borderRadius: '3px',
            textTransform: 'none',
            boxShadow: 'none',
        },
        containedPrimary: {
            background: 'linear-gradient(to bottom, #FC9025, #F98024)',
            border: '1px solid #E4721B',
        },
        containedSecondary: {
            background: 'linear-gradient(to bottom, #FAFBFC, #F2F4F7)',
            border: '1px solid #D3D7DE',
            color: '#2668C9',
        },
        containedInherit: {
            background: 'linear-gradient(to bottom, #FAFBFC, #F2F4F7)',
            border: '1px solid #D3D7DE',
            color: '#777D87',
        },
        textPrimary: {
          fontWeight: 'normal',
            color: '#555759',
        },
        startIcon: {
            marginRight: '4px',
        },
        sizeSmall: {padding: '4px 10px', height: '28px', fontSize: '13px',},
        sizeMedium: {padding: '4px 12px', height: '30px'},
        sizeLarge: {padding: '8px 24px', fontSize: '16px', fontWeight: 'bold', height: '40px'},
        textSizeSmall: {padding: '7px 12px'},
        textSizeMedium: {padding: '9px 16px'},
        textSizeLarge: {padding: '12px 16px'},
    },
} satisfies Components<Theme>['MuiButton'];
