import { Articulo } from './../models/articulo.interface';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-articulo-detalle',
  templateUrl: './articulo-detalle.component.html',
  styleUrls: ['./articulo-detalle.component.css']
})
export class ArticuloDetalleComponent implements OnInit {
  // variables
  nombre?: string;
  precio?:number;
  stock?:number;
  precioMayorista?:number;

  articulo!:Articulo;
  // pasar un parametro utilizando: inyeccion de dependencias

  constructor(private ruta: ActivatedRoute) { }

  ngOnInit(): void {
    // recibir todos los parametros
    //console.log(this.ruta.snapshot.params.nombre);
    //this.nombre = this.ruta.snapshot.params.nombre;
    //this.precio = this.ruta.snapshot.params.precio;



    // recibir la interface con los parametros que estan en las propiedades.
    //console.log(this.ruta.snapshot.paramMap.get('nombre'));
    //aqui tambien cambiar
    //this.articulo.nombre = this.ruta.snapshot.paramMap.get('nombre');
    
  }

}
