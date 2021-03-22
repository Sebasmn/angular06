import { ArticuloDetalleComponent } from './articulo-detalle/articulo-detalle.component';
import { ArticuloComponent } from './articulo/articulo.component';
import { EditarusuariosComponent } from './usuarios/editarusuarios/editarusuarios.component';
import { AgregarusuariosComponent } from './usuarios/agregarusuarios/agregarusuarios.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { PaginaerrorComponent } from './paginaerror/paginaerror.component';
import { EjemploComponent } from './ejemplo/ejemplo.component';
import { DirectivasComponent } from './directivas/directivas.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PipesComponent } from './pipes/pipes.component';
import { TitulosComponent } from './titulos/titulos.component';


const routes: Routes = [
  {path: '', component: TitulosComponent},
  {path: 'pipes', component: PipesComponent},
  {path: 'ejemplo', component: EjemploComponent},
  {path: 'directivas', component: DirectivasComponent},
  //ruta padre o ruta principal
  {path: 'usuarios', component: UsuariosComponent, 
    children: [
      {path: 'agregar', component: AgregarusuariosComponent},
      {path: 'editar', component: EditarusuariosComponent}
  ]},
  {path: 'articulo', component:ArticuloComponent},
  //{path: 'articulodetalle/:nombre/:precio/:stock/:preciomayorista', component:ArticuloDetalleComponent},
  {path: 'articulodetalle/:articulo', component:ArticuloDetalleComponent}, //aqui
  {path: '**', component: PaginaerrorComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
