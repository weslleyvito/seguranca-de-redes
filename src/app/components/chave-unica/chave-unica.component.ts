import { Component } from '@angular/core';

@Component({
  selector: 'app-chave-unica',
  templateUrl: './chave-unica.component.html',
  styleUrls: ['./chave-unica.component.scss']
})
export class ChaveUnicaComponent {
  frase: string = '';
  chave: string = '';
  textoCriptografado: string = '';
  textoDescriptografado: string = '';

  reset() {

    this.frase = '';
    this.chave = '';
    this.textoCriptografado = '';
    this.textoDescriptografado = '';

  }

  criptografar() {
    let criptografado = '';

    for (const letra of this.frase) {
      const ascii = letra.charCodeAt(0);
      const chaveBinario = this.chave.charCodeAt(0).toString(2).padStart(8, '0');
      const criptografadoBinario = (ascii ^ parseInt(chaveBinario, 2)).toString(2).padStart(8, '0');
      criptografado += criptografadoBinario + ' ';
    }

    this.textoCriptografado = criptografado;
  }

  descriptografar() {
    let descriptografado = '';
    const criptografados = this.textoCriptografado.trim().split(' ');

    for (const criptografadoBinario of criptografados) {
      const chaveBinario = this.chave.charCodeAt(0).toString(2).padStart(8, '0');
      const descriptografadoAscii = parseInt(criptografadoBinario, 2) ^ parseInt(chaveBinario, 2);
      descriptografado += String.fromCharCode(descriptografadoAscii);
    }

    this.textoDescriptografado = descriptografado;
  }

}
