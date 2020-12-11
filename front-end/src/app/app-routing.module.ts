import { InfoListComponent } from './info/info-list/info-list.component';

import { UsuarioFormComponent } from './usuarios/usuario-form/usuario-form.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuariosListComponent } from './usuarios/usuarios-list/usuarios-list.component';

const routes: Routes = [
    //Nomes de rota no angular(path) não começam com uma barra "/"
    {path: 'usuario', component: UsuariosListComponent },
    {path: 'usuario/novo', component: UsuarioFormComponent },
    {path: 'usuario/:id', component: UsuarioFormComponent},

    {path: 'info', component: InfoListComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
