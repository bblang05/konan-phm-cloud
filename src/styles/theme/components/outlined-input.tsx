import type {Components} from '@mui/material/styles';

import type {Theme} from '../types';

export const MuiOutlinedInput = {
    styleOverrides: {
        root: {
            borderRadius: '4px',
            textTransform: 'none',
            backgroundColor: '#F7F8FA',
            height: '36px',
            paddingLeft: '10px',
            paddingRight: '10px',
            fontWeight:'400 !important',
            [`& img`]: {
                // marginRight: '4px',
            },
            [`& textarea`]: {
                paddingTop: '8px',
                // backgroundColor: '#F7F8FA',
            },
            [`& select`]: {
                paddingLeft: '8px',
            },
            ['& legend']: {
                display: 'none'
            },
            ['& fieldset']: {
                top: 0
            },
            '&:hover fieldset': {
                borderColor: 'var(--mui-palette-primary-main) !important',
            },
            '&:focus fieldset': {
                borderColor: 'var(--mui-palette-primary-main)',
                // borderWidth: '1px !important'
            },
            // '&:has([readonly])': {
            //     backgroundColor: '#fff',
            //     "& .MuiOutlinedInput-notchedOutline": {
            //         borderColor: "#cecece !important",
            //     },
            // },





            disabled: {
                borderColor: '#D3D7DE',
                // borderWidth: '1px !important',
                '&:hover fieldset': {
                    borderColor: '#f00 !important',
                },
            }
        },

        input: {
            borderRadius: '0',
            padding: '6px 0'
        },
        notchedOutline: {
            borderColor: '#D3D7DE',
            borderWidth: '1px !important',
        },
        sizeSmall: {
            height: '30px',
            fontSize: '13px',
            '& .input': {padding: '10px'},
            svg: {
                width: '16px',
            },
        },

    },
} satisfies Components<Theme>['MuiOutlinedInput'];
