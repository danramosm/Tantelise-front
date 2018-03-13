import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages-header-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {


  linkInicio: String = '#/inicio';
  linkProductos: String = '#/productos';
  linkServicios: String = '#/servicios';
  linkMultimedia: String = '#/multimedia';
  linkContacto: String = '#/contacto';
  linkAcerca: String = '#/acerca';

  textoInicio: String = 'Inicio';
  textoProductos: String = 'Productos';
  textoServicios: String = 'Servicios';
  textoMultimedia: String = 'Multimedia';
  textoContacto: String = 'Contacto';
  textoAcerca: String = 'Acerca de';

  constructor() { }

  ngOnInit() {
  }

}
