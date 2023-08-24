import { Component } from '@angular/core';

@Component({
  selector: 'app-chave-unica',
  templateUrl: './chave-unica.component.html',
  styleUrls: ['./chave-unica.component.scss']
})
export class ChaveUnicaComponent {
  frase: string = '';
  chave: string = '';
  opcaoSubstituicao: string = 'binaria';
  textoCriptografado: string = '';

  formatarBinario(numero: number, tamanho: number): string {
    let binario = numero.toString(2);
    while (binario.length < tamanho) {
      binario = '0' + binario;
    }
    return binario;
  }

  criptografar() {
    let criptografado = '';

    for (let i = 0; i < this.frase.length; i++) {
      const char = this.frase.charAt(i);
      const chaveChar = this.chave.charAt(i % this.chave.length);
      const charCode = char.charCodeAt(0);
      const chaveCharCode = chaveChar.charCodeAt(0);

      let novoCharCode: number;

      switch (this.opcaoSubstituicao) {
        case 'binaria':
          novoCharCode = charCode ^ chaveCharCode;
          criptografado += this.formatarBinario(novoCharCode, 8) + ' ';
          break;
        case 'dec':
          novoCharCode = charCode + chaveCharCode;
          criptografado += novoCharCode.toString(10) + ' ';
          break;
        case 'hex':
          novoCharCode = charCode - chaveCharCode;
          criptografado += novoCharCode.toString(16) + ' ';
          break;
        case 'char':
          novoCharCode = charCode * chaveCharCode;
          criptografado += String.fromCharCode(novoCharCode) + ' ';
          break;
        default:
          criptografado += char;
      }
    }

    this.textoCriptografado = criptografado;
  }
}
