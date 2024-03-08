import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  template: `
  <div class="header-container">
    <div class="section-title">
      <h1> Hey I am <span>{{name.toUpperCase()}}</span></h1>
      <h2> a Software Developer based in Argentina</h2>  
    </div> 
    <div class="social-icons">
        <a href="https://www.linkedin.com/in/giselaurriza/" target="_blank" title="LinkedIn">
        <img src="./assets/icons/linkedin.png" alt="photo"> 
        </a>
        <a href="https://github.com/Gigi-U" target="_blank" title="GitHub">
          <img src="./assets/icons/github.png" alt="photo"> 
        </a>

        <a href="https://twitter.com/GiiUrriza" target="_blank" title="Twitch">
          <img src="./assets/icons/twitter.png" alt="photo"> 
        </a>

        <a href="https://www.twitch.tv/giidev" target="_blank" title="Twitch">
          <img src="./assets/icons/twitch.png" alt="photo"> 
        </a>
      </div>
  </div> 
 `, 
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  name = 'Gisela Urriza'
  nickname = 'Gii';
}
