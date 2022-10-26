import React from 'react'
import Header from '../components/header'
import Todo from '../components/todo'
import Footer from '../components/footer'
import { useContext } from "react";
import ThemeBotton from "../context/settings/themeButton";
import { ThemeContext } from "../context/settings/themeContext";
import '../style/todoPage.css'
// import Results from '../components/todo/resultTracker'

export default function TodoPage() {
  const { darkMode } = useContext(ThemeContext);
  return (
    <div className={darkMode ? "darkMode" : ""}>
      <Header />
      <ThemeBotton />
      <Todo />
      <Footer />

    </div>
  )
}
