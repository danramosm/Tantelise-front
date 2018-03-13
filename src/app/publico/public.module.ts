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
import { SuperiorComponent } from './shared/header/superior/superior.component';
import { BotonmenuComponent } from './shared/header/menu/botonmenu/botonmenu.component';
import { MenuComponent } from './shared/header/menu/menu.component';
import { MultimediaComponent } from './pages/multimedia/multimedia.component';
import { AcercaComponent } from './pages/acerca/acerca.component';

@NgModule({
    declarations: [
        PagesComponent,
        ContactoComponent,
        InicioComponent,
        ProductosComponent,
        ServiciosComponent,
        HeaderComponent,
        FooterComponent,
        SuperiorComponent,
        BotonmenuComponent,
        MenuComponent,
        MultimediaComponent,
        AcercaComponent
    ],
    imports: [
        PUBLICO_ROUTES,
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class PublicoModule { }
