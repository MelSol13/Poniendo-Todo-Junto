import React from "react";
import { useParams } from "react-router-dom";

const Ciudad = () => {

    const {city} = useParams(); // useParams es un OBJETO con todo lo que envia mi URL

    return(
        <h1>¡Bienvenido a la ciudad de {city}!</h1>
    )

}

export default Ciudad;