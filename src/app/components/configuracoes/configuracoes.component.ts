import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-configuracoes',
  templateUrl: './configuracoes.component.html',
  styleUrls: ['./configuracoes.component.scss']
})
export class ConfiguracoesComponent {

  previewImage: string = '';

  constructor(private renderer: Renderer2) { }

  mudarBackground(opcao: number) {
    const body = document.body;

    switch (opcao) {
      case 1:
        this.renderer.setStyle(
          body,
          'background-image',
          "url('https://i.pinimg.com/originals/cd/fd/a4/cdfda49dd7071ec1623e87f55943ab3e.gif')"
        );
        break;
      case 2:
        this.renderer.setStyle(
          body,
          'background-image',
          "url('https://art.pixilart.com/3e3fc9c4c42536a.gif')"
        );
        break;
      case 3:
        this.renderer.setStyle(
          body,
          'background-image',
          "url('https://www.bing.com/th/id/OGC.ac45ad55ee570402edbffb9187349158?pid=1.7&rurl=http%3a%2f%2f2.bp.blogspot.com%2f-r1W-Xcl8e5s%2fVgKgX4g8qZI%2fAAAAAAAAAbY%2fdFu9CUILZQY%2fs1600%2f0746155001250776518.gif&ehk=Dqcc0Mjc1iZjQH45XNY8LMjioGnnNw%2bQe6KBuG3xjTY%3d')"
        );
        break;
      default:
        break;
    }

    localStorage.setItem('backgroundIndex', String(opcao));
  }

  previewBackground(opcao: number) {
    switch (opcao) {
      case 1:
        this.previewImage = "url('https://i.pinimg.com/originals/cd/fd/a4/cdfda49dd7071ec1623e87f55943ab3e.gif')";
        break;
      case 2:
        this.previewImage = "url('https://art.pixilart.com/3e3fc9c4c42536a.gif')";
        break;
      case 3:
        this.previewImage =
          "url('https://www.bing.com/th/id/OGC.ac45ad55ee570402edbffb9187349158?pid=1.7&rurl=http%3a%2f%2f2.bp.blogspot.com%2f-r1W-Xcl8e5s%2fVgKgX4g8qZI%2fAAAAAAAAAbY%2fdFu9CUILZQY%2fs1600%2f0746155001250776518.gif&ehk=Dqcc0Mjc1iZjQH45XNY8LMjioGnnNw%2bQe6KBuG3xjTY%3d')";
        break;
      default:
        break;
    }
  }

  limparPreview() {
    this.previewImage = '';
  }

  ngOnInit() {
    const backgroundIndex = localStorage.getItem('backgroundIndex');
    if (backgroundIndex) {
      this.mudarBackground(Number(backgroundIndex));
    }
  }

}
