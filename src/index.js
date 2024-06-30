import React from "react";
import ReactDOM from "react-dom/client";
import { TarjetaSuperior, ImgPhone, SesionLogin } from "../src/front/Task";
import { TUserNew } from "./front/RegistroUser";
import { StatusG } from "./front/Pagos";
import "./estilosCss/InicioSesion/EstilosSesionDesktop.css";
import "./estilosCss/InicioSesion/EstilosSesionMobile.css";
import "./estilosCss/InicioSesion/EstilosSesionTablet.css";
import indice from "./img/indice.png";



const root = ReactDOM.createRoot(document.getElementById("root"));

function SesionRegistro() {
  return (
    <>
      <TarjetaSuperior />
      <div className="cont-img-sesion">
        <ImgPhone />
        <SesionLogin />
      </div>

      <div className="cont-descargas">
        <img src={indice} className="img-descargas-google" />
      </div>
      <footer>Todos los derechos son propiedad de Bodyfitmx.com</footer>
    </>
  );
}

/*Aqui se coloca solo la navegacion la raiz principal. */
root.render(
  <>
     <StatusG/>
    <br></br>
    <TUserNew />
   
    <SesionRegistro/>
  </>
);
