import "./EstilosSesionDesktop.css";
import pesa from "./img/peso.png";
import phone from "./img/phone.png";

export function TarjetaSuperior() {
  return (
    /*Esta seccion retorna la parte superior de la pagina*/
    <div className="cont-sup">
      <div className="cont-sup-box">
        <h1>BodyFitmx</h1>
        <img src={pesa} height="50px" className="img-pesa-register" />
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
        <button id="btn-Login">Registrase</button>
        <span>¿Ya tienes una cuenta?</span>
      </div>
    </div>
  );
}
