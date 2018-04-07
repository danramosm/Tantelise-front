import { Imagen } from './imagen/imagen.interface';
import { Injectable } from '@angular/core';

@Injectable()
export class SlideServiceService {


  private imagenes: Imagen[] = [
    {
      urlImagen: 'https://picsum.photos/2000/700/?image=1000',
      descripcionImagen: 'Descripción del producto',
      tituloImagen: 'producto 1 '
    },
    {
      urlImagen: 'https://picsum.photos/2000/700/?image=133',
      descripcionImagen: 'Descripción del producto 2',
      tituloImagen: 'producto 2 '
    },
    {
      urlImagen: 'https://picsum.photos/2000/700/?image=155',
      descripcionImagen: 'Descripción del producto 3',
      tituloImagen: 'producto 3 '
    },
    {
      urlImagen: 'https://picsum.photos/2000/700/?image=233',
      descripcionImagen: 'Descripción del producto 4',
      tituloImagen: 'producto 4 '
    }
  ];

  constructor() { }

  public getImagenes() {
    return this.imagenes;
  }

}
