import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import {ThemeProvider} from 'styled-components';
import {InkDefaultTheme} from './styles/theme.styles.tsx';
import {GlobalStyles} from './styles/global.styles.tsx';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <ThemeProvider theme={InkDefaultTheme}>
            <GlobalStyles />
            <App />
        </ThemeProvider>
    </React.StrictMode>,
);
