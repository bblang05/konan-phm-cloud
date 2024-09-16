import type { Components } from '@mui/material/styles';
import { tableCellClasses } from '@mui/material/TableCell';

import type { Theme } from '../types';

export const MuiTableHead = {
  styleOverrides: {
    root: {
      [`& .${tableCellClasses.root}`]: {
        height: '32px',
        backgroundColor: '#E9EDF5',
        verticalAlign:'bottom',
        color: '#7B828C',
        fontSize: '12px',
        padding: '3px 16px',
        borderBottom: '1px solid #CED1D6',
      },
    },
  },
} satisfies Components<Theme>['MuiTableHead'];
