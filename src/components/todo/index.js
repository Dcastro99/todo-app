import React, { useEffect, useState } from 'react';
import Form from '../form'
import List from '../list'
import useForm from '../../hooks/form';
import axios from 'axios';

// import { v4 as uuid } from 'uuid';
import Auth from '../../context/auth/index';
import '../../style/form.css'


const set = new Set();



const ToDo = (props) => {

  // console.log('WHAT ARE YOU??', props.listData)
  const [defaultValues] = useState({
    difficulty: 4,
  });
  const [list, setList] = useState([]);
  const [incomplete, setIncomplete] = useState([]);
  const { handleChange, handleSubmit } = useForm(addItem, defaultValues);


  const handleGetAllTodos = async () => {
    console.log('GET ALL TRIGGERED')
    const config = {
      baseURL: `${process.env.REACT_APP_HEROKU_URL}`,
      method: 'get',
    };
    const res = await axios(config);
    console.log('REZZZ----->>>>>', res.data);
    setList(res.data)

  };


  function clearAll() {
    document.getElementById("todoForm").reset();
  }


  function deleteItem(_id) {
    const items = list.filter(item => item._id !== _id);
    console.log('ID??----------------------->', items)
    props.handleDeleteTodo(_id)
    setList(items);
  }

  async function addItem(item) {


    item.complete = false;

    if (!set.has(item.text + item.assignee)) {
      set.add(item.text + item.assignee)
      // let allTasks = [...list, item]
      let allTasks = [...list, item]

      console.log('VALUES??::', item)

      props.handleCreateTodo(item)
      setList(allTasks);

    }
  }


  function toggleComplete(id) {

    const items = list.map(item => {
      if (item._id === id) {

        item.complete = !item.complete;
      }

      props.handleUpdateTodo(item)
      return item;
    });

    setList(items);

  }
  console.log('ITEMS=========>>>>', list)



  useEffect(() => {

    let incompleteCount = list.filter(item => !item.complete).length;
    setIncomplete(incompleteCount);
    document.title = `To Do List: ${incomplete}`;
  }, [list, incomplete, props.listData]);



  useEffect(() => {
    handleGetAllTodos();

  }, [])

  return (

    <div id='body'>

      <header id='resultBox'>
        <h1>To Do List: {incomplete} items pending</h1>
      </header>

      <div id='todoContainer'>
        <Auth userType='create'>
          <Form handleChange={handleChange} clearAll={clearAll} handleSubmit={handleSubmit} />
        </Auth>
        <List toggleComplete={toggleComplete} list={list} data={props.data} deleteItem={deleteItem} />
      </div>
    </div>

  );
};

export default ToDo;