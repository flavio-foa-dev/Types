import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";

export class NegociacaoController {
  private inputData: HTMLInputElement;
  private inputQuantidade: HTMLInputElement;
  private inputValor: HTMLInputElement
  private negociacoes:  Negociacoes = new Negociacoes();

  constructor(){
    this.inputData = document.querySelector('#data')
    this.inputQuantidade = document.querySelector('#quantidade')
    this.inputValor = document.querySelector('#valor')


  }
    adicionar(): void {
        const negociacao = this.criarNegociacao();
        this.negociacoes.adiciona(negociacao);
        console.log(this.negociacoes.lista());
        this.limparForm();

    }

    criarNegociacao(): Negociacao {
      const exp = /-/g;
      const date = new Date( this.inputData.value.replace(exp, ',') );
      const qunatidade = parseInt(this.inputQuantidade.value, );
      const valor = parseFloat(this.inputValor.value);
      return  new Negociacao(date, qunatidade, valor );
    }

    limparForm(): void {
      this.inputData.value = '';
      this.inputQuantidade.value = '';
      this.inputValor.value = '';
      this.inputData.focus()
    }
}
