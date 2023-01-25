import React from 'react'
import Header from './Components/Header'
import "./App.css"
import Home from './Components/Home'
import Features from './Components/Features'
import Portfolio from './Components/Portfolio'
import Resume from './Components/Resume'
import Testimonial from './Components/Testimonial'
import Blog from './Components/Blog'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
const App = () => {
  return (
    <div>
        <Header/>
        <Home/>
        <Features/>
        <Portfolio/>
        <Resume/>
        <Testimonial/>
        <Blog/>
        <Contact/>
        <Footer/>
      </div>
  )
}

export default App