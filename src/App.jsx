

import { Outlet } from 'react-router'
import './App.css'

function App() {

  return (
    <>
   
      <h1 className='text-2xl font-bold underline'>Navbar</h1>
      <Outlet/>
      <h2 className='text-2xl underline'>Footer</h2>
      
      
    </>
  )
}

export default App
