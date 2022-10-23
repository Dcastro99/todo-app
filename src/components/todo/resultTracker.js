import React from 'react'
import './results.css'


export default function ResultTracker(props) {
  let task = props.data;
  console.log('TASK----------------->', task)
  if (task !== null) {
    console.log('ALMOST!!!!!!', task.todo.length)
    task = task.todo.length;
  }



  return (
    <div id='resultBox'>
      <h1>To Do List Manager:  ({task})</h1>
    </div>
  )
}
