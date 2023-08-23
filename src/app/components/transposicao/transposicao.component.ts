import { Component } from '@angular/core';

@Component({
  selector: 'app-transposicao',
  templateUrl: './transposicao.component.html',
  styleUrls: ['./transposicao.component.scss']
})
export class TransposicaoComponent {

  frase: string = '';
  chave: string = '';
  textoCriptografado: string = '';
  textoDescriptografado: string = '';

  alfabeto = [
    { letra: 'a', index: 0 },
    { letra: 'b', index: 1 },
    { letra: 'c', index: 2 },
    { letra: 'd', index: 3 },
    { letra: 'e', index: 4 },
    { letra: 'f', index: 5 },
    { letra: 'g', index: 6 },
    { letra: 'h', index: 7 },
    { letra: 'i', index: 8 },
    { letra: 'j', index: 9 },
    { letra: 'k', index: 10 },
    { letra: 'l', index: 11 },
    { letra: 'm', index: 12 },
    { letra: 'n', index: 13 },
    { letra: 'o', index: 14 },
    { letra: 'p', index: 15 },
    { letra: 'q', index: 16 },
    { letra: 'r', index: 17 },
    { letra: 's', index: 18 },
    { letra: 't', index: 19 },
    { letra: 'u', index: 20 },
    { letra: 'v', index: 21 },
    { letra: 'w', index: 22 },
    { letra: 'x', index: 23 },
    { letra: 'y', index: 24 },
    { letra: 'z', index: 25 },
  ];

  reset() {

    this.frase = '';
    this.chave = '';
    this.textoCriptografado = '';
    this.textoDescriptografado = '';

  }

  transposicao() {
    let criptografado = '';

    for (const letra of this.frase) {
      const index = this.alfabeto.findIndex(item => item.letra === letra.toLowerCase());

      if (index !== -1) {
        const chaveIndex = this.alfabeto.findIndex(item => item.letra === this.chave[0].toLowerCase());
        const novoIndex = (index + chaveIndex) % this.alfabeto.length;
        criptografado += this.alfabeto[novoIndex].letra;
      } else {
        criptografado += letra;
      }
    }

    this.textoCriptografado = criptografado;
  }

  descriptografar() {
    let descriptografado = '';

    for (const letra of this.textoCriptografado) {
      const index = this.alfabeto.findIndex(item => item.letra === letra.toLowerCase());

      if (index !== -1) {
        const chaveIndex = this.alfabeto.findIndex(item => item.letra === this.chave[0].toLowerCase());
        const novoIndex = (index - chaveIndex + this.alfabeto.length) % this.alfabeto.length;
        descriptografado += this.alfabeto[novoIndex].letra;
      } else {
        descriptografado += letra;
      }
    }

    this.textoDescriptografado = descriptografado;
  }

}
