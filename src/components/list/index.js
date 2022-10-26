import React from 'react'
import { ColumnLayout } from "@cloudscape-design/components";
export default function List(props) {
  return (
    <div id='listBox'>
      <ColumnLayout>
        {props.list.map(item => (
          <div id='taskContainer'>
            <div id='results'>
              <p id='taskText2'>Assigned to: {item.assignee}</p>
              <div id='taskText4' onClick={() => props.toggleComplete(item.id)}

              >Complete: {item.complete.toString()}</div>
            </div>
            <div id='taskBox' key={item.id}>
              <div id='taskName'>
                <h3 id='task'>
                  task:</h3>
                <p id='taskText'>{item.text}</p>
              </div>
              <p id='taskText3'>Difficulty: {item.difficulty}</p>
              <button id='deleteBtn' onClick={() => props.deleteItem(item.id)}>X</button>
            </div>

          </div>
        ))}
      </ColumnLayout>
    </div>
  )
}
