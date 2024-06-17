import React from "react";
import ReactDOM from "react-dom/client";
import {
  TarjetaSuperior,
  ImgPhone,
  TarjetaIniciarSesion,
  TarjetaRegistro,
} from "./Task";

import "./EstilosSesionTablet.css";
import "./EstilosSesionMobile.css";
import "./EstilosSesionDesktop.css";
import indice from "./img/indice.png";


const root = ReactDOM.createRoot(document.getElementById("root"));

function Elegir() {
  return (
    <div className="cont-registrar">
      <TarjetaIniciarSesion />
    </div>
  );
}

root.render(
  <>
    <TarjetaSuperior />
    <div className="cont-img-sesion">
      <ImgPhone />
      <Elegir />
    </div>

    <div className="cont-descargas">
      <img src={indice} className="img-descargas-google" />
    </div>
    <footer>Todos los derechos son propiedad de Bodyfitmx.com</footer>
  </>
);
