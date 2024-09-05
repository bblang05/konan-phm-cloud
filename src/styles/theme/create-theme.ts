import {experimental_extendTheme as extendTheme} from '@mui/material/styles';

import {colorSchemes} from './color-schemes';
import {components} from './components/components';
import {shadows} from './shadows';
import type {Theme} from './types';
import {typography} from './typography';

declare module '@mui/material/styles/createPalette' {
    interface PaletteRange {
        50: string;
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
        900: string;
        950: string;
    }

    interface Palette {
        neutral: PaletteRange;
    }

    interface PaletteOptions {
        neutral?: PaletteRange;
    }

    interface TypeBackground {
        level1: string;
        level2: string;
        level3: string;
    }
}

export function createTheme(): Theme {
    const theme = extendTheme({
        // breakpoints: { values: { xs: 0, sm: 900, md: 1200, lg: 1440, xl: 1920 } },
        breakpoints: {values: {xs: 900, sm: 900, md: 1200, lg: 1440, xl: 1920}},
        components,
        colorSchemes,
        shadows,
        shape: {borderRadius: 8},
        typography,
    });

    return theme;
}
