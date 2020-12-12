import { GrupoPrensaListComponent } from './grupo-prensa/grupo-prensa-list/grupo-prensa-list.component';
import { MaterialModule } from './material/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Habilitar formatação de moeda e data em português
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
registerLocaleData(localePt);

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainToolbarComponent } from './ui/main-toolbar/main-toolbar.component';
import { MainFooterComponent } from './ui/main-footer/main-footer.component';
import { MainMenuComponent } from './ui/main-menu/main-menu.component';
import { HttpClientModule } from '@angular/common/http';
import { UsuariosListComponent } from './usuarios/usuarios-list/usuarios-list.component';
import { UsuarioFormComponent } from './usuarios/usuario-form/usuario-form.component';
import { FormsModule } from '@angular/forms';
import { InfoListComponent } from './info/info-list/info-list.component';
import { InfoFormComponent } from './info/info-form/info-form.component';
import { SoladoListComponent } from './solado/solado-list/solado-list.component';
import { SoladoFormComponent } from './solado/solado-form/solado-form.component';
import { CardsComponent } from './ui/cards/cards.component';
import { GrupoPrensaFormComponent } from './grupo-prensa/grupo-prensa-form/grupo-prensa-form.component';



@NgModule({
  declarations: [
    AppComponent,
    MainToolbarComponent,
    MainFooterComponent,
    MainMenuComponent,
    UsuariosListComponent,
    UsuarioFormComponent,
    InfoListComponent,
    InfoFormComponent,
    SoladoListComponent,
    SoladoFormComponent,
    CardsComponent,
    GrupoPrensaFormComponent,
    GrupoPrensaListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
