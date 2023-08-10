import React, { useState } from "react";
import Formulario from "./componentes/Formulario";
import PersonCard from "./componentes/PersonCard";
import PersonCardFuncional from "./componentes/PersonCardFuncional";


const App = () => {

  const [listado, setListado] = useState([
    {
      nombre: "Pedro",
      apellido: "Paramo",
      edad: 32,
      ciudad: "Comala"
    },
    {
      nombre: "Pablo",
      apellido: "Picasso",
      edad: 50,
      ciudad: "Paris"
    },
    {
      nombre: "Juan",
      apellido: "Perez",
      edad: 20,
      ciudad: "Mexico"
    }
  ]);

  return (
    <div className="App">
      <PersonCard firstName="Elena"
        lastName="De Troya" age={18}
        hairColor="Black" />

      <PersonCard firstName="Juana"
        lastName="De Arco" age={20}
        hairColor="Brown" />

      <PersonCard firstName="Pedro"
        lastName="Paramo" age={32}
        hairColor="Blonde" />

      <PersonCard firstName="Pablo"
        lastName="Picasso" age={50}
        hairColor="White" />

      {
        listado.map(persona =>
          <PersonCardFuncional firstName={persona.nombre} lastName={persona.apellido} age={persona.edad} hairColor="negro" />
        )
      }

      <PersonCardFuncional firstName="Elena" lastName="De Troya" age={18} hairColor="Black"  />

      <Formulario />

    </div>
  );
}

export default App;
