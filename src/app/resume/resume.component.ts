import { Component } from '@angular/core';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css'
})


export class ResumeComponent {
  
  constructor() { }

  descargarCV(): void {
    // Lógica para descargar el CV en inglés
    window.open('/app/resume/resume.pdf', '_blank');
  }

  descargarCVEspanol(): void {
    // Lógica para descargar el CV en español
    window.open('/resume/curriculum.pdf', '_blank');
  }
}