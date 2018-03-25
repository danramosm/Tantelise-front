import { Imagen } from './imagen/imagen.interface';
import { Injectable } from '@angular/core';

@Injectable()
export class SlideServiceService {


  private imagenes: Imagen[] = [
    {
      urlImagen: 'http://via.placeholder.com/1200x550',
      descripcionImagen: 'Descripción del producto',
      tituloImagen: 'producto 1 '
    },
    {
      urlImagen: 'http://via.placeholder.com/1200x550',
      descripcionImagen: 'Descripción del producto 2',
      tituloImagen: 'producto 2 '
    },
    {
      urlImagen: 'http://via.placeholder.com/1200x550',
      descripcionImagen: 'Descripción del producto 3',
      tituloImagen: 'producto 3 '
    },
    {
      urlImagen: 'http://via.placeholder.com/1200x550',
      descripcionImagen: 'Descripción del producto 4',
      tituloImagen: 'producto 4 '
    }
  ];

  constructor() { }

  public getImagenes() {
    return this.imagenes;
  }

}
