import { ImagenGaleria } from './imagen-galeria.class';
import { Injectable } from '@angular/core';

@Injectable()
export class ImagenGaleriaService {


 private imagenes: ImagenGaleria[] = [

    new ImagenGaleria('1', 'imagen random', 'https://picsum.photos/300/200/?random', 'https://picsum.photos/300/200/?random'),
    new ImagenGaleria('2', 'imagen random', 'https://picsum.photos/300/200/?random', 'https://picsum.photos/300/200/?random'),
    new ImagenGaleria('3', 'imagen random', 'https://picsum.photos/300/200/?random', 'https://picsum.photos/300/200/?random'),
    new ImagenGaleria('4', 'imagen random', 'https://picsum.photos/300/200/?random', 'https://picsum.photos/300/200/?random'),
    new ImagenGaleria('5', 'imagen random', 'https://picsum.photos/300/200/?random', 'https://picsum.photos/300/200/?random'),
    new ImagenGaleria('6', 'imagen random', 'https://picsum.photos/300/200/?random', 'https://picsum.photos/300/200/?random'),
    new ImagenGaleria('7', 'imagen random', 'https://picsum.photos/300/200/?random', 'https://picsum.photos/300/200/?random'),
    new ImagenGaleria('8', 'imagen random', 'https://picsum.photos/300/200/?random', 'https://picsum.photos/300/200/?random'),
    new ImagenGaleria('9', 'imagen random', 'https://picsum.photos/300/200/?random', 'https://picsum.photos/300/200/?random'),
    new ImagenGaleria('10', 'imagen random', 'https://picsum.photos/300/200/?random', 'https://picsum.photos/300/200/?random'),
    new ImagenGaleria('11', 'imagen random', 'https://picsum.photos/300/200/?random', 'https://picsum.photos/300/200/?random'),
    new ImagenGaleria('12', 'imagen random', 'https://picsum.photos/300/200/?random', 'https://picsum.photos/300/200/?random'),
    new ImagenGaleria('13', 'imagen random', 'https://picsum.photos/300/200/?random', 'https://picsum.photos/300/200/?random'),
    new ImagenGaleria('14', 'imagen random', 'https://picsum.photos/300/200/?random', 'https://picsum.photos/300/200/?random'),
    new ImagenGaleria('15', 'imagen random', 'https://picsum.photos/300/200/?random', 'https://picsum.photos/300/200/?random'),
    new ImagenGaleria('16', 'imagen random', 'https://picsum.photos/300/200/?random', 'https://picsum.photos/300/200/?random'),
    new ImagenGaleria('17', 'imagen random', 'https://picsum.photos/300/200/?random', 'https://picsum.photos/300/200/?random'),
    new ImagenGaleria('18', 'imagen random', 'https://picsum.photos/300/200/?random', 'https://picsum.photos/300/200/?random'),
    new ImagenGaleria('19', 'imagen random', 'https://picsum.photos/300/200/?random', 'https://picsum.photos/300/200/?random'),
    new ImagenGaleria('20', 'imagen random', 'https://picsum.photos/300/200/?random', 'https://picsum.photos/300/200/?random'),
    new ImagenGaleria('21', 'imagen random', 'https://picsum.photos/300/200/?random', 'https://picsum.photos/300/200/?random'),
    new ImagenGaleria('22', 'imagen random', 'https://picsum.photos/300/200/?random', 'https://picsum.photos/300/200/?random'),
    new ImagenGaleria('23', 'imagen random', 'https://picsum.photos/300/200/?random', 'https://picsum.photos/300/200/?random'),
    new ImagenGaleria('24', 'imagen random', 'https://picsum.photos/300/200/?random', 'https://picsum.photos/300/200/?random'),
    new ImagenGaleria('25', 'imagen random', 'https://picsum.photos/300/200/?random', 'https://picsum.photos/300/200/?random'),
    new ImagenGaleria('26', 'imagen random', 'https://picsum.photos/300/200/?random', 'https://picsum.photos/300/200/?random'),
    new ImagenGaleria('27', 'imagen random', 'https://picsum.photos/300/200/?random', 'https://picsum.photos/300/200/?random'),
    new ImagenGaleria('28', 'imagen random', 'https://picsum.photos/300/200/?random', 'https://picsum.photos/300/200/?random'),
    new ImagenGaleria('29', 'imagen random', 'https://picsum.photos/300/200/?random', 'https://picsum.photos/300/200/?random'),
    new ImagenGaleria('30', 'imagen random', 'https://picsum.photos/300/200/?random', 'https://picsum.photos/300/200/?random'),
    new ImagenGaleria('31', 'imagen random', 'https://picsum.photos/300/200/?random', 'https://picsum.photos/300/200/?random'),
    new ImagenGaleria('32', 'imagen random', 'https://picsum.photos/300/200/?random', 'https://picsum.photos/300/200/?random'),
    new ImagenGaleria('33', 'imagen random', 'https://picsum.photos/300/200/?random', 'https://picsum.photos/300/200/?random')
 ];

  constructor() { }

  public getImagenes() {
    return this.imagenes;
  }

}
