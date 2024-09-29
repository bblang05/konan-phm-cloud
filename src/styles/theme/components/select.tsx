import type { Components } from '@mui/material/styles';

import type { Theme } from '../types';

export const MuiSelect = {
  styleOverrides: {
    root: {
      borderRadius: '4px',
      textTransform: 'none',
      backgroundColor: '#F7F8FA',
      paddingLeft: 0,
      borderWidth: '1px',
      '.MuiOutlinedInput-notchedOutline': {
        border: '1px',
      },
      '&:selected': {
        fontSize: '13px',
        alignSelf: 'end',
        borderWidth: '1px',
        borderColor: '#f00',
        fieldset: {
          borderColor: '#6D8FC2 !important',
          borderWidth: '3px !important',
        },
      },
      '&:hover': {
        backgroundColor: '#F2F5FA',
        fieldset: {
          borderColor: '#A3B3CC !important',
        },
      },
      '&:focus': {
        backgroundColor: '#F2F5FA',
        borderWidth: '10px !important',
        fieldset: {
          borderColor: '#6D8FC2 !important',
          borderWidth: '10px !important',
        },
      },
      '&:active': {
        borderWidth: '1px',
        backgroundColor: '#EBF1FA !important',
        svg: {
          transform: 'rotate(180deg)',
        },
      },
    },
    outlined: {
      fontSize: '13px',
      paddingLeft: '10px',
      paddingRight: '4px !important',
      color: '#555759',
    },
  },
} satisfies Components<Theme>['MuiSelect'];
