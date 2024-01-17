import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  template: `
  <div class="header-container">
    <div class="section-title">
      <h1> Hey I am <span>{{name.toUpperCase()}}</span></h1>
      <h2>but you can call me {{nickname}}</h2>  
    </div> 
  </div> 
 `, 
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  name = 'Gisela Urriza'
  nickname = 'Gii';
}
