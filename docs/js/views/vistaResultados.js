import { vistaLogin } from "./vistaLogin.js";


/**
 * Función que renderiza la vista para mostrar los resultados históricos del juego
 */

const vistaResultados = () => {
  const contenedorPrincipal = document.querySelector("#container");
  contenedorPrincipal.removeChild(contenedorPrincipal.firstElementChild);

  const contenedorResultados = document.createElement("div");
  contenedorResultados.classList.add("container-resultados");
  contenedorPrincipal.appendChild(contenedorResultados);

  const titulo = document.createElement("h1");
  titulo.classList.add("titulo");
  titulo.textContent = "Resultados";

  const resultadosTabla = document.createElement("table");
  resultadosTabla.classList.add("resultados", "table", "is-narrow");

  const headerTabla = document.createElement("tr");
  const nombreTabla = document.createElement("th");
  nombreTabla.textContent = "Nombre";

  const puntajeTabla = document.createElement("th");
  puntajeTabla.textContent = "Puntaje";

  const jugarDeNuevo = document.createElement("button");
  jugarDeNuevo.classList.add("button", "is-link");
  jugarDeNuevo.textContent = "Jugar de nuevo";
  jugarDeNuevo.addEventListener("click", () => {
    const contenedorPrincipal = document.querySelector("#container");
    contenedorPrincipal.removeChild(contenedorPrincipal.firstElementChild);
    vistaLogin();
  });

  headerTabla.append(nombreTabla, puntajeTabla);
  resultadosTabla.appendChild(headerTabla);
  contenedorResultados.append(titulo, resultadosTabla, jugarDeNuevo);
};

export { vistaResultados };
