import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PagesComponent } from './publico/pages/pages.component';
import { SharedComponent } from './publico/shared/shared.component';
import { HeaderComponent } from './publico/shared/header/header.component';
import { FooterComponent } from './publico/shared/footer/footer.component';
import { InicioComponent } from './publico/pages/inicio/inicio.component';
import { ProductosComponent } from './publico/pages/productos/productos.component';
import { ContactoComponent } from './publico/pages/contacto/contacto.component';
import { ServiciosComponent } from './publico/pages/servicios/servicios.component';


@NgModule({
  declarations: [
    AppComponent,
    PagesComponent,
    HeaderComponent,
    FooterComponent,
    InicioComponent,
    ProductosComponent,
    ContactoComponent,
    ServiciosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
