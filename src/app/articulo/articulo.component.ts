import { Articulo } from './../models/articulo.interface';
import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

// // interfaz para el componente
// interface Articulo {
//   nombre: string;
//   descripcion: string;
//   precio: number;
// }

@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.css']
})
export class ArticuloComponent implements OnInit {
  // variables
  // generico de tipo: Articulo
  articulos:Array<Articulo> = new Array<Articulo>();
  objeto:Articulo = this.articulos[0];
  constructor(private router:Router) { }

  ngOnInit(): void {
    this.articulos.push({
      nombre: "PC con Windows 10",
      descripcion: "Marca Lenovo",
      precio: 900,
      stock: 100,
      precioMayorista: 600,
    },
    {
      nombre: "Mac Book Pro",
      descripcion: "Laptop con pantalla retina de Apple",
      precio: 2000,
      stock: 100,
      precioMayorista: 1800,
    },
    {
      nombre: "Tablet de 10 pulgadas",
      descripcion: "Marca Samsung de segunda generación",
      precio: 900,
      stock: 200,
      precioMayorista: 600,
    }
    );
  }

  generarObjeto(item:Articulo):void{
    let objeto: NavigationExtras = {
      queryParams: {
          'obj': JSON.stringify(item)
      }
    };  
    this.router.navigate(["/articulodetalle"],  objeto);
  }
}
