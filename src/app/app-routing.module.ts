import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriptografiaModeUmComponent } from './components/criptografia-mode-um/criptografia-mode-um.component';

const routes: Routes = [
  {
    path: 'criptografia-mode-um',
    component: CriptografiaModeUmComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

  
 }
