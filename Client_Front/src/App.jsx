// import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/authContext.jsx";
import Loginpage from "./pages/login";
import Principal from "./pages/principal";
import Index from "./pages/index";
import Prototipo from "./pages/prototipo";
import SobreNosotros from "./pages/SobreNosotros";
import Contactanos from "./pages/contactanos";

import ProtectedRoute from "./protectedRoute.jsx";
// import { MessageProvider } from "./context/MessageContext.jsx";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />}></Route>
          <Route path="/login" element={<Loginpage />}></Route>
          <Route path="/Prototipo" element={<Prototipo />}></Route>
          <Route path="/SobreNosotros" element={<SobreNosotros />}></Route>
          {/* <MessageProvider> */}
            <Route path="/Contactanos" element={<Contactanos />}></Route>
            <Route element={<ProtectedRoute />}>
              <Route path="/Principal" element={<Principal />}></Route>
            </Route>
          {/* </MessageProvider> */}
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
