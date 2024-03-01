// import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Loginpage from './pages/login'
import Principal from './pages/principal'
function App() {

  return (
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<h1>Inicio</h1>}></Route>
        <Route path='/login' element={<Loginpage/>}></Route>
        <Route path='/Principal' element={<Principal/>}></Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App
