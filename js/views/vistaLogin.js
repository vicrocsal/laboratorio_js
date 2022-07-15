import { inicioJuego } from "../controllers/controladorLogin.js";
/**
 * Función que renderiza la vista para que el jugador ponga su nombre y pueda iniciar el juego;
 */


const vistaLogin = () => {
  const contenedorPrincipal = document.querySelector("#container");

  const contenedorForm = document.createElement("div");
  contenedorForm.classList.add("container-form");
  contenedorPrincipal.appendChild(contenedorForm);

  const titulo = document.createElement("h1");
  titulo.classList.add("titulo", "title");
  titulo.textContent = "Concurso de Preguntas y Respuestas";

  const formulario = document.createElement("div");
  formulario.classList.add("form");

  const campoNombre = document.createElement("input");
  campoNombre.classList.add("input", "is-link");
  campoNombre.setAttribute("id", "campo-nombre");
  campoNombre.setAttribute("type", "text");
  campoNombre.setAttribute("placeholder", "Escribe tu nombre");

  const button = document.createElement("button");
  button.classList.add("button");
  button.textContent = "Iniciar Juego";
  button.addEventListener("click", (event) => {
    inicioJuego();
  });

  formulario.appendChild(campoNombre);
  formulario.appendChild(button);

  contenedorForm.appendChild(titulo);
  contenedorForm.appendChild(formulario);
};

export { vistaLogin };
