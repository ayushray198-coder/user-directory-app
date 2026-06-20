import { useState } from 'react'
import { Home } from './pages/Home'
import {Routes ,Route} from "react-router-dom"
import { UserDetails } from './pages/UserDetails'

function App() {


  return (
    <>
    <Routes>
    
      <Route path='/' element={<Home />} />
      <Route path='/user/:id' element={<UserDetails />} />
      </Routes>    
    </>
  )
}

export default App
