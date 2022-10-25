import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../interfaces/user.model';

@Component({
  selector: 'app-vista-principal',
  templateUrl: './vista-principal.component.html',
  styleUrls: ['./vista-principal.component.css']
})
export class VistaPrincipalComponent implements OnInit {
  @Input () heroes :string [] = [];
  constructor() { }

  ngOnInit(): void {
  }

  recibirEvento(persona: User) {

    console.log('Se guardara una persona', persona)
    this.heroes.push(persona.nombre)
    this.heroes.push(persona.apellido)
  }

}
