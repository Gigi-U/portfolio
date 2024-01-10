import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  template: `
  <div class="header-container">
    <h1> HEY I AM {{name.toUpperCase()}} <br> &ensp; BUT YOU CAN CALL ME {{nickname.toUpperCase()}}</h1>  
    <img src="./assets/img/GiDevLuzAzul.png" alt="photo" class="gi-image"> 
  </div> 
 `, 
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  name = 'Gisela Urriza'
  nickname = 'Gii';
}
