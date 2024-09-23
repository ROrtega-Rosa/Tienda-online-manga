import { Component, inject, OnInit } from '@angular/core';
import { ProductoService } from '../../../core/services/producto.service';
import { Producto } from '../../../core/modelo/producto';
import { CarritoService } from '../../../core/services/carrito.service';

@Component({
  selector: 'app-catalogo-inicio',
  standalone: true,
  imports: [],
  templateUrl: './catalogo-inicio.component.html',
  styleUrl: './catalogo-inicio.component.css'
})
export class CatalogoInicioComponent implements OnInit {

  private productoService= inject(ProductoService);
  private carritoService = inject(CarritoService);
  productos: Producto[]=[]
  ngOnInit(){
    this.getProductos();
  }
  getProductos(){
    this.productoService.getProductos().subscribe({
     next: (data) =>{
      this.productos = data;
     }, error: (e) =>{
      console.error(e);
     }
    })
  }

  agregarProducto(item:Producto){
    this.carritoService.agregar(item)
  }
}
