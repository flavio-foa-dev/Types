import { NegociacaoController } from "./controllers/negociacao-controller.js";

const negociacao = new NegociacaoController
const form = document.querySelector('.form')

form.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log(negociacao.adicionar())
})


