import React from "react";
import ColumnLayout from "@cloudscape-design/components/column-layout";
import './list.css'

let newTask = [];
let set = new Set();


export default function List(props) {
  let taskList = newTask;


  if (!set.has(props.task.todo)) {
    set.add(props.task.todo)
    newTask.push(props.task.todo)
  }



  console.log('porpsList', props)
  return (
    <ColumnLayout borders="vertical" id="taskList">
      {taskList ? taskList.map((x, key) => (
        <div id='taskBox'>
          <h3 key={key}>{x}</h3>
        </div>
      )) : undefined
      }

    </ColumnLayout>
  );
}