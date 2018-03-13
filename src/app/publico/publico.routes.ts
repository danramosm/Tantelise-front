import { MultimediaComponent } from './pages/multimedia/multimedia.component';
import { AcercaComponent } from './pages/acerca/acerca.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { PagesComponent } from './pages/pages.component';
import { Component } from '@angular/core';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ProductosComponent } from './pages/productos/productos.component';

import {Routes, RouterModule} from '@angular/router';

const publicoRoutes: Routes = [{
        path: '',
        component: PagesComponent,
        children: [
            { path: 'contacto', component: ContactoComponent},
            { path: 'inicio', component: InicioComponent},
            { path: 'productos', component: ProductosComponent},
            { path: 'servicios', component: ServiciosComponent},
            { path: 'acerca', component: AcercaComponent},
            { path: 'multimedia', component: MultimediaComponent},
            { path: '', redirectTo: '/inicio', pathMatch: 'full' }
        ]
    }
];

export const PUBLICO_ROUTES  = RouterModule.forChild(publicoRoutes);

