
/**
 * Clase para crear un objeto de tipo Usuario tiene un método para agregar el puntaje y un constructor con los atributos nombre y puntaje.
 */

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
