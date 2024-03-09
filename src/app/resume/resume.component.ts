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
    link.href = 'https://drive.google.com/file/d/1B1_5Sk1QiYM321shWd8LoQr75QfBuliL/view?usp=sharing'; 
    link.target = "_blank";
    link.download = 'resumeUrrizaGisela.pdf';
    link.click();
  }

  descargarCVEspanol(): void {
    const link = document.createElement('a');
    link.href = 'https://drive.google.com/file/d/1ApG34qBwYQ_oUZmlwaOP50UZbU5nU9PU/view?usp=sharing'; 
    link.target = "_blank";
    link.download = 'cvUrrizaGisela.pdf';
    link.click();
  }
}