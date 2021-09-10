import {Component, Input, OnInit} from '@angular/core';
import {Trimestre} from "../../shared/modelos/trimestre.model";
import {Sesion} from "../../shared/modelos/sesion.model";

@Component({
  selector: 'lista-reproduccion',
  templateUrl: './lista-reproduccion.component.html',
  styleUrls: ['./lista-reproduccion.component.css']
})
export class ListaReproduccionComponent implements OnInit {

  @Input() trimestre: Trimestre;
  @Input() seleccionado: Sesion;
  constructor() { }

  ngOnInit(): void {
  }

  cambiarSeleccionado(item: Sesion){
    this.seleccionado = item;
  }
}
