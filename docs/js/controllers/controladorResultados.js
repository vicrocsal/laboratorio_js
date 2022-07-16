import { vistaResultados } from "../views/vistaResultados.js";

/**
 * Función que captura los resultados guardados en localStorage y los muestra en la vista de resultados
 */


const resultados = () => {
  vistaResultados();

  let listaResultados = [];
  const tablaResultados = document.querySelector(".resultados");

  listaResultados = JSON.parse(localStorage.getItem("registroPuntaje"));

  listaResultados.forEach((usuario) => {
    const fila = document.createElement("tr");
    const nombreUsuario = document.createElement("td");
    nombreUsuario.textContent = usuario.nombre;

    const puntaje = document.createElement("td");
    puntaje.textContent = usuario.puntaje;

    fila.append(nombreUsuario, puntaje);

    tablaResultados.appendChild(fila);
  });
};

export { resultados };
