import React from "react";
import pesa from "../img/peso.png";
import phone from "../img/phone.png";
import "../estilosCss/InicioSesion/EstilosSesionDesktop.css";
import "../estilosCss/InicioSesion/EstilosSesionMobile.css";
import "../estilosCss/InicioSesion/EstilosSesionTablet.css";

import { useState, useEffect } from "react";

export function TarjetaSuperior() {
  return (
    /*Esta seccion retorna la parte superior de la pagina*/
    <div className="cont-sup">
      <div className="cont-sup-box">
        <h1>BodyFitmx</h1>
        <img src={pesa} className="img-pesa-register" />
      </div>
    </div>
  );
}

export function ImgPhone() {
  return (
    <div className="cont-phone">
      <img src={phone} width="450px" />
    </div>
  );
}

export function SesionLogin() {
  const [state, setState] = useState(true);
  const [namebtn, setNamebtn] = useState();

  useEffect(() => {
    state ? setNamebtn("Registro") : setNamebtn("Login");
  });

  return (
    <div className="cont-registrar">
      <button
        className="SelectRegSesion"
        onClick={() => {
          state ? setState(false) : setState(true);
        }}
      >
        {namebtn}
      </button>
      {state ? <TarjetaIniciarSesion /> : <TarjetaRegistro />}
    </div>
  );
}

/*Esta funcion retorna la vista de iniciar sesion */
export function TarjetaIniciarSesion() {
  return (
    <div className="cont-D-log" id="login-form">
      <div className="cont-log">
        <h2>Sesion</h2>
        <input type="email" id="email-login" placeholder="Email" required />
        <input
          type="password"
          id="password-login"
          placeholder="Contraseña"
          required
        />
        <button id="btn-Login">Iniciar Sesion</button>
        <span>¿Olvidaste tu contraseña?</span>
      </div>
    </div>
  );
}

/*Esta funcion retorna la vista de Registrar usuario */
export function TarjetaRegistro() {
  return (
    <div className="cont-D-log" id="login-form">
      <div className="cont-log">
        <h2>Registro</h2>
        <input type="text" placeholder="UserName"></input>
        <input type="email" id="email-login" placeholder="Email" required />
        <input
          type="password"
          id="password-login"
          placeholder="Contraseña"
          required
        />
        <input
          type="password"
          id="password-login"
          placeholder="Confirmar Contraseña"
          required
        />
        <br></br>
       
        <select name="cars" id="cars" multiple>
          <option value="Cliente">Cliente</option>
          <option value="Gym">Gym</option>
        </select>

        <button id="btn-Login">Registrase</button>

        <span>¿Ya tienes una cuenta?</span>
      </div>
    </div>
  );
}
