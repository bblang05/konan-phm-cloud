import type {Components} from '@mui/material/styles';
import {tableCellClasses} from '@mui/material/TableCell';
import {tableRowClasses} from '@mui/material/TableRow';

import type {Theme} from '../types';

export const MuiTable = {
    styleOverrides: {
        root: {
            [`& .${tableRowClasses.root}:last-child`]: {
                [`& .${tableCellClasses.root}`]: {'--TableCell-borderWidth': 0}
            },

            [`& ${tableRowClasses.root}:nth-of-type(even)`]: {
                backgroundColor: '#F5F6F7',
            },


        // sizeSmall:{
        //     [`& .${tableCellClasses.root}`]: {
        //         height:'10px',
        //         // '--TableCell-height': 0
        //     },
        //
        // }
        },
    },
} satisfies Components<Theme>['MuiTable'];
