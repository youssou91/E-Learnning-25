// eslint-disable-next-line no-unused-vars
import React from 'react'
// import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Services from './Components/Services/Services'
import Bannieres from './Components/Bannieres/Bannieres'
import Inscription from './Components/Inscription/Inscription'
import Bannieres2 from './Components/Bannieres/Bannieres2'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <main className="overflow-hidden bg-white text-dark">
      <h1></h1>
      {/* <Navbar/> */}
      <Hero />
      <Services />
      <Bannieres />
      <Inscription />
      <Bannieres2 />
      <Footer />

    </main>
  )
}

export default App