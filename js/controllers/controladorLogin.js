import { juego } from "../controllers/controladorJuego.js";

const inicioJuego = () => {
  const nombreIngresado = document.querySelector("#campo-nombre").value;

  nombreIngresado ? juego(nombreIngresado) : alert("Ingrese un nombre");
};

export { inicioJuego };
