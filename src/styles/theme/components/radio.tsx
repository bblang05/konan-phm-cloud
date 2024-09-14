import type {Components} from '@mui/material/styles';

import type {Theme} from '../types';

export const MuiRadio = {
    styleOverrides: {
        root: {
            padding: 0,
            borderRadius: '50%',
            width: 16,
            height: 16,
            backgroundColor: '#D3D7DE',

            'input:hover ~ &': {
                backgroundColor: '#bac0cd',
            },
            'input:disabled ~ &': {
                boxShadow: 'none',
                background: 'rgba(206,217,224,.5)',
            },
            '&.Mui-checked': {
                backgroundColor: '#2668C9',
                '&::before': {
                    display: 'block',
                    width: 16,
                    height: 16,
                    backgroundColor:'#fff',
                    backgroundImage: 'radial-gradient(#fff,#fff 28%,transparent 32%)',
                    content: '""',
                },
                'input:hover ~ &': {
                    backgroundColor: '#106ba3',
                },
            },
        },
    },
} satisfies Components<Theme>['MuiRadio'];
