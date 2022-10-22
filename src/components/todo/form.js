import React, { useState } from 'react';
import List from './list'
import { FormField, Input, Form, SpaceBetween, Button, Header } from "@cloudscape-design/components";
import '../todo/form.css'

export default function AppForm(props) {
  const [todoValue, setTodoValue] = useState('');
  // console.log('OK', todoValue)

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      todo: todoValue
    }
    setTodoValue(formData);
    // console.log('FORMDATA', formData)
    // props.handleTask(formData);
  }



  return (
    <div id='todoContainer'>
      <form onSubmit={handleSubmit} >
        <Form
          id='formBox'
          actions={
            <SpaceBetween direction="horizontal" size="xs">
              <Button formAction="none" variant="link">
                Cancel
              </Button>
              <Button type='submit' variant="primary">Add Task</Button>
            </SpaceBetween>
          }
          header={
            <Header variant="h1">Add To Do Item</Header>

          }

        >
          <FormField

          // label={
          //   <>Add To Do Item</>
          // }
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

          <List task={todoValue} />
        </>
      </div>
    </div>
  );
}





