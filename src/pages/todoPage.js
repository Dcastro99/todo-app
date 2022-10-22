import React from 'react'
import Header from '../components/header'
import Todo from '../components/todo/form'
import Footer from '../components/footer'

export default function todoPage(props) {
  // console.log('PROPS', props)
  return (
    <div>
      <Header />
      <Todo handleTask={props.handleTask} />
      <Footer />

    </div>
  )
}
// handleTask={ }