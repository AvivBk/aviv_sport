import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './App.css';
import WalletProvider from './core/rain/WalletProvider';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <WalletProvider>
      <App />
    </WalletProvider>
  </StrictMode>
);
