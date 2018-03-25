import { Injectable } from '@angular/core';
import { Producto } from './producto/producto.interface';

@Injectable()
export class ProductoServiceService {


  private productoLista: Producto[] = [
    {
      nombre: 'Producto number one ',
      descripcion: 'Producto1 adgfadgadgadgadgadgadgadgadgadgd gda gadgadg adg adgad gfda fadf adf adf ad fa  ',
      urlThumbnail: 'http://via.placeholder.com/120x80 ',
      urlImagen: 'http://via.placeholder.com/120x80 ',
      categoria: 'Producto1 ',
      unidadVenta: 'unidad ',
      estado: 'Producto1 ',
      fechaIngreso: 'Producto1 ',
      precioProducto: '3450 '
    },
    {
      nombre: 'Producto number 2 ',
      descripcion: 'Producto2 ',
      urlThumbnail: 'http://via.placeholder.com/120x80 ',
      urlImagen: 'http://via.placeholder.com/120x80 ',
      categoria: 'Producto2 ',
      unidadVenta: 'kilogramo ',
      estado: 'Producto2 ',
      fechaIngreso: 'Producto2 ',
      precioProducto: '6500 '

    },
    {
      nombre: 'Producto number 3 ',
      descripcion: 'Producto2 ',
      urlThumbnail: 'http://via.placeholder.com/120x80 ',
      urlImagen: 'http://via.placeholder.com/120x80 ',
      categoria: 'Producto2 ',
      unidadVenta: 'kilogramo ',
      estado: 'Producto2 ',
      fechaIngreso: 'Producto2 ',
      precioProducto: '6500 '

    },
    {
      nombre: 'Producto number 4 ',
      descripcion: 'Producto2 ',
      urlThumbnail: 'http://via.placeholder.com/120x80 ',
      urlImagen: 'http://via.placeholder.com/120x80 ',
      categoria: 'Producto2 ',
      unidadVenta: 'kilogramo ',
      estado: 'Producto2 ',
      fechaIngreso: 'Producto2 ',
      precioProducto: '6500 '

    },
    {
      nombre: 'Producto number 5 ',
      descripcion: 'adigjhaiodgjhoi adjgo jadiojg iaodjgoiajd guja jgda ogja ogj o ',
      urlThumbnail: 'http://via.placeholder.com/120x80 ',
      urlImagen: 'http://via.placeholder.com/120x80 ',
      categoria: 'Producto2 ',
      unidadVenta: 'kilogramo ',
      estado: 'Producto2 ',
      fechaIngreso: 'Producto2 ',
      precioProducto: '6500 '

    },
    {
      nombre: 'Producto number 6 ',
      descripcion: 'Producto2 ',
      urlThumbnail: 'http://via.placeholder.com/120x80 ',
      urlImagen: 'http://via.placeholder.com/120x80 ',
      categoria: 'Producto2 ',
      unidadVenta: 'kilogramo ',
      estado: 'Producto2 ',
      fechaIngreso: 'Producto2 ',
      precioProducto: '6500 '

    },
    {
      nombre: 'Producto number 7 ',
      descripcion: 'Producto2 ',
      urlThumbnail: 'http://via.placeholder.com/120x80 ',
      urlImagen: 'http://via.placeholder.com/120x80 ',
      categoria: 'Producto2 ',
      unidadVenta: 'kilogramo ',
      estado: 'Producto2 ',
      fechaIngreso: 'Producto2 ',
      precioProducto: '6500 '

    },
    {
      nombre: 'Producto number 8 ',
      descripcion: 'Producto2 ',
      urlThumbnail: 'http://via.placeholder.com/120x80 ',
      urlImagen: 'http://via.placeholder.com/120x80 ',
      categoria: 'Producto2 ',
      unidadVenta: 'kilogramo ',
      estado: 'Producto2 ',
      fechaIngreso: 'Producto2 ',
      precioProducto: '6500 '

    },
    {
      nombre: 'Producto number 9 ',
      descripcion: 'Producto2 ',
      urlThumbnail: 'http://via.placeholder.com/120x80 ',
      urlImagen: 'http://via.placeholder.com/120x80 ',
      categoria: 'Producto2 ',
      unidadVenta: 'kilogramo ',
      estado: 'Producto2 ',
      fechaIngreso: 'Producto2 ',
      precioProducto: '6500 '

    }
  ];

  constructor() { }


  public getProductoLista(): Producto[]  {
    return this.productoLista;
  }

}
