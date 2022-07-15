import { vistaJuego } from "../views/vistaJuego.js";
import { Usuario } from "../model/modeloUsuario.js";
import { pregunta } from "../model/modeloPregunta.js";
import { resultados } from "./controladorResultados.js";

let preguntaEnCurso = {};
let nivel = 1;
let puntaje = 0;
let usuario = {};

const juego = (nombreJugador) => {
  usuario = new Usuario(nombreJugador);
  vistaJuego();
  const nombreUsuario = document.querySelector(".nombre-jugador");
  nombreUsuario.textContent = `Jugador: ${usuario.nombre}`;
  const puntajeUsuario = document.querySelector(".puntaje-jugador");
  puntajeUsuario.textContent = `Puntaje: ${puntaje}`;
  nuevaPregunta();
};

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

const ganador = () => {
  guardarRegistro();
  resultados();
};

const salirJuego = () => {
  alert("Juego Terminado 🙂");
  ganador();
  resultados();
};

const juegoPerdido = () => {
  guardarRegistro();
  resultados();
};

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
