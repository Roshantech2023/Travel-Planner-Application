import React from 'react'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import Destination from './components/Destination/Destination'
import Search from './components/Search/Search'

function App() {
  return (
    <div>
        <Navbar/>
        <Hero />
        <Destination/>
        <Search/>
    </div>
  )
}
export default App