import { ProductoServiceService } from './pages/productos/producto-service.service';
import { SlideServiceService } from './pages/inicio/slide/slide-service.service';
import { AppComponent } from './../app.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { PagesComponent } from './pages/pages.component';

import { PUBLICO_ROUTES } from './publico.routes';

import { NgModule } from '@angular/core';
import { BotonmenuComponent } from './shared/header/menu/botonmenu/botonmenu.component';
import { MenuComponent } from './shared/header/menu/menu.component';
import { MultimediaComponent } from './pages/multimedia/multimedia.component';
import { AcercaComponent } from './pages/acerca/acerca.component';
import { SlideComponent } from './pages/inicio/slide/slide.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        PagesComponent,
        ContactoComponent,
        InicioComponent,
        ProductosComponent,
        ServiciosComponent,
        HeaderComponent,
        FooterComponent,
        BotonmenuComponent,
        MenuComponent,
        MultimediaComponent,
        AcercaComponent,
        SlideComponent
    ],
    imports: [
        PUBLICO_ROUTES,
        CommonModule
    ],
    providers: [SlideServiceService, ProductoServiceService],
    bootstrap: [AppComponent]
})

export class PublicoModule { }
