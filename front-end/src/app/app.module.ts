import { MaterialModule } from './material/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainToolbarComponent } from './ui/main-toolbar/main-toolbar.component';
import { MainFooterComponent } from './ui/main-footer/main-footer.component';
import { MainMenuComponent } from './ui/main-menu/main-menu.component';
import { HttpClientModule } from '@angular/common/http';
import { UsuariosListComponent } from './usuarios/usuarios-list/usuarios-list.component';
import { UsuariosList2 } from './usuarios/usuarios-list/usuarios-list2.component.ts/usuarios-list2.component.ts.component';

@NgModule({
  declarations: [
    AppComponent,
    MainToolbarComponent,
    MainFooterComponent,
    MainMenuComponent,
    UsuariosListComponent,
    UsuariosList2.Component.TsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
