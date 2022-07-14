import {inicioJuego} from "../controllers/controladorLogin.js";

const vistaLogin = () => {
    const contenedorPrincipal = document.querySelector('#container');

    // const contenedorForm = document.createElement("h1");
    // contenedorForm.textContent = "Login";

    // contenedorPrincipal.append(contenedorForm);

    const contenedorForm = document.createElement("div");
    contenedorForm.classList.add("container-form");
    contenedorPrincipal.appendChild(contenedorForm);

    const titulo = document.createElement("h1");
    titulo.classList.add("titulo")
    titulo.textContent = "Concurso preguntas y respuestas";

    const formulario = document.createElement("div");
    formulario.classList.add("form");

    const campoNombre = document.createElement("input");
    campoNombre.setAttribute("id","campo-nombre");
    campoNombre.setAttribute("type", "text");
    campoNombre.setAttribute("placeholder", "Nombre");

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





}


export {vistaLogin};

