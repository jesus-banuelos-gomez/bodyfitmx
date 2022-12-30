import React from "react";
import ReactDOM from "react-dom/client";
import {
  TarjetaSuperior,
  ImgPhone,
  TarjetaIniciarSesion,
  TarjetaRegistro,
} from "./Task";
import "./estilosSesion.css";
import indice from "./img/indice.png";
import { useState } from "react";

const root = ReactDOM.createRoot(document.getElementById("root"));
const [estado,nEstado] = useState( <TarjetaIniciarSesion />)

function Elegir() {
  return (
    <div>
     
      <div className="cont-registrar">
        <p>¿No tienes una cuenta?</p>
        <span
            onClick={() => {
            nEstado(<TarjetaRegistro />) 
            console.log("exito");
          }}
        >
          Registrate
        </span>
      </div>
    </div>
  );
}

root.render(
  <>
    <TarjetaSuperior />
    <ImgPhone />
    <Elegir />

    <div className="cont-descargas">
      <img src={indice} width="150px" />
    </div>
    <footer>Todos los derechos son propiedad de BodyFit.com</footer>
  </>
);
