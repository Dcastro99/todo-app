import React from 'react';
import axios from 'axios';
import cookie from 'react-cookies';

// External Access Point
export const LoginContext = React.createContext();

class LoginProvider extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      token: null,
      user: {},
      login: this.login,
      logout: this.logout,
      can: this.can
    }
  }

  can = (userType) => {
    return this?.state?.user?.userType?.includes(userType);
  }


  login = async (user) => {

    try {

      if (this.props?.auth0?.isAuthenticated) {

        const res = await this.props.auth0.getIdTokenClaims();
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

        this.validateUser(auth);
      }
    } catch (e) {
      console.error('No Bueno');
      // this.setLoginState(false, null, {}, e.message)
    }
  }

  logout = () => {
    this.setLoginState(false, null, {});
  }

  validateUser = (data) => {
    try {
      const validUser = data.user;
      this.setLoginState(true, data.token, validUser)
    } catch (e) {
      this.setLoginState(false, null, {}, e.message)
    }
  }

  setLoginState = (loggedIn, token, user, error) => {
    // Set the state
    this.setState({ token, loggedIn, user });

    // Set a cookie
    cookie.save('auth', token);
  }

  componentDidMount() {
    const cookieFromToken = cookie.load('auth');
    this.validateUser(cookieFromToken);
  }

  render() {

    return (

      <LoginContext.Provider value={this.state}>

        {this.props.children}
      </LoginContext.Provider>
    )
  }

}

export default LoginProvider;