import React from 'react'
import { FormField, Form, SpaceBetween, Button } from "@cloudscape-design/components";
import { useContext } from "react";
import { ThemeContext } from "../../context/settings/themeContext";
import '../../style/form.css'


export default function AppForm(props) {
  const { darkMode } = useContext(ThemeContext);
  return (
    <form id='todoForm' onSubmit={props.handleSubmit}>
      <Form id='formBox'
        actions={
          <SpaceBetween direction="horizontal" size="xs">
            <Button onClick={props.clearAll} className='clearButton' formAction="none" variant="link">
              Clear
            </Button>
            <Button className='addButton' type='submit' variant="primary">Add Task</Button>
          </SpaceBetween>
        }
        header={
          <header id={darkMode ? "formHeader" : "dark-formHeader"} ><h2>Add To Do Item</h2></header>

        }
      >
        <FormField
        >
          <h4 id='formH4'>To Do Item</h4>
          <input id='formInput'
            onChange={props.handleChange} name="text" type='text' placeholder="Item Details" />
          <h4 id='formH4'>Assigned To</h4>
          <input id='formInput'
            onChange={props.handleChange} name="assignee" type="text" placeholder="Assignee Name"
          />

          <div id='levelDiv'>
            <span id='diffSpan'>Difficulty</span>
            <input id='inputbar' onChange={props.handleChange} defaultValue='1' type="range" min={1} max={5} name="difficulty" />
          </div>
        </FormField>


      </Form>
    </form>
  )
}
