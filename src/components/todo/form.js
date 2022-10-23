import React, { useState } from 'react';
import List from './list'
import { FormField, Input, Form, SpaceBetween, Button, Header } from "@cloudscape-design/components";
import '../todo/form.css'

const task = [];

export default function AppForm(props) {
  const [todoValue, setTodoValue] = useState('');
  const [data, setData] = useState([]);
  console.log('OK', todoValue)
  // setTodoValue('');
  const handleSubmit = (e) => {
    e.preventDefault();
    task.push(todoValue)
    const formData = {
      todo: task
    }
    setData(formData)
    // console.log('Data From Form', data)
    props.handleTask(formData)
    setTodoValue('')
  }

  const handleClear = (e) => {
    e.preventDefault();
    setTodoValue('');
    setData([]);
  }


  console.log('data', data)
  return (
    <div id='todoContainer'>
      <form onSubmit={handleSubmit} >
        <Form
          id='formBox'
          actions={
            <SpaceBetween direction="horizontal" size="xs">
              <Button className='clearButton' formAction="none" onClick={handleClear} variant="link">
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
            <h4>To Do Item</h4>
            <Input
              type='text'
              value={todoValue}
              onChange={event =>
                setTodoValue(event.detail.value)
              }
            />
            <h4>Assigned To</h4>
            <Input
            // value={inputValue}
            // onChange={event =>
            //   setInputValue(event.detail.value)
            // }
            />
          </FormField>

        </Form>
      </form>
      <div id='listBox'>
        <>


          <List task={data} handleTask={props.handleTask} />
        </>
      </div>
    </div>
  );
}





