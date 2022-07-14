import { preguntas } from "../preguntas";

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
