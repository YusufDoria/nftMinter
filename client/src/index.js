import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  ThirdwebProvider,
  metamaskWallet,
  coinbaseWallet,
  phantomWallet,
  walletConnect,
} from "@thirdweb-dev/react";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <ThirdwebProvider
      supportedWallets={[
        metamaskWallet({
          recommended: true,
        }),
        phantomWallet(),
        coinbaseWallet(),
        walletConnect(),
      ]}
      clientId="8272b2415e9bee62a2c0c859d01244e8"
    >
      <App />
    </ThirdwebProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
