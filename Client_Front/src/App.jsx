// import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Loginpage from './pages/login'
import Principal from './pages/principal'
import Index from './pages/index'
import Prototipo from './pages/prototipo'
import SobreNosotros from './pages/SobreNosotros'
import Contactanos from './pages/contactanos'
function App() {

  return (
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Index/>}></Route>
        <Route path='/login' element={<Loginpage/>}></Route>
        <Route path='/Principal' element={<Principal/>}></Route>
        <Route path='/Prototipo' element={<Prototipo/>}></Route>
        <Route path='/SobreNosotros' element={<SobreNosotros/>}></Route>
        <Route path='/Contactanos' element={<Contactanos/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
