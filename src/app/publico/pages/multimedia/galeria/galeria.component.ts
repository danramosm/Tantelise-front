import { ImagenGaleria } from './imagen-galeria.class';
import { ImagenGaleriaService } from './imagen-galeria.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styles: []
})
export class GaleriaComponent implements OnInit {

  imagenes: ImagenGaleria[];

  constructor(public imagenGaleriaService: ImagenGaleriaService) { }

  ngOnInit() {
    this.imagenes = this.imagenGaleriaService.getImagenes();
  }

}
