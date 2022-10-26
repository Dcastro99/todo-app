import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { withAuth0 } from '@auth0/auth0-react';
import HomePage from './pages/homePage'
import TodoPage from './pages/todoPage'


function App(props) {
  const [data, setData] = useState(null);
  const taskCall = (data) => {
    console.log('Data!!!----', data.todo)

    let obj = {
      todo: data.todo
    }
    setData(obj)
  }



  return (
    <Router>
      <Routes>
        {!props.auth0.isAuthenticated ? (
          <Route exact path='/' element={<HomePage />} />
        ) : (
          <Route path="/" element={<TodoPage handleTask={taskCall} data={data} />} />
        )
        }
      </Routes >
    </Router >
  );
}

export default withAuth0(App);
