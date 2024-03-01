// import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Loginpage from './Pages/login'

function App() {

  return (
    <>
       <BrowserRouter>
      <Routes>
        <Route path='/' element={<h1>Inicio</h1>}></Route>
        <Route path='/login' element={<Loginpage/>}></Route>

      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
