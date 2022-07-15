import { preguntas } from "../preguntas.js";

/**
 * Función que crea una pregunta a partir del nivel de manera aleatoria
 */

const pregunta = (nivel) => {
  let preguntasPorNivel = [];
  preguntas.forEach((pregunta) => {
    pregunta.nivel == nivel ? preguntasPorNivel.push(pregunta) : "";
  });
  return preguntasPorNivel[
    Math.floor(Math.random() * preguntasPorNivel.length)
  ];
};

export { pregunta };
