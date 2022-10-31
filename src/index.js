import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import { LoginProvider } from './context/auth/context'
import { ThemeProvider } from "./context/settings/themeContext";
import { Auth0Provider } from '@auth0/auth0-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "@cloudscape-design/global-styles/index.css"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <Auth0Provider
    domain={process.env.REACT_APP_DOMAIN}
    clientId={process.env.REACT_APP_CLIENT_ID}
    redirectUri={window.location.origin} >
    <ThemeProvider>
      {/* <LoginProvider> */}
      <App />
      {/* </LoginProvider> */}
    </ThemeProvider>
  </Auth0Provider>
  // </React.StrictMode> 
);


