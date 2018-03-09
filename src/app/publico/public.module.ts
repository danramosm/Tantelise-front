import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { NgModule } from '@angular/core';


@NgModule({
    declarations: [
        ContactoComponent,
        InicioComponent,
        ProductosComponent,
        ServiciosComponent,
        HeaderComponent,
        FooterComponent
    ]
})

export class PublicoModule { }
