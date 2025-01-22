// eslint-disable-next-line no-unused-vars
import React from 'react'
// import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Services from './Components/Services/Services'
import Bannieres from './Components/Bannieres/Bannieres'

const App = () => {
  return (
    <main className="overflow-hidden bg-white text-dark">
      <h1></h1>
      {/* <Navbar/> */}
      <Hero/>
      <Services/>
      <Bannieres/>
    </main>
  )
}

export default App