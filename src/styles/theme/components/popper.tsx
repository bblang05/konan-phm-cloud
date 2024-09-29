import type { Components } from '@mui/material/styles';

import type { Theme } from '../types';

export const MuiPopper = {
  styleOverrides: {
    root: {
      marginTop: '8px !important',
        borderRadius: '3px',
    },
  },
} satisfies Components<Theme>['MuiPopper'];
