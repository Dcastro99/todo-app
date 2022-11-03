import React, { useContext } from 'react';
import { When } from 'react-if';

import { LoginContext } from './context';

function Login(props) {

  // console.log('prooooops', props)
  const context = useContext(LoginContext);
  const isLoggedIn = context.loggedIn;
  const canDo = props.userType ? context.can(props.userType) : true;
  // console.log('USERTYPE', canDo)
  const okToRender = isLoggedIn && canDo;


  return (
    <When condition={okToRender}>
      {props.children}
    </When>
  )
}

export default Login;