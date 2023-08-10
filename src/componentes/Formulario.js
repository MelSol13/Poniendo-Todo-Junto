import React, {useState} from "react";

const Formulario = () => {

    const [nombre, setNombre] = useState("");
    const[apellido, setApellido] = useState("");
    //const[apellido2, setApellido2] = useState("");
    const[edad, setEdad] = useState("");
    const[color, setColor] = useState("");
    const[hizoSubmit, setHizoSubmit] = useState(false);

    const [errorNombre,setErrorNombre] = useState(""); //variable en la cual colocaría la validación de nombre
    const [errorEdad, setErrorEdad] = useState("");

    const crearUsuario = (e) => {
        e.preventDefault();
        const nuevoUsuario = {nombre, apellido, edad, color}; //creamos objeto
        console.log(nuevoUsuario);
        setNombre("");//vacíos para que se regrese a estar vacío
        setApellido("");
        setEdad("");
        setColor("");
        setHizoSubmit(true);
    }

    const validarNombre = e =>{
        setNombre(e.target.value);
        if(nombre.length < 3) {
            setErrorNombre("El nombre debe tener al menos 3 caracteres");
        } else{
            setErrorNombre("");
        }
    }

    const validarEdad = e => {
        setEdad(e.target.valueAsNumber);
        if(e.target.valueAsNumber < 18) {
            setErrorEdad("Se debe ser mayor de edad.");
        } else{
            setErrorEdad("");
        }
    }
    
    /*esto sirve para tarea la parte de comparar las contraseñas 
    const validarApellido1 = e =>{
        setApellido1(e.target.value);
        if(apellido1 !== apellido2) {
            //aqui el error
        }
        if(apellido1.length <8){
            //aqui el error
        }
    }

    const validarApellido2 = e =>{
        setApellido2(e.target.value);
        if(apellido1 !== apellido2) {
            //aqui el error
        }
        if(apellido2.length <8){
            //aqui el error
        }*/

    return(
        <form onSubmit= {crearUsuario}>
            <h2>Crear Usuario</h2>
            <h5>
                {hizoSubmit ? "¡Gracias por ingresar tus datos" : "Favor de ingresar tus datos"} 
            </h5>
            <div>
                <label>Nombre:</label>
                <input className="form-control" onChange={validarNombre} value={nombre}></input>
                {
                    errorNombre && <p className="text-danger">{errorNombre}</p>
                }
            </div>
            <div>
                <label>Apellido:</label>
                <input className="form-control" onChange={e => setApellido(e.target.value)} value={apellido}></input>
            </div>
            <div>
                <label>Edad:</label>
                <input type="number" className="form-control" onChange={validarEdad} value={edad}></input>
                {
                    errorEdad && <p className="text-danger">{errorEdad}</p>
                }
            </div>
            <div>
                <label>Color de Cabello:</label>
                <input className="form-control"onChange={e => setColor(e.target.value)} value={color}></input>
            </div>
            <input type="submit" className="btn btn-success" value="Crear Usuario"></input>
        </form>
    )
}

export default Formulario;