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
            <li>{{title.name}} ({{title.status}}) - {{title.year}}</li>
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
    name:'Professional Developer | CTD - Digital House',
    status: 'completed',
    year:'Dec.2022'
  },
  {
    id:2,
    name:'Backend Specialist | CTD - Digital House',
    status: 'completed',
    year:'Apr.2024'
  },
  ]
}
