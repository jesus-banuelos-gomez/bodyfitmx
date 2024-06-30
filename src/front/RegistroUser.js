import React from "react";
import "../estilosCss/agregarUsuarios/RegistroUsuarioDesktop.css"




/*Tarjeta diseño de agregar usuarios*/

export function TUserNew() {
  return (
    <div className="boxRegUsuarios" >
      <input type="text" placeholder="Name" className="Style-RegUsu"></input>
      <input type="text" placeholder="Last Name" className="Style-RegUsu"></input>
      <input type="" placeholder="Age" className="Style-RegUsu"></input>
      <input type="" placeholder="Peso" className="Style-RegUsu"></input>
      <input placeholder="Estatura" className="Style-RegUsu"></input>
      <input placeholder="Status" className="Style-RegUsu"></input>
      <button className="Style-RegUsu">Save
      </button>
    </div>
  );
}
