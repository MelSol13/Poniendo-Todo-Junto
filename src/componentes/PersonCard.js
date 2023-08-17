import React from "react";

class PersonCard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            edoCivil: "Soltero"
        }
    }

    render() {
        /*
        this.props = {
            nombre="Elena" apellido="De Troya" edad="30" ciudad="Roma"
        }
        */
        const { nombre, apellido, edad, ciudad } = this.props;
        //nombre = this.props.nombre
        //apellido = this.props.apellido
        //nombre = "Elena", apellido = "De Troya", edad = 30, ciudad = "Roma"
        return (
            <div className="col-3 card mb-3">
                <h2>{nombre} {apellido}</h2>
                <p>Edad: {edad}</p>
                <p>Ciudad: {ciudad}</p>
                <p>Estado Civil: {this.state.edoCivil}</p>
                <button className="btn btn-success" onClick={this.hizoClick} >Haz Click Aquí</button>
                <input type="text" placeholder="Input" className="form-control" onChange={() => alert("Cambió")} />
                <button className="btn btn-warning" onClick={this.cambiarEdoCivil}>Cambiar Edo. Civil</button>
            </div>
        )

    }

    hizoClick = () => {
        console.log("El usuario hizo click");
        alert("¡Gracias por hacer click!");
    }

    cambiarEdoCivil = () => {

        if (this.state.edoCivil === "Soltero") {
            this.setState({ edoCivil: "Casado" });
        } else {
            this.setState({ edoCivil: "Soltero" });
        }


    }

}
export default PersonCard;