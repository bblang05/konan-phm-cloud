import type {TypographyOptions} from '@mui/material/styles/createTypography';

export const typography = {
    fontFamily: ['"Noto Sans KR"', 'sans-serif', '-apple-system', 'Helvetica', 'Arial', 'sans-serif', 'Inter'].join(','),
    h1: {fontSize: '2.5rem', fontWeight: 500, lineHeight: 1.2}, // 48
    h2: {fontSize: '2.25rem', fontWeight: 500, lineHeight: 1.2}, // 36
    h3: {fontSize: '2rem', fontWeight: 500, lineHeight: 1.2}, // 32
    h4: {fontSize: '1.5rem', fontWeight: 500, lineHeight: 1.2}, // 24
    h5: {fontSize: '1.125rem', fontWeight: 500, lineHeight: 1.2}, // 18
    h6: {fontSize: '1rem', fontWeight: 500, lineHeight: 1.2}, // 16
    subtitle1: {fontSize: '1rem', fontWeight: 500, lineHeight: 1.57}, // 16
    subtitle2: {fontSize: '0.875rem', fontWeight: 500, lineHeight: 1.5}, // 14
    body1: {fontSize: '0.875rem', fontWeight: 400, lineHeight: 1.5}, // 14
    body2: {fontSize: '0.812rem', fontWeight: 400, lineHeight: 1.6}, // 13
    caption: {fontSize: '0.75rem', fontWeight: 400, lineHeight: 1.66}, // 12
    overline: {
        fontSize: '0.625rem',
        fontWeight: 500,
        letterSpacing: '0.5px',
        lineHeight: 1.25,
        textTransform: 'uppercase',
    }, // 11
    button: {fontWeight: 500},
} satisfies TypographyOptions;
