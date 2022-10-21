import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/homePage'
import TodoPage from './pages/todoPage'


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route path="/todo" element={<TodoPage />} />

      </Routes>
    </Router>
  );
}

export default App;
