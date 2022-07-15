import { vistaJuego } from "../views/vistaJuego.js";
import { Usuario } from "../model/modeloUsuario.js";
import { pregunta } from "../model/modeloPregunta.js";
import { resultados } from "./controladorResultados.js";

let preguntaEnCurso = {};
let nivel = 1;
let usuario = {};
let puntaje = 0;

/**
 * Función que controlad la logica del juego y muestra la vista del mismo con los datos ingresados por el usuario y su puntaje
 */

const juego = (nombreJugador) => {
  usuario = new Usuario(nombreJugador);
  vistaJuego();
  const nombreUsuario = document.querySelector(".nombre-jugador");
  nombreUsuario.textContent = `Jugador: ${usuario.nombre}`;
  const puntajeUsuario = document.querySelector(".puntaje-jugador");
  puntajeUsuario.textContent = `Puntaje: ${puntaje}`;
  console.log(puntaje);
  nuevaPregunta();
};

/**
 * Función que muestra la pregunta en la vista del juego dependiendo del nivel 
 */

const nuevaPregunta = () => {
  const puntajeActual = document.querySelector(".puntaje-jugador");
  puntajeActual.textContent = `Puntaje: ${puntaje}`;

  preguntaEnCurso = pregunta(nivel);
  const preguntaTexto = document.querySelector(".pregunta");
  preguntaTexto.textContent = preguntaEnCurso.pregunta;

  const primeraOpcion = document.querySelector("#respuesta-0");
  primeraOpcion.textContent = preguntaEnCurso.opcion1;

  const segundaOpcion = document.querySelector("#respuesta-1");
  segundaOpcion.textContent = preguntaEnCurso.opcion2;

  const terceraOpcion = document.querySelector("#respuesta-2");
  terceraOpcion.textContent = preguntaEnCurso.opcion3;

  const cuartaOpcion = document.querySelector("#respuesta-3");
  cuartaOpcion.textContent = preguntaEnCurso.opcion4;

  sessionStorage.setItem("preguntaEnCurso", JSON.stringify(preguntaEnCurso));
};

/**
 * Función que valida si la respuesta escogida por el usuario es correcta, si lo es se suma el puntaje y se muestra la siguiente pregunta, si no se muestra el mensaje de juego perdido.
 * Valida también que si el usuario contestó todas las preguntas de manera correcta
 */

const validarRespuesta = (respuesta) => {
  let preguntaPorValidar = JSON.parse(
    sessionStorage.getItem("preguntaEnCurso")
  );
  if (respuesta === preguntaPorValidar.respuesta) {
    puntaje += nivel * 10;
    nivel++;
    alert("Respuesta correcta  🤑");
    nivel > 5 ? ganador() : nuevaPregunta();
    return;
  }

  alert("Respuesta incorrecta - Has perdido. 😌");
  juegoPerdido();
};

/**
 * Función que guarda los resultados si el usuario gana o se retira
 */

const ganador = () => {
  guardarRegistro();
  resultados();
};

/**
 * Función que termina el juego cuando el usuario se retira y llama a la función ganador() para mostrar y guardar los resultados
 */

const salirJuego = () => {
  alert("Juego Terminado 🙂");
  ganador();
  puntaje = 0;
  resultados();
};

/**
 * Función que guarda el registro cuando el usuario pierde y muestra los resultados
 */

const juegoPerdido = () => {
  guardarRegistro();
  puntaje = 0;
  resultados();
};

/**
 * Función que guarda el localStorage los resultados de la partida
 */

const guardarRegistro = () => {
  let registro = [];
  usuario.agregarPuntaje(puntaje);
  if (localStorage.getItem("registroPuntaje")) {
    registro = JSON.parse(localStorage.getItem("registroPuntaje"));
    registro.push(usuario);
    localStorage.setItem("registroPuntaje", JSON.stringify(registro));
    return;
  }
  registro.push(usuario);
  localStorage.setItem("registroPuntaje", JSON.stringify(registro));
};

export { juego, validarRespuesta, salirJuego };
