import { SlideServiceService } from './slide-service.service';
import { Imagen } from './imagen/imagen.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styles: []
})
export class SlideComponent implements OnInit {

  imagenes: Imagen[] = [];

  constructor(private slideService: SlideServiceService) {  }

  ngOnInit() {
    this.imagenes = this.slideService.getImagenes();
  }

}
