import { withAuth0 } from "@auth0/auth0-react";
import Todolist from './index'
import axios from 'axios';


function Test(props) {




  const handleCreateTodo = async (newTodoInfo) => {
    // console.log('BAHAHAHAHA')
    const res = await props.auth0.getIdTokenClaims();
    const jwt = res.__raw;
    const config = {
      headers: { Authorization: `Bearer ${jwt}` },
      method: 'post',
      baseURL: process.env.REACT_APP_HEROKU_URL,
      url: '/todo',
      data: newTodoInfo,
    };

    await axios(config);

    // console.log('Todo\'s from DB: ', todoResponse.data);

  };

  const handleDeleteTodo = async (id) => {
    // console.log('DELETED!!!====', id)
    const res = await props.auth0.getIdTokenClaims();
    const jwt = res.__raw;
    const config = {
      headers: { Authorization: `Bearer ${jwt}` },
      method: 'delete',
      baseURL: `${process.env.REACT_APP_HEROKU_URL}/todo/${id}`,
    };

    await axios(config);
    // console.log('U DELETED SUCKA!----->>>>>', deleteInfo);

  };

  const handleUpdateTodo = async (todoToBeUpdated) => {
    console.log('Updated!!!====', todoToBeUpdated)
    const res = await props.auth0.getIdTokenClaims();
    const jwt = res.__raw;
    const config = {
      headers: { Authorization: `Bearer ${jwt}` },
      method: 'put',
      baseURL: process.env.REACT_APP_HEROKU_URL,
      url: `/todo/${todoToBeUpdated._id}`,
      data: todoToBeUpdated,
    };

    await axios(config);

  };



  return (
    <Todolist
      handleCreateTodo={handleCreateTodo}
      handleDeleteTodo={handleDeleteTodo}
      handleUpdateTodo={handleUpdateTodo}
    />
  );
}
export default withAuth0(Test);