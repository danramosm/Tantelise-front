import { MultimediaComponent } from './pages/multimedia/multimedia.component';
import { AcercaComponent } from './pages/acerca/acerca.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { PagesComponent } from './pages/pages.component';
import { Component } from '@angular/core';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { PagenotfoundComponent } from '../pagenotfound/pagenotfound.component';

import {Routes, RouterModule} from '@angular/router';

const publicoRoutes: Routes = [{
        path: '',
        component: PagesComponent,
        children: [
            { path: 'contacto', component: ContactoComponent, data: {titulo: 'Contácto'}},
            { path: 'inicio', component: InicioComponent, data: {titulo: 'Inicio'}},
            { path: 'productos', component: ProductosComponent, data: {titulo: 'Productos'}},
            { path: 'servicios', component: ServiciosComponent, data: {titulo: 'Servicios'}},
            { path: 'acerca', component: AcercaComponent, data: {titulo: 'Acerca de'}},
            { path: 'multimedia', component: MultimediaComponent, data: {titulo: 'Multimedia'}},
            { path: '**', component: PagenotfoundComponent, data: {titulo: 'Página no encontrada'} }
        ]
    }
];

export const PUBLICO_ROUTES  = RouterModule.forChild(publicoRoutes);

