import { ProductoServiceService } from './producto-service.service';
import { Component, OnInit } from '@angular/core';
import { Producto } from './producto/producto.interface';


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styles: []
})
export class ProductosComponent implements OnInit {

  private productoLista: Producto[];
  constructor(private productosService: ProductoServiceService) {
  }


  ngOnInit() {
    this.productoLista = this.productosService.getProductoLista();
    console.log(this.productoLista);
  }


}
