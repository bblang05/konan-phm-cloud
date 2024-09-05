import type {Components} from '@mui/material/styles';

import type {Theme} from '../types';

export const MuiSwitch = {
    styleOverrides: {
        root: {
            width: 40,
            height: 22,
            padding: 0,
            marginLeft: '11px',
            marginRight: '8px',
            '+ .MuiFormControlLabel-label': {
                fontSize: '13px',
            },
            '& .MuiSwitch-switchBase': {
                padding: 0,
                margin: 3,
                transitionDuration: '300ms',
                '&.Mui-checked': {
                    transform: 'translateX(16px)',
                    color: '#fff',
                    '& + .MuiSwitch-track': {
                        backgroundColor: '#65C466',
                        opacity: 1,
                        border: 0,
                    },
                    '&.Mui-disabled + .MuiSwitch-track': {
                        opacity: 0.5,
                    },
                },
                '&.Mui-focusVisible .MuiSwitch-thumb': {
                    color: '#33cf4d',
                    border: '6px solid #fff',
                },
                '&.Mui-disabled + .MuiSwitch-track': {
                    opacity: 0.7,
                },
            },
            '& .MuiSwitch-thumb': {
                boxSizing: 'border-box',
                width: 16,
                height: 16,
                boxShadow: '0px 2px 4px #22262B33',
            },
            '& .MuiSwitch-track': {
                borderRadius: 26 / 2,
                backgroundColor: '#D3D7DE',
                opacity: 1,
            },
        },
    },
} satisfies Components<Theme>['MuiMenuItem'];
