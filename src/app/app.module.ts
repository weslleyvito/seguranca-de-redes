import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CriptografiaModeDoisComponent } from './components/criptografia-mode-dois/criptografia-mode-dois.component';
import { CriptografiaModeUmComponent } from './components/criptografia-mode-um/criptografia-mode-um.component';

// primeng imports
import { TabViewModule } from 'primeng/tabview';
import { ChaveUnicaComponent } from './components/chave-unica/chave-unica.component';
import { ConfiguracoesComponent } from './components/configuracoes/configuracoes.component';
import { TransposicaoComponent } from './components/transposicao/transposicao.component';

@NgModule({
  declarations: [
    AppComponent,
    CriptografiaModeUmComponent,
    CriptografiaModeDoisComponent,
    TransposicaoComponent,
    ChaveUnicaComponent,
    ConfiguracoesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    TabViewModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
