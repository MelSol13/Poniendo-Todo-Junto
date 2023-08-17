import React, { useState } from "react";
import PersonCard from "./PersonCard";
import PersonCardFuncional from "./PersonCardFuncional";

const ContenedorPersonas = () => {

    const [listado, setListado] = useState([
        {
            nombre: "Pedro",
            apellido: "Páramo",
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
            ciudad: "México"
        }
    ]);

    return (
        <div>
            <PersonCard nombre="Juana" apellido="De Arco" edad={18} ciudad="Paris" />
            <PersonCard nombre="Elena" apellido="De Troya" edad={30} ciudad="Roma" />
            {
                listado.map(persona =>
                    <PersonCardFuncional nombre={persona.nombre} apellido={persona.apellido} edad={persona.edad} ciudad={persona.ciudad} />
                )
            }
        </div>
    )

}

export default ContenedorPersonas;