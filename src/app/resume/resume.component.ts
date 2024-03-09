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
    link.href = 'https://drive.google.com/file/d/1UL9mfen-fsdO2PeInKLI2JfvXYz5YVlf/view?usp=sharing'; 
    link.target = "_blank";
    link.download = 'resumeUrrizaGisela.pdf';
    link.click();
  }

  descargarCVEspanol(): void {
    const link = document.createElement('a');
    link.href = 'https://drive.google.com/file/d/1UL9mfen-fsdO2PeInKLI2JfvXYz5YVlf/view?usp=sharing'; 
    link.target = "_blank";
    link.download = 'cvUrrizaGisela.pdf';
    link.click();
  }
}