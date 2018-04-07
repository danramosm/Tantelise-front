import { ImagenGaleria } from './../imagen-galeria.class';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-imagen',
  templateUrl: './imagen.component.html',
  styles: []
})
export class ImagenComponent implements OnInit {

@Input() imagen: ImagenGaleria;

constructor() { }

  ngOnInit() {
  }

}
