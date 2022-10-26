import React from 'react'
import HomeNav from '../components/homeNav'
import Home from '../components/home'
import Footer from '../components/footer'
import { useContext } from "react";
import ThemeBotton from "../context/settings/themeButton";
import { ThemeContext } from "../context/settings/themeContext";
import '../style/todoPage.css'

export default function HomePage() {
  const { darkMode } = useContext(ThemeContext);
  return (
    <div className={darkMode ? "darkMode" : ""}>
      <HomeNav />
      <ThemeBotton />
      <Home />
      <Footer />
    </div>
  )
}
