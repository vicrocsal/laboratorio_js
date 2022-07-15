import { juego } from "../controllers/controladorJuego.js";

/**
 * Función que da inicio al juego siempre y cuando el usuario ponga su nombre
 */

const inicioJuego = () => {
  const nombreIngresado = document.querySelector("#campo-nombre").value;

  nombreIngresado ? juego(nombreIngresado) : alert("Ingrese un nombre 😁");
};

export { inicioJuego };
