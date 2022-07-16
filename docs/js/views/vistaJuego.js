import {
  validarRespuesta,
  salirJuego,
} from "../controllers/controladorJuego.js";

/**
 * Función que renderiza la vista del juego, con las posibles opciones de respuesta
 */

const vistaJuego = () => {
  const contenedorPrincipal = document.querySelector("#container");
  contenedorPrincipal.removeChild(contenedorPrincipal.firstElementChild);

  const contenedorJuego = document.createElement("div");
  contenedorJuego.classList.add("container-juego");
  contenedorPrincipal.appendChild(contenedorJuego);

  const nombreJugador = document.createElement("h3");
  nombreJugador.classList.add("nombre-jugador");
  contenedorJuego.appendChild(nombreJugador);

  const puntajeJugador = document.createElement("h3");
  puntajeJugador.classList.add("puntaje-jugador");
  contenedorJuego.appendChild(puntajeJugador);

  const contenedorPregunta = document.createElement("div");
  contenedorPregunta.classList.add("container-pregunta","buttons");

  const pregunta = document.createElement("h3");
  pregunta.classList.add("pregunta");

  for (let i = 0; i < 4; i++) {
    const respuesta = document.createElement("button");
    respuesta.classList.add("button", "is-link");
    respuesta.setAttribute("id", `respuesta-${i}`);
    contenedorPregunta.appendChild(respuesta);
    respuesta.addEventListener("click", (event) => {
      validarRespuesta(respuesta.textContent);
    });
  }

  const salir = document.createElement("button");
  salir.textContent = "Salir del juego";
  salir.classList.add("salir", "button", "is-danger");
  salir.addEventListener("click", (event) => {
    salirJuego();
  });

  contenedorJuego.append(pregunta, contenedorPregunta, salir);
};

export { vistaJuego };
