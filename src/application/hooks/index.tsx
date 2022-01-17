import theme from '@styles/theme';
import React from 'react';
import { ThemeProvider } from 'styled-components/native';


const GlobalProvider: React.FC = ({ children }) => {
    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    )
}

export default GlobalProvider;