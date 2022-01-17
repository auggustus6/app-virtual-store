import theme from '@styles/theme';
import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { ProductContextProvider } from './useProducts';


const GlobalProvider: React.FC = ({ children }) => {
    return (
        <ThemeProvider theme={theme}>
            <ProductContextProvider>
                {children}
            </ProductContextProvider>
        </ThemeProvider>
    )
}

export default GlobalProvider;