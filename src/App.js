import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/homePage'
import TodoPage from './pages/todoPage'


function App() {
  const [data, setData] = useState(null);
  const taskCall = (data) => {
    console.log('Data----', data)
    setData(data)
  }
  console.log('DATA', data)
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route path="/todo" element={<TodoPage handleTask={taskCall} />} />

      </Routes>
    </Router>
  );
}

export default App;
