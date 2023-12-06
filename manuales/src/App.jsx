import {Route, Routes} from 'react-router-dom'
import React from 'react'
import {Menu} from './pages/Menu'
import ManualTecnico from './pages/ManualTecnico'
import ManualUsuario from './pages/ManualUsuario'

export default function App(){
  return(
    <>
      <Routes>
        <Route path="/" element={<Menu/>}>
          <Route path="/manualtecnico" element={<ManualTecnico/>}/>
          <Route path="/manualusuario" element={<ManualUsuario/>}/>
        </Route>
      </Routes>
    </>
  );
}