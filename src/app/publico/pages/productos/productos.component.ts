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
   filtro;

  constructor(private productosService: ProductoServiceService) {
  }


  ngOnInit() {
    this.cargarData();
  }

  cargarData(){
    this.productoLista = this.productosService.getProductoLista();
    console.log(this.productoLista);
  }

  filtrarProductosPorNombre(nombrePorFiltrar: string){
      console.log(nombrePorFiltrar);
    }

  
}
