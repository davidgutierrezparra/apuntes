import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { User } from '../../interfaces/user.model';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css'],
})
export class AgregarComponent implements OnInit {

  @Output() CrearPerson: EventEmitter<User> = new EventEmitter();
  
  nuevo: User = {
    nombre: '',
    apellido: '',
  };

  constructor() {}

  ngOnInit(): void {}

  agregar() {
    
    this.CrearPerson.emit(this.nuevo);
    

    
    //console.log(this.nuevo);
  }
}
