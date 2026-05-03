import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MeuPrimeiroComponent } from './meu-primeiro-componente/meu-primeiro.component';
import { ComponentPorComando } from './component-por-comando/component-por-comando.component';

@NgModule({
  declarations: [
    AppComponent,
    MeuPrimeiroComponent,
    ComponentPorComando
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
