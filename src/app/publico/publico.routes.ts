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

const baseTitulo = 'Tante Lise - ';

const contactoDescripcion = '';
const contactoKey = '';

const inicioDescripcion = 'Pastelería Tante Lise';
const inicioKey = 'Pastelería';

const productoDescripcion = '';
const productoKey = '';

const servicioDescripcion = '';
const servicioKey = '';

const multimediaDescripcion = '';
const multimediaKey = '';

const acercaDescripcion = '';
const acercaKey = '';


const publicoRoutes: Routes = [{
        path: '',
        component: PagesComponent,
        children: [
            { path: 'contacto', component: ContactoComponent, data: {titulo: baseTitulo + 'Contácto', descripcion: contactoDescripcion, keywords: contactoKey }},
            { path: 'inicio', component: InicioComponent, data: {titulo: baseTitulo + 'Inicio', descripcion: inicioDescripcion, keywords: inicioKey }},
            { path: 'productos', component: ProductosComponent, data: {titulo: baseTitulo + 'Productos', descripcion: productoDescripcion, keywords: productoKey }},
            { path: 'servicios', component: ServiciosComponent, data: {titulo: baseTitulo + 'Servicios', descripcion: servicioDescripcion, keywords: servicioKey }},
            { path: 'acerca', component: AcercaComponent, data: {titulo: baseTitulo + 'Acerca de', descripcion: acercaDescripcion, keywords: acercaKey }},
            { path: 'multimedia', component: MultimediaComponent, data: {titulo: baseTitulo + 'Multimedia', descripcion: contactoDescripcion, keywords: contactoKey }},
            { path: '**', component: PagenotfoundComponent, data: {titulo: baseTitulo + 'Página no encontrada', descripcion: inicioDescripcion, keywords: inicioKey }}
        ]
    }
];

export const PUBLICO_ROUTES  = RouterModule.forChild(publicoRoutes);

