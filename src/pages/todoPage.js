import React from 'react'
import Header from '../components/header'
// import Todo from '../components/todo'
import Footer from '../components/footer'
import Crud from '../components/todo/crud'
import { useContext } from "react";
import ThemeButton from "../context/settings/themeButton";
import { ThemeContext } from "../context/settings/themeContext";
import '../style/todoPage.css'

export default function TodoPage() {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div className={darkMode ? "darkMode" : ""}>
      <Header />
      <ThemeButton />
      <Crud />
      {/* <Todo /> */}
      <Footer />

    </div>
  )
}
