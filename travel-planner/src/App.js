import React from 'react'
import Navbar from './componets/Navbar/navbar'
import Home from './componets/Home/home'
import Main from './componets/Main/main'
import Footer from './componets/Footer/footer'
import './App.css'

export const App = () => {
  return (
    <>
    <Navbar/>
    <Home/>
    <Main/>
    <Footer/>
    </>
  )
}
export default App;