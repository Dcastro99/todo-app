import React from 'react';
import List from './list'
import { FormField, Input, Form, SpaceBetween, Button, Header } from "@cloudscape-design/components";
import '../todo/form.css'

export default function form() {
  // const [inputValue, setInputValue] = useState("");
  return (
    <div id='todoContainer'>
      <Form id='formBox' onSubmit={e => e.preventDefault()}>
        <Form
          actions={
            <SpaceBetween direction="horizontal" size="xs">
              <Button formAction="none" variant="link">
                Cancel
              </Button>
              <Button variant="primary">Add Task</Button>
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
            // value={inputValue}
            // onChange={event =>
            //   setInputValue(event.detail.value)
            // }
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
      </Form>
      <List />
    </div>
  );
}





