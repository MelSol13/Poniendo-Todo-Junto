import React, { useState } from "react";
import Formulario from "./componentes/Formulario";
import PersonCard from "./componentes/PersonCard";
import PersonCardFuncional from "./componentes/PersonCardFuncional";
import DogApi from "./componentes/DogApi";
import ContenedorPersonas from "./componentes/ContenedorPersonas";
import {Routes, Route, Link} from "react-router-dom";
import Ciudad from "./componentes/Ciudad";


const App = () => {

  

  return (
    <div className="App">
      <Link to={"/"} className="btn btn-primary">Home</Link>
      <Link to={"/personas"}className="btn btn-success">Personas</Link>
      <Link to={"/formulario"} class="btn btn-info">Formulario</Link>
      <Link to={"/dogapi"} class="btn btn-dark">DogApi</Link>
      <Link to={"/ciudad/Monterrey"} className="btn btn-danger">Ciudad de Mty</Link>
      <Link to={"/ciudad/Cusco"} className="btn btn-danger">Ciudad de Cusco</Link>

      <Routes>
        <Route path="/formulario" element={<Formulario/>}/>
        <Route path="/dogapi" element={<DogApi/>} />
        <Route path="/personas" element={<ContenedorPersonas/>}/>
        <Route path="/ciudad/:city" element={<Ciudad/>}/>
      </Routes>

    </div>
  );
}

export default App;
