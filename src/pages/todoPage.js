import React from 'react'
import Header from '../components/header'
import Todo from '../components/todo/form'
import Footer from '../components/footer'
import Results from '../components/todo/resultTracker'

export default function todoPage(props) {
  console.log('todoPage', props.data)
  return (
    <div>
      <Header />
      <Results data={props.data} />
      <Todo handleTask={props.handleTask} />
      <Footer />

    </div>
  )
}
