import { animate, style, transition, trigger } from '@angular/animations';
import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-criptografia-mode-um',
  templateUrl: './criptografia-mode-um.component.html',
  styleUrls: ['./criptografia-mode-um.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('slideAnimation', [
      transition(':enter', [
        style({ transform: 'translateX(100%)' }),
        animate('1s ease-in-out', style({ transform: 'translateX(0)' })),
      ]),
    ]),
  ],
})
export class CriptografiaModeUmComponent {

  frase: string = '';
  resultado: string = '';
  resultadoDescriptografado: string = '';
  animationState: string = 'in';
  mostrarResultado: boolean = false;
  mostrarTexto: boolean = false;

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

  substituirLetras() {
    const substituicoes = [];

    for (const letra of this.frase) {
      const indexObj = this.alfabeto.find(item => item.letra === letra.toLowerCase());

      if (indexObj) {
        const index = indexObj.index;
        const primeira = this.alfabeto[(index - 1 + 26) % 26].letra;
        const segunda = this.alfabeto[(index + 2) % 26].letra;
        const terceira = this.alfabeto[(index - 5 + 26) % 26].letra;
        substituicoes.push(primeira + segunda + terceira);
      } else {
        substituicoes.push(letra);
      }
    }

    this.resultado = substituicoes.join('');
    this.mostrarResultado = false;
    this.mostrarTexto = false;
  }

  reset() {

    this.frase = '';
    this.resultado = '';
    this.resultadoDescriptografado = "";
    this.mostrarResultado = false;
    this.mostrarTexto = false;

  }

  descriptografar() {
    const descriptografado = [];

    for (const grupo of this.resultado.match(/.{1,3}/g) || []) {
      let primeiraIndex = this.alfabeto.findIndex(item => item.letra === grupo.charAt(0));
      let segundaIndex = this.alfabeto.findIndex(item => item.letra === grupo.charAt(1));
      let terceiraIndex = this.alfabeto.findIndex(item => item.letra === grupo.charAt(2));

      primeiraIndex = (primeiraIndex + 1) % 26;
      // segundaIndex = (segundaIndex - 2 + 26) % 26;
      // terceiraIndex = (terceiraIndex + 5) % 26;

      const primeiraLetra = this.alfabeto[primeiraIndex].letra;
      // const segundaLetra = this.alfabeto[segundaIndex].letra;
      // const terceiraLetra = this.alfabeto[terceiraIndex].letra;

      descriptografado.push(primeiraLetra);
    }

    this.resultadoDescriptografado = descriptografado.join('');
    this.animationState = 'in';


    this.mostrarResultado = true;
    setTimeout(() => {
      this.mostrarTexto = true;
    }, 1000); // Ajuste o tempo conforme necessário

  }


}
