import { Component } from '@angular/core';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [],
  template: `
  <div class="section-container">
    <p>EDUCATION</p>
      <ul>
        @for (title of titles; track title.id) {
            <li>{{title.name}}</li>
        }
      </ul>
  </div>
  `
  ,
  styleUrl: './education.component.css'
})
export class EducationComponent {
  titles = [
    {
      id:1,
      name:'CTD - professional Developer',
      status: 'completed',
    },
    {
      id:2,
      name:'CTD - Backend Specialist',
      status: ' in progress',
    },
/*     {
      id:3,
      name:'Tecnico Superior en Desarrollo de Software',
      status: 'in progress',
    } */
  ]
}
