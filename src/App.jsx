import { useState } from 'react'
import './App.css'
import { Link , Route, Routes} from 'react-router-dom'
import CreateCars from './pages/cars/CreateCars'
import ShowCars from './pages/cars/ShowCars'


function App() {
 

  return (
    <>
   <div>
      <nav>
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/create">
          <button>Create</button>
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<ShowCars />}></Route>
        <Route path="/create" element={<CreateCars />}></Route>
      </Routes>
    </div>
    
    </>
  )
}

export default App
