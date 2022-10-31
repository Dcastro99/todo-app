import { useState, useEffect } from 'react';
import { withAuth0 } from "@auth0/auth0-react";
import Todolist from './index'
// import List from '../list/index'
import axios from 'axios';


function Test(props) {
  const [listData, setListDAta] = useState(null);

  const handleGetAllUsers = async () => {
    const config = {
      baseURL: `${process.env.REACT_APP_HEROKU_URL}`,
      method: 'get',
    };
    const res = await axios(config);
    console.log('REZZZ----->>>>>', res.data);
    setListDAta(res.data)
  };

  const handleCreateTodo = async (newTodoInfo) => {
    console.log('BAHAHAHAHA')
    if (props.auth0.isAuthenticated) {
      const res = await props.auth0.getIdTokenClaims();
      const jwt = res.__raw;
      // console.log('token: ', jwt);

      const config = {
        headers: { Authorization: `Bearer ${jwt}` },
        method: 'post',
        baseURL: process.env.REACT_APP_HEROKU_URL,
        url: '/todo',
        data: newTodoInfo,
      };

      const todoResponse = await axios(config);

      console.log('Todo\'s from DB: ', todoResponse.data);

      handleGetAllUsers();
    }
  };

  useEffect(() => {
    console.log('KOOL')
    handleGetAllUsers();
  }, [setListDAta])
  // handleCreateTodo={handleCreateTodo}
  return (



    <Todolist handleCreateTodo={handleCreateTodo} data={listData} />

  );


}
export default withAuth0(Test);