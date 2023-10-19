import { useState } from 'react'
import './App.css'
import { Link } from 'react-router-dom'
import CreateCars from './pages/cars/CreateCars'
import ShowCars from './pages/cars/ShowCars'


function App() {
 

  return (
    <>
    <nav>
      <ShowCars/>
      <CreateCars/>

    </nav>
    <Link to="/ShowCars" element={<ShowCars />} />
    <Link to="/CreateCars" element={<CreateCars />} />

    
    </>
  )
}

export default App
