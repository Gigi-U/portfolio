import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AboutComponent } from '../about/about.component';
import { ProjectsComponent } from '../projects/projects.component';
import { SkillsComponent } from '../skills/skills.component';
import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, AboutComponent,ProjectsComponent, SkillsComponent, ContactComponent],
  template: `  
   <!-- <div class="popup-overlay" *ngIf="isDevelopmentMode">
    <div class="popup-container">
      <span>🚧Under Development👷🏽‍♀️🔧</span>
      <button (click)="closePopup()">Close</button>
    </div>
  </div>  -->
  <app-about/>  
  <app-projects/>
  <app-skills/>
  <app-contact/>
  <br><b>
  <p>Stuff I listen to while coding</p><br>
  <iframe width="100%"  src="https://www.youtube.com/embed/playlist?list=PLJ3gHjGOJjav2pStUQn5-REejgnvLZKIv&si=860xmzyj4neib4Xx" frameborder="0" allowfullscreen></iframe>
 `, 
  styleUrl: './home.component.css'
})
export class HomeComponent {
  isDevelopmentMode = false; // Inicialmente, no mostrar el popup

  ngOnInit(): void {
    // Mostrar el popup después de 3000 milisegundos (3 segundos)
    setTimeout(() => {
      this.isDevelopmentMode = true;
    }, 2000);
  }

  closePopup(): void {
    this.isDevelopmentMode = false;
  }
}
