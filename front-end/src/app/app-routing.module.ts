import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuariosListComponent } from './usuarios/usuarios-list/usuarios-list.component';

const routes: Routes = [
    //Nomes de rota no angular(path) não começam com uma barra "/"
    {path: 'usuario', component: UsuariosListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
