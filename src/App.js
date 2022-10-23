import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { DarkModeProvider } from './context/settings/darkModeContext'
import HomePage from './pages/homePage'
import TodoPage from './pages/todoPage'


function App() {
  const [data, setData] = useState(null);
  const taskCall = (data) => {
    console.log('Data!!!----', data.todo)

    let obj = {
      todo: data.todo
    }
    setData(obj)
  }



  return (
    <Router>
      <Routes>
        {/* <DarkModeProvider> */}
        <Route exact path='/' element={<HomePage />} />
        <Route path="/todo" element={<TodoPage handleTask={taskCall} data={data} />} />
        {/* </DarkModeProvider> */}

      </Routes>
    </Router>
  );
}

export default App;
