import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'aplicacionCuaderno';
  listaHeroes : Array<string> = ['david', 'luis', 'carlos', 'andres'];
}
