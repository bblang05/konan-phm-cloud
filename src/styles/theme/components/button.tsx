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
            background: 'transparent linear-gradient(to bottom, #FC9025, #F98024)',
            border: '1px solid #E4721B',
            color: '#fff',
            fill: '#fff',

            '&:hover': {
                background: 'transparent linear-gradient(to bottom, #FE8812, #F56505)',
                border: '1px solid #E0600B',
            },
            '&:active': {
                background: 'transparent linear-gradient(to bottom, #FE8812, #F56505)',
                border: '1px solid #DC4807',
            color: '#fff',
            },
        },
        containedSecondary: {
            background: 'linear-gradient(to bottom, #FAFBFC, #F2F4F7)',
            border: '1px solid #D3D7DE',
            color: '#2668C9',
            fill: '#2668C9',
            '&:hover': {
                background: 'transparent linear-gradient(to bottom, #DEEDFC, #CCDEF6)',
                border: '1px solid #93B9EA',
            },
            '&:active': {
                background: 'transparent linear-gradient(to bottom, #DEEDFC, #CCDEF6)',
                border: '1px solid #2668C9',
            },
        },
        containedInherit: {
            background: 'linear-gradient(to bottom, #FAFBFC, #F2F4F7)',
            border: '1px solid #D3D7DE',
            color: '#777D87',
            fill: '#777D87',
            '&:hover': {
                background: 'transparent linear-gradient(to bottom, #DEEDFC, #CCDEF6)',
                border: '1px solid #93B9EA',
                color: '#2668C9',
                fill: '#2668C9',
            },
            '&:active': {
                background: 'transparent linear-gradient(to bottom, #DEEDFC, #CCDEF6)',
                border: '1px solid #2668C9',
                color: '#2668C9',
            },
        },
        textInherit: {
            border: '1px solid transparent',
            color: '#9EA6B8',
            fill: '#9EA6B8',
            '&:hover': {
                backgroundColor: '#515D78CC', borderColor: '#67718966',
            },
            '&:active': {
                color: '#9EA6B8',
                backgroundColor: '#515D78CC',
                borderColor: '#677189CC',
                fill: '#9EA6B8',
            }
        },
        outlinedInherit: {
            backgroundColor: '#515D7866',
            border: '1px solid #67718966',
            color: '#E1E4EB',
            fill: '#E1E4EB',
            '&:hover': {
                backgroundColor: '#515D78CC', borderColor: '#67718966',
            },
            '&:active': {
                color: '#9EA6B8',
                backgroundColor: '#515D78CC',
                borderColor: '#677189CC',
                'svg': {
                    fill: '#9EA6B8'
                }
            }

        },
        textPrimary: {
            fontWeight: 'normal',
            color: 'var(--mui-palette-text-secondary)',
        },
        startIcon: {
            marginRight: '4px',
        },
        sizeSmall: {padding: '4px 10px', height: '28px', fontSize: '13px',},
        sizeMedium: {padding: '4px 12px', height: '32px', fontSize: '13px',},
        sizeLarge: {padding: '8px 24px', fontSize: '16px', fontWeight: 'bold', height: '40px'},
        textSizeSmall: {padding: '7px 12px'},
        textSizeMedium: {padding: '9px 16px'},
        textSizeLarge: {padding: '12px 16px'},
    },
} satisfies Components<Theme>['MuiButton'];
