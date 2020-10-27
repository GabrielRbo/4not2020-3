import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GrupoPrensasComponent } from './prensas/grupo-prensa/grupo-prensas.component';

const routes: Routes = [
    // Nomes de rota no Angula (path) não começam com uma barra
    { path: 'prensas', component: GrupoPrensasComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
