import React from 'react'
import Hero from './component/Hero'
import About from './component/About'
import Navbar from './component/Navbar'
import Features from './component/Features'
import Story from './component/Story'
import Contact from './component/Contact'
import Footer from './component/Footer'

const App = () => {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Story />
      <Contact />
      <Footer />
    </main>
  )
}

export default App