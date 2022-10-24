import React, { useEffect, useState } from 'react';
import useForm from './form2';
import { FormField, Form, SpaceBetween, Button, Header, ColumnLayout } from "@cloudscape-design/components";
import './form.css'
import { v4 as uuid } from 'uuid';


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
    <>
      <header id='resultBox'>
        <h1>To Do List: {incomplete} items pending</h1>
      </header>
      <div id='todoContainer'>
        <form id='todoForm' onSubmit={handleSubmit}>
          <Form id='formBox'
            actions={
              <SpaceBetween direction="horizontal" size="xs">
                <Button onClick={clearAll} className='clearButton' formAction="none" variant="link">
                  Clear
                </Button>
                <Button className='addButton' type='submit' variant="primary">Add Task</Button>
              </SpaceBetween>
            }
            header={
              <Header variant="h2">Add To Do Item</Header>

            }
          >
            <FormField
            >
              <h4 id='formH4'>To Do Item</h4>
              <input id='formInput'
                onChange={handleChange} name="text" type='text' placeholder="Item Details" />
              <h4 id='formH4'>Assigned To</h4>
              <input id='formInput'
                onChange={handleChange} name="assignee" type="text" placeholder="Assignee Name"
              />

              <div id='levelDiv'>
                <span id='diffSpan'>Difficulty</span>
                <input id='inputbar' onChange={handleChange} defaultValue={defaultValues.difficulty} type="range" min={1} max={5} name="difficulty" />
              </div>
            </FormField>


          </Form>
        </form>
        <div id='listBox'>
          <ColumnLayout>
            {list.map(item => (
              <div id='taskContainer'>
                <div id='results'>
                  <p id='taskText2'>Assigned to: {item.assignee}</p>
                  <div id='taskText4' onClick={() => toggleComplete(item.id)}

                  >Complete: {item.complete.toString()}</div>
                </div>
                <div id='taskBox' key={item.id}>
                  <div id='taskName'>
                    <h3 id='task'>"task:"</h3>
                    <p id='taskText'>{item.text}</p>
                  </div>
                  <p id='taskText3'>Difficulty: {item.difficulty}</p>

                </div>

              </div>
            ))}
          </ColumnLayout>
        </div>
      </div>
    </>
  );
};

export default ToDo;