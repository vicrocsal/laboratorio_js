class Usuario {
  constructor(nombre) {
    this.nombre = nombre;
    this.puntaje = 0;
  }

  agregarPuntaje = (puntaje) => {
    this.puntaje = puntaje;
  };
}

export { Usuario };
