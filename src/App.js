import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { withAuth0 } from '@auth0/auth0-react';
import LoginContext from './context/auth/context';
import HomePage from './pages/homePage'
import TodoPage from './pages/todoPage'


function App(props) {
  return (
    <LoginContext auth0={props.auth0}>
      <Router>
        <Routes>
          {!props.auth0.isAuthenticated ? (
            <Route exact path='/' element={<HomePage />} />
          ) : (
            < Route path="/" element={<TodoPage />} />
          )
          }
        </Routes >
      </Router >
    </LoginContext>
  );
}

export default withAuth0(App);