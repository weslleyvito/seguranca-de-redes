import { Component } from '@angular/core';

@Component({
  selector: 'app-criptografia-mode-dois',
  templateUrl: './criptografia-mode-dois.component.html',
  styleUrls: ['./criptografia-mode-dois.component.scss']
})
export class CriptografiaModeDoisComponent {

  texto: string = '';
  key: number = 0;
  tipoMovimento: string = '+';
  resultado: string = '';

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

    this.texto = '';
    this.key = 0;
    this.tipoMovimento = "+";
    this.textoCriptografado = '';

  }

  textoCriptografado: string = '';

  criptografar() {
    this.textoCriptografado = '';

    for (const char of this.texto) {
      const index = this.alfabeto.findIndex(item => item.letra === char.toLowerCase());

      if (index !== -1) {
        let newIndex = index + (this.tipoMovimento === '+' ? this.key : -this.key);
        newIndex = (newIndex + this.alfabeto.length) % this.alfabeto.length;
        this.textoCriptografado += this.alfabeto[newIndex].letra;
      } else {
        this.textoCriptografado += char;
      }
    }
  }

  descriptografar() {
    this.resultado = '';

    for (const char of this.texto) {
      const index = this.alfabeto.findIndex(item => item.letra === char.toLowerCase());

      if (index !== -1) {
        let newIndex = index - (this.tipoMovimento === '+' ? this.key : -this.key);
        newIndex = (newIndex + this.alfabeto.length) % this.alfabeto.length;
        this.resultado += this.alfabeto[newIndex].letra;
      } else {
        this.resultado += char;
      }
    }
  }

}