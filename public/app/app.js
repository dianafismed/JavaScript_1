import './utils/array-helpers.js';
import { notasService as service } from "./nota/service.nota.js";

document.querySelector('#myButton')
.onclick = () =>
  service
  .sumItems ('2143')
  .then(console.log)
  .catch(console.log);






// Teste
// const divisivel = (divisor, dividendo) => !(dividendo % divisor);
// const divisivelPorDois = divisivel.bind(null, 2);
// console.log(divisivelPorDois(10)); // True
// console.log(divisivelPorDois(5));  // False
// console.log(divisivelPorDois(12)); // True