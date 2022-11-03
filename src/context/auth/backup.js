import React, { useState, useEffect } from 'react';
import axios from 'axios';
import cookie from 'react-cookies';

// External Access Point
export const LoginContext = React.createContext();

function LoginProvider(props) {
  const [loggedIn, setLoggedIn] = useState(false);
  const [token, setToken] = useState(null);
  const [user, setUser] = useState({});
  // const [login, setLogin] = useState(false);
  // const [logout, setLogout] = useState(false);
  // const [can, setCan] = useState(can);

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     loggedIn: false,
  //     token: null,
  //     user: {},
  //     login: this.login,
  //     logout: this.logout,
  //     can: this.can
  //   }
  // 
  const obj = {
    loggedIn,
    token,
    user
  }

  const can = (userType) => {
    return user.userType?.includes(userType);
  }


  const login = async (user) => {

    try {

      if (props?.auth0?.isAuthenticated) {

        const res = await props.auth0.getIdTokenClaims();
        const jwt = res.__raw;

        const config = {
          headers: { Authorization: `Bearer ${jwt}` },
          method: 'post',
          baseURL: `${process.env.REACT_APP_HEROKU_URL}`,
          url: '/user',
          email: user.email
        };
        const response = await axios(config);
        console.log('RES:::: ', response.data);
        const auth = response.data;

        validateUser(auth);
      }
    } catch (e) {
      console.error('No Bueno');
      // this.setLoginState(false, null, {}, e.message)
    }
  }

  const logout = () => {
    setLoginState(false, null, {});
  }

  const validateUser = (data) => {
    try {
      const validUser = data.user;
      setLoginState(true, data.token, validUser)
    } catch (e) {
      setLoginState(loggedIn, token, user, e.message)
    }
  }

  const setLoginState = (loggedIn, token, user, error) => {
    // Set the state
    // this.setState({ token, loggedIn, user });
    setToken({ token });
    setLoggedIn({ loggedIn });
    setUser({ user });

    // Set a cookie
    // cookie.save('auth', token);
  }


  // useEffect(() => {
  //   const cookieFromToken = cookie.load('auth');
  //   validateUser(cookieFromToken);
  // })
  // // componentDidMount() {
  //   const cookieFromToken = cookie.load('auth');
  //   validateUser(cookieFromToken);
  // }


  return (

    < LoginContext.Provider value={obj} >

      {props.children}
    </LoginContext.Provider >
  )

}

export default LoginProvider;