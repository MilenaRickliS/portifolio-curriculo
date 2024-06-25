import { Routes, Route } from 'react-router-dom'

import Curriculo from '../pages/Curriculo';
import Projetos from '../pages/Projetos';
import Inicio from '../pages/Inicio'

function RoutesApp(){
  return(
    <Routes>
      <Route path="/" element={<Inicio/>}/>

      <Route path="/curriculo" element={ <Curriculo/> } />

      <Route path="/projetos" element={ <Projetos/> } />
    
    </Routes>
  )
}

export default RoutesApp;