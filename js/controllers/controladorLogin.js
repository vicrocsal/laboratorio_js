const inicioJuego = () => {
    const nombreIngresado = document.querySelector('#campo-nombre').value;

    nombreIngresado ? alert(nombreIngresado) : alert("Ingrese un nombre");
}

export {inicioJuego};