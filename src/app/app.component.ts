import {Component, ViewChild} from '@angular/core';
import {MatDrawerContainer} from "@angular/material/sidenav";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('drawer') drawer: MatDrawerContainer;
  title = 'tarjetas-figma';

  constructor(){

  }

  abrirConfig(){
    this.drawer.open();
  }

  cerrarConfig(){
    this.drawer.close();
  }
}
