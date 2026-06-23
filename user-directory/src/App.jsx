
import { Home } from './pages/Home'
import {Routes ,Route} from "react-router-dom"
import { UserDetails } from './pages/UserDetails'
import { NotFound } from './pages/NotFound'

function App() {


  return (
    <>
    <Routes>
    
      <Route path='/' element={<Home />} />
      <Route path='/user/:id' element={<UserDetails />} />
      <Route path='*' element={<NotFound />}/>
      </Routes>    
    </>
  )
}

export default App
