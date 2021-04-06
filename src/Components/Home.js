import React from 'react';
//para trabajar con imagenes
//primero la tengo que importar de dnde esta
import imagenes from'../assets/imagenes'
import './styles.css';
const inicio = () => {
    return(
        <div className="App">
            <h1 className="title2">API VACUNAS by Diego Bajo</h1>
            <div className="container1">
                <div className="left">
                    <img src={imagenes.img1} alt="vacunation" ></img>
                </div>
                <div className="right">
                    <img src={imagenes.img3} alt="vacunation2" ></img>
                </div>
            </div>
        </div>
    )
}

export default inicio;