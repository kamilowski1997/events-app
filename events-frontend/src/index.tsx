import { StyledEngineProvider, ThemeProvider } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import App from './App';
import './index.css';
import appTheme from './utils/theme/appTheme';
import { store } from './redux/store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={appTheme}>
        <BrowserRouter>
          <StyledEngineProvider injectFirst>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <App />
            </LocalizationProvider>
          </StyledEngineProvider>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
);
