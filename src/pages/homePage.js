import React from 'react'
import Header from '../components/header'
import Home from '../components/home'
import Footer from '../components/footer'

import { useContext } from "react";
import ThemeButton from "../context/settings/themeButton";
import { ThemeContext } from "../context/settings/themeContext";
import '../style/todoPage.css'


export default function HomePage() {
  const { darkMode } = useContext(ThemeContext);
  return (
    <div className={darkMode ? "darkMode" : ""}>

      <Header />
      <ThemeButton />

      <Home />
      <Footer />
    </div>
  )
}
