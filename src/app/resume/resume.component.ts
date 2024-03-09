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
    const link = document.createElement('a');
    link.href = '/resume/files/resume.pdf'; 
    link.download = 'resumeUrrizaGisela.pdf';
    link.click();
  }

  descargarCVEspanol(): void {
    const link = document.createElement('a');
    link.href = '../../resume/files/curriculum.pdf'; 
    link.download = 'cvUrrizaGisela.pdf';
    link.click();
  }
}