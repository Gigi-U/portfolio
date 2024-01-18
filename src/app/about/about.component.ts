import { Component } from '@angular/core';
import { EducationComponent } from '../education/education.component';
import { ResumeComponent } from '../resume/resume.component';
import { ExperienceComponent } from '../experience/experience.component';
import { CertificationsComponent } from '../certifications/certifications.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [ EducationComponent, ExperienceComponent,ResumeComponent, CertificationsComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  name = 'Gisela Urriza'
  nickname = 'Gii';
}
