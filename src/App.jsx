import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Impo from './components/Impo/Impo'
import About from './components/About/About'
import Services from './components/Services/Services';
import MyWork from './components/MyWork/MyWork';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

const App = () => {
  return (
    <div>
      <Navbar />
      <Impo />
      <About />
      <Services />
      <MyWork />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default App
