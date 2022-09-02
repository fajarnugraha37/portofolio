import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import './index.css';
import CustomeTheme from './components/CustomeTheme';
import { App } from './pages/app/App';

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <ChakraProvider theme={CustomeTheme}>
    <ColorModeScript initialColorMode='light'></ColorModeScript>
      <BrowserRouter>
        <App>
        </App>
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);