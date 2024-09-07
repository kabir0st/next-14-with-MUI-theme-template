import { alpha, createTheme } from '@mui/material/styles';

const glassMorphism = {
    backdropFilter: 'blur(10px)',
    backgroundColor: alpha('#ffffff', 0.1), // Adjust transparency as needed
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    borderRadius: '15px',
};

// Light theme options
const lightThemeOptions = {
    palette: {
        mode: 'light',
        text: {
            primary: '#4c3b34',
        },
        background: {
            default: '#f2e9d9',
            paper: '#ffffff',
        },
        primary: {
            main: '#277c7c',
        },
        secondary: {
            main: '#f28f78',
        },
        accent: {
            main: '#ffb84d',
        },
    },
    shape: {
        borderRadius: 12, // Rounded corners for UI elements
    },
    components: {
        MuiAppBar: {
            styleOverrides: {
                root: {
                    ...glassMorphism,
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: '12px',
                },
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    borderRadius: '12px',
                    backgroundColor: alpha('#ffffff', 0.7),
                    backdropFilter: 'blur(5px)',
                },
            },
        },
    },
};

// Dark theme options
const darkThemeOptions = {
    palette: {
        mode: 'dark',
        text: {
            primary: '#cbbab3',
        },
        background: {
            default: '#261d0d',
            paper: '#261d0d',
        },
        primary: {
            main: '#83d8d8',
        },
        secondary: {
            main: '#87240d',
        },
        accent: {
            main: '#b36b00',
        },
    },
    shape: {
        borderRadius: 12, // Rounded corners
    },
    components: {
        MuiAppBar: {
            styleOverrides: {
                root: {
                    ...glassMorphism,
                    backgroundColor: alpha('#261d0d', 0.8), // Adjust for dark mode
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: '12px',
                },
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    borderRadius: '12px',
                    backgroundColor: alpha('#261d0d', 0.8),
                    backdropFilter: 'blur(5px)',
                },
            },
        },
    },
};

// Generate the theme based on light or dark mode
const theme = (isDarkMode) =>
    createTheme(isDarkMode ? darkThemeOptions : lightThemeOptions);

export default theme;
