import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Menu from './components/Menu'
import About from './components/About'
import Blogs from './components/Blogs'
import Footer from './components/Footer'
const App = () => {
  return (
    <div >
      <Navbar/>
      <main>
        <div id="home">
          <Home />
        </div>
        <div id="menu">
          <Menu />
        </div>
        <div id='about'>
          <About />
        </div>
        <div id='blogs'>
          {/* <Blogs /> */}
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App
