import React from 'react';
import "./estilos.css";
import imagenes from'../assets/imagenes'
const dank = () => {
    return(
        <div className="App">
            <h1 className="name">DIEGO BAJO</h1>
            <h2 className="subname">DAW 2º</h2>
            <img className="profile" src={imagenes.img4} alt="Me"></img>
        </div>
    )
}

export default dank;