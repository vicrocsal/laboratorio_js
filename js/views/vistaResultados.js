
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
    resultados.classList.add("resultados");

    const headerTabla = document.createElement("tr");
    const nombreTabla = document.createElement("th");
    nombreTabla.textContent = "Nombre";

    const puntajeTabla = document.createElement("th");
    puntajeTabla.textContent = "Puntaje";

    headerTabla.append(nombreTabla, puntajeTabla);
    resultadosTabla.appendChild(headerTabla);
    contenedorResultados.append(titulo, resultadosTabla);
}