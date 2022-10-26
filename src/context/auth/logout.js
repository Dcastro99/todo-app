import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import '../../style/header.css'

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (

    <button className='loginButton' variant="outlined" onClick={() => logout({ returnTo: window.location.origin })}>
      Logout
    </button>

  );
};

export default LogoutButton;