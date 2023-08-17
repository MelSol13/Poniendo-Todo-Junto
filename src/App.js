import React, { useState } from "react";
import Formulario from "./componentes/Formulario";
import MiPrimerComponente from "./componentes/MiPrimerComponente";
import PersonCard from "./componentes/PersonCard";
import PersonCardFuncional from "./componentes/PersonCardFuncional";
import DogApi from "./componentes/DogApi";
import { Routes, Route, Link } from "react-router-dom";
import ContenedorPersonas from "./componentes/ContenedorPersonas";
import Ciudad from "./componentes/Ciudad";

const App = () => {

  return (
    <div className="App">
      <h1>¡Bienvenida a tu primer app en React!</h1>
      <Link to={"/"} className="btn btn-primary">Home</Link>
      <Link to={"/primercomponente"} className="btn btn-success">Primer Componente</Link>
      <Link to={"/formulario"} class="btn btn-info">Formulario</Link>
      <Link to={"/dogapi"} class="btn btn-warning">Dog Api</Link>
      <Link to={"/personas"} class="btn btn-dark">Cont Personas</Link>
      <Link to={"/ciudad/Monterrey"} className="btn btn-danger">Ciudad de Mty</Link>
      <Link to={"/ciudad/Cusco"} className="btn btn-danger">Ciudad de Cusco</Link>
      <Routes>
        <Route path="/primercomponente" element={<MiPrimerComponente />} />
        <Route path="/formulario" element={<Formulario />} />
        <Route path="/dogapi" element={<DogApi />} />
        <Route path="/personas" element={<ContenedorPersonas />} />
        <Route path="/ciudad/:city" element={<Ciudad />} />
      </Routes>

    </div>
  );
}

export default App;