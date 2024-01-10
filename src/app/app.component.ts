import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './commons/footer/footer.component';
import { HeaderComponent } from './commons/header/header.component';

@Component({ //  "decorador" es un patrón. lo esta implementando typescript x js. afecta a la clase AppComponent
  selector: 'app-root',  // este componente es el que envuelve a todos. es el <app-root> que se ve en el html
  standalone: true,  // indica que si quiero importar cualquier componente lo debo hacer en la línera 8
  imports: [CommonModule, RouterOutlet,HeaderComponent, HomeComponent, FooterComponent],
  template: `
  <app-header/>
  <app-home/>
  <app-footer/>
 `,  // es lo que renderiza. puede estar aqui o en un archivo externo
  styleUrl: `app.component.css`, 
  //styles: ``, // aquí pueden ir los estilos si la app es muy chica. siempre es preferible en un archivo aparte.
})

export class AppComponent {
}

//& para crear componentes vamos a la terminal y ponemos: ng generate component nombre-de-componente

// crea automáticamente css htm, el archivo , tests, todo en una carpeta
// debo meter el componente donde sea que lo quiero. 

// si al final le pongo --dry-run me muestra lo que haría si corre el comando pero no lo hace en realidad. 