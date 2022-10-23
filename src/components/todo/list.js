import React, { useState } from 'react';
import { Button } from '@cloudscape-design/components';
import ColumnLayout from "@cloudscape-design/components/column-layout";
import './list.css'




export default function List(props) {
  const [progress, setProgress] = useState('do your task!')
  const [isActive, setIsActive] = useState(false);
  const newTask = props.task.todo
  // console.log('newTask:', newTask)


  const handleTask = () => {
    console.log('progress>>>>>>>>>>>>>>>.')

    setProgress('complete')
    setIsActive(current => !current);

    // setProgress('in-progress')

  }



  return (
    <>
      <ColumnLayout borders="vertical" id="taskList">
        {newTask ? newTask.map((x, key) => (
          <div id='taskContainer'>
            <div id='taskBox'>
              <h3 id='task'>"task:"</h3>
              <h3 key={key}> {x}</h3>
            </div>
            <Button id='taskButton' onClick={handleTask}>progress</Button>
            <div id='progress'
              style={{
                backgroundColor: isActive ? 'salmon' : '',
                color: isActive ? 'white' : 'white',


              }}

            >
              {progress}
            </div>
          </div>

        )) : undefined
        }

      </ColumnLayout>
    </>

  );

}