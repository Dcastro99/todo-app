import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import '../../style/homeNav.css'

const LoginButton = () => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();

  if (!isAuthenticated)
    return <button className="loginButton" variant="contained" onClick={() => loginWithRedirect()}> Login</button >;
};

export default LoginButton;
