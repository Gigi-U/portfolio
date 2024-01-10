import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  template: `
  <div class="section-container">
    <div class="section-title">
      <h2> PROJECTS</h2>
    </div>
    <div class="horizontal-scroll-container">
      @for (project of projects; track project.id) {
          <li>
            <div class="project-item">
              <div class="project-image-container">
                <img src={{project.img}}>
                <div class="project-tag" [style.background-color]="project.labelColor">
                  <h3>{{project.type}}</h3>
                </div>
              </div>
              <br>
              <div class="project-description">
                <h2>{{ project.name }}</h2> | <p>{{project.status}}<p> <br><br>
                <p>{{ project.details }}</p> <br><br>
                <p>{{project.tags}}</p> 
              </div> 
              <div class="project-links" >
                <a href="{{ project.link1 }}" target="_blank">{{ project.linktext1 }}</a> 
                <a href="{{ project.link2 }}" target="_blank">{{ project.linktext2 }}</a> 
              </div>
            </div>         
          </li>
          <br>
      }@empty {
        Empty list of Projects
      }
    </div>
  </div>

`
  ,  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects = [
    {
      id:1,
      name:'Code Masters Elearning',
      details:'Microservice application with spring boot 3 & keycloak 22',
      status: 'Completed',
      link1:"https://github.com/Gigi-U/keycloak-springboot3-application-part2",
      linktext1:'GitHub',
      link2:"",
      linktext2:'',
      tags: ["#backend","#microservices","#springboot","#java","#keycloak","#mysql"],
      type: 'Back-End', 
      labelColor: 'royalblue', 
      img: '../../assets/gifs/pixel-jeff-clipa-s.gif',
    },
    {
      id:2,
      name:'Golang Dental Clinic',
      details:'CRUD web application for dental clinic. Team of 4',
      status: 'Completed',
      link1:"https://github.com/Gigi-U/golang-dental-clinic-crud",
      linktext1:'GitHub',
      link2:"",
      linktext2:'',
      tags: ["#backend", "#monolitic", "#go", "#gingonic", "#mysql"],
      type: 'Back-End', 
      labelColor: 'royalblue', 
      img: '../../assets/gifs/pixel-jeff-clipa-s.gif',
    },
    {
      id:3,
      name:'Dental System',
      details:'CRUD web application for dental clinic.',
      status: 'In progress',
      link1:"https://github.com/Gigi-U",
      linktext1:'GitHub',
      link2:"",
      linktext2:'',
      tags: ["#backend","#monolitic","#springboot","#java","#thymeleaf","#h2"],
      type: 'Back-End', 
      labelColor: 'royalblue', 
      img: '../../assets/gifs/pixel-jeff-clipa-s.gif',
    },
    {
      id:4,
      name:'Parque App',
      details:'application to practice fullstack skills on Python',
      status: 'In Progress',
      link1:"https://github.com/Gigi-U/golang-dental-clinic-crud",
      linktext1:'GitHub',
      link2:"https://parque.netlify.app/",
      linktext2:'Website',
      tags: ["#fullstack", "#javascript", "#python"],
      type: 'Full-Stack', 
      labelColor: 'yellowgreen', 
      img: '../../assets/gifs/pixel-jeff-clipa-s.gif',
    },    
    {
      id:5,
      name:'StarFriend App',
      details:'App idea to practice  UI skills',
      status: 'In Progress',
      link1:"https://www.figma.com/file/tlKpqG8tbqm2RZgpjjalQl/repo?type=design&node-id=24%3A2504&mode=design&t=ypDLCQc5PiCWdgyP-1",
      linktext1:'Figma',
      link2:"https://www.figma.com/proto/tlKpqG8tbqm2RZgpjjalQl/repo?type=design&node-id=24-2961&t=bK8z5ZNIW1CH5GSd-1&scaling=scale-down&page-id=24%3A2504&starting-point-node-id=24%3A3193&mode=design",
      linktext2:'Prototype',
      tags: ["#ui", "#figma", "#design"],
      type: 'Ux/Ui', 
      labelColor: 'deeppink', 
      img: '../../assets/gifs/pixel-jeff-clipa-s.gif',
    },
    {
      id:6,
      name:'Todo-Front',
      details:'Todo-App to practice  frontend skills',
      status: 'In Progress',
      link1:"https://github.com/Gigi-U",
      linktext1:'GitHub',
      link2:"https://github.com/Gigi-U",
      linktext2:'Website',
      tags: ["#frontend", "#javascript", "#react", "#layout"],
      type: 'Front-End', 
      labelColor: 'darkorchid', 
      img: '../../assets/gifs/pixel-jeff-clipa-s.gif',
    },
    {
      id:7,
      name:'CalmCrew UI',
      details:'App idea to practice  UI skills',
      status: 'In Progress',
      link1:"https://github.com/Gigi-U",
      linktext1:'Figma',
      link2:"https://github.com/Gigi-U",
      linktext2:'Prototype',
      tags: ["#ui", "#figma", "#design"],
      type: 'Ux/Ui', 
      labelColor: 'deeppink', 
      img: '../../assets/gifs/pixel-jeff-clipa-s.gif',
    },
  ]
}

/*  
    labelColor: 'royalblue', if Backend
    labelColor: 'deeppink',  if UI
    labelColor: 'darkorchid',  if frontend
    labelColor: 'yellowgreen',  if full-stack


*/ 
