import React, { useContext, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { If, Then, Else } from 'react-if';
import { LoginContext } from './context'
import '../../style/header.css'

function Login() {

  const context = useContext(LoginContext);
  console.log('What??::', context)
  const {
    isAuthenticated,
    logout,
    loginWithRedirect,
    user
  } = useAuth0();

  function handleLogin() {
    loginWithRedirect();
  }

  function handleLogout() {
    context.logout();
    logout();
  }

  useEffect(() => {
    if (isAuthenticated && user) {
      console.log("user is => ", user)
      context.login(user);
    }
  }, [isAuthenticated, user])

  return (
    <If condition={isAuthenticated}>
      <Then>
        <button className='loginButton' onClick={handleLogout}>Logout</button>
      </Then>
      <Else>
        <button className='loginButton' onClick={handleLogin}>Login</button>
      </Else>
    </If>
  )

}

export default Login;