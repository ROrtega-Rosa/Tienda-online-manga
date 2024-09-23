import { Injectable } from '@angular/core';
import { Carrito } from '../modelo/carrito';
import { Producto } from '../modelo/producto';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  private listaCarrito: Carrito[]= [];

   getCarrito(){
    this.obtenerSession();
    return this.listaCarrito;
   }

   agregar(producto:Producto, cantidad:number =1){
    this.obtenerSession();
    const index = this.listaCarrito.findIndex(item=>item.producto.id == producto.id)
   if(index == -1){
    const item = new Carrito(producto, cantidad);
    this.listaCarrito.push(item)
   }else{
    this.aumentarCantidadProducto(index,this.listaCarrito[index].cantidad+cantidad)
   }
   this.guardarSession();
  }

  aumentarCantidadProducto(index: number, cantidad:number){
    if(index >=0 && index< this.listaCarrito.length){
      this.listaCarrito[index].cantidad=cantidad;
      this.guardarSession();
    }
  }
  cantidad(){
    this.obtenerSession();
    return this.listaCarrito.length;
  }
  total(){
    const total=this.listaCarrito.reduce((sum,item)=>
    sum+item.producto.precio*item.cantidad,0
    )
    return total.toFixed(2);
  }
  eliminar(index:number){
    if(index >=0 && index< this.listaCarrito.length){
      this.listaCarrito.splice(index,1)
      this.guardarSession();
    }
  }
  guardarSession(){
    localStorage.setItem('carrito', JSON.stringify(this.listaCarrito));
  }
  obtenerSession(){
    this.listaCarrito = [];
    if(typeof window != 'undefined' && window.localStorage){
      const carrito=localStorage.getItem('carrito');
      if(carrito!=null){
        this.listaCarrito=JSON.parse(carrito);
      }
    }

  }
}
