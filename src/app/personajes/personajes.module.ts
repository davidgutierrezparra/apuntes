import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VistaPrincipalComponent } from './vista-principal/vista-principal.component';
import { AgregarComponent } from './agregar/agregar.component';
import { PersonajeComponent } from './personaje/personaje.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    VistaPrincipalComponent,
    AgregarComponent,
    PersonajeComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    VistaPrincipalComponent
  ]
})
export class PersonajesModule { }
