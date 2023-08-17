import axios from "axios";
import React, {useState, useEffect} from "react";

const DogApi = () => {
    const [imagen, setImagen] = useState(""); //URL de la imagen de perrito
    const [clicks, setClicks]= useState(0);

    useEffect(()=>{

        axios.get("https://dog.ceo/api/breeds/image/random")
        .then(response => response.data)
        .then(responseJson => {
            console.log(responseJson);
            setImagen(responseJson.message);
        })

    }, [clicks])

    const hizoClick = () => {
        setClicks(clicks+1);
        console.log(clicks);
    }


    return(
        <div>
            <img src={imagen} className="img-fluid" alt="perrito"/>
            <button onClick={hizoClick} className="btn btn-danger">Nueva Imagen</button>
        </div>
    )

}

export default DogApi;