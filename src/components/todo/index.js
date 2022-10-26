import React, { useEffect, useState } from 'react';
import Form from '../form'
import List from '../list'
import useForm from '../../hooks/form';
import { v4 as uuid } from 'uuid';
import '../../style/form.css'


const set = new Set();


const ToDo = () => {
  const [defaultValues] = useState({
    difficulty: 4,
  });
  const [list, setList] = useState([]);
  const [incomplete, setIncomplete] = useState([]);
  const { handleChange, handleSubmit } = useForm(addItem, defaultValues);

  function clearAll() {
    document.getElementById("todoForm").reset();
  }

  function deleteItem(id) {
    const items = list.filter(item => item.id !== id);
    setList(items);
  }

  function addItem(item) {
    item.id = uuid();
    item.complete = false;

    if (!set.has(item.text + item.assignee)) {
      set.add(item.text + item.assignee)
      setList([...list, item]);
    }
  }


  function toggleComplete(id) {

    const items = list.map(item => {
      if (item.id === id) {
        let complete = item.complete;
        console.log('STUUPIDO', complete)
        item.complete = !item.complete;
      }
      return item;
    });
    setList(items);

  }

  useEffect(() => {
    let incompleteCount = list.filter(item => !item.complete).length;
    setIncomplete(incompleteCount);
    document.title = `To Do List: ${incomplete}`;
  }, [list, incomplete]);

  return (

    <div id='body'>

      <header id='resultBox'>
        <h1>To Do List: {incomplete} items pending</h1>
      </header>

      <div id='todoContainer'>
        <Form handleChange={handleChange} clearAll={clearAll} handleSubmit={handleSubmit} />
        <List toggleComplete={toggleComplete} list={list} deleteItem={deleteItem} />
      </div>
    </div>

  );
};

export default ToDo;