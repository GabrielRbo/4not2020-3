import { CardsComponent } from './ui/cards/cards.component';
import { SoladoFormComponent } from './solado/solado-form/solado-form.component';
import { SoladoListComponent } from './solado/solado-list/solado-list.component';
import { InfoFormComponent } from './info/info-form/info-form.component';
import { InfoListComponent } from './info/info-list/info-list.component';

import { UsuarioFormComponent } from './usuarios/usuario-form/usuario-form.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuariosListComponent } from './usuarios/usuarios-list/usuarios-list.component';

const routes: Routes = [
    //Nomes de rota no angular(path) não começam com uma barra "/"
    {path: 'cards', component: CardsComponent},

    {path: 'usuario', component: UsuariosListComponent },
    {path: 'usuario/novo', component: UsuarioFormComponent },
    {path: 'usuario/:id', component: UsuarioFormComponent},

    {path: 'info', component: InfoListComponent },
    {path: 'info/novo', component: InfoFormComponent },
    {path: 'info/:id', component: InfoFormComponent },

    {path: 'solado', component: SoladoListComponent},
    {path: 'solado/novo', component: SoladoFormComponent},
    {path: 'solado/:id', component: SoladoFormComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
