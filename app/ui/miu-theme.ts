'use client';

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    colorSchemes: {
        light: {
            palette: {
                primary: {
                    main: '#171717',
                },
                secondary: {
                    main: 'rgba(var(--gray-rgb), 0.08)',
                },
                // background: {
                //     default: '#fff',
                // },
                text: {
                    primary: '#171717',
                },
            },
        },

        dark: {
            palette: {
                primary: {
                    main: '#ededed',
                },
                secondary: {
                    main: '#0a0a0a',
                },
                // background: {
                //     default: '#ededed',
                // },
                text: {
                    primary: '#ededed',
                },
            },
        },
    },
});

export default theme;
