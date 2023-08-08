import React,{useState} from "react";

const PersonCardFuncional = ({firstName, lastName, age, hairColor}) => {

    const [edoCivil,setEdoCivil]= useState("Casado");

    const cambiarEdoCivil = () => {
        if(edoCivil === "Casado"){
            setEdoCivil("Soltero");
        }else{
            setEdoCivil("Casado");
        }
    }

    return(
        <div>
            <h2>{firstName} {lastName}</h2>
            <p>Age:{age}</p>
            <p>HairColor{hairColor}</p>
            <p>Edo Civil:{edoCivil}</p>
            <button className="btn btn-info" onClick={cambiarEdoCivil}>Cambiar Edo</button>
        </div>
    )

}

export default PersonCardFuncional;