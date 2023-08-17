import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CriptografiaModeUmComponent } from './components/criptografia-mode-um/criptografia-mode-um.component';
import { CriptografiaModeDoisComponent } from './components/criptografia-mode-dois/criptografia-mode-dois.component';

// primeng imports
import { TabViewModule } from 'primeng/tabview';

@NgModule({
  declarations: [
    AppComponent,
    CriptografiaModeUmComponent,
    CriptografiaModeDoisComponent
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
