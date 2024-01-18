import { Component } from '@angular/core';

@Component({
  selector: 'app-certifications',
  standalone: true,
  imports: [],
  template:  `
  <div class="section-container">
    <p>CERTIFICATIONS</p>
      <ul>
        @for (title of titles; track title.id) {
            <li>{{title.name}} ({{title.status}})</li>
        }
      </ul>
  </div>
  `,
  styleUrl: './certifications.component.css'
})
export class CertificationsComponent {
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
  ]
}
