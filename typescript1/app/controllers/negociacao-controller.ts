import { Negociacao } from "../models/negociacao.js";

export class NegociacaoController {
  private inputData: HTMLInputElement;
  private inputQuantidade: HTMLInputElement;
  private inputValor: HTMLInputElement

  constructor(){
    this.inputData = document.querySelector('#data')
    this.inputQuantidade = document.querySelector('#quantidade')
    this.inputValor = document.querySelector('#valor')


  }
    adicionar(): void {
        const negociacao = this.criarNegociacao();
        console.log(negociacao);

    }

    criarNegociacao(): Negociacao {
      const exp = /-/g;
      const date = new Date( this.inputData.value.replace(exp, ',') );
      const qunatidade = parseInt(this.inputQuantidade.value, );
      const valor = parseFloat(this.inputValor.value);
      return  new Negociacao(date, qunatidade, valor );
    }
}
