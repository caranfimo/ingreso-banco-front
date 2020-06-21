import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'banco-bogota-front';

  links = [
    {
      name: 'Registrar persona',
      url: '',
      icon: '',
      color: ''
    },
    {
      name: 'Listar',
      url: 'lista',
      icon: '',
      color: ''
    }
  ];
}
