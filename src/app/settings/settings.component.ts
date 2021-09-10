import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {SharedService} from "../shared/shared.service";

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  idiomas = [{
    idiomaId: 'es',
    idioma: 'Español'
  },{
    idiomaId: 'cat',
    idioma: 'Catalán'
  }, {
    idiomaId: 'en',
    idioma: 'Inglés'
  }];
  generaciones = [
    {
      id: 1,
      numero: 1,
      nombre: '1º de Primaria'
    },
    {
      id: 2,
      numero: 2,
      nombre: '2º de Primaria'
    },
    {
      id: 3,
      numero: 3,
      nombre: '3º de Primaria'
    }
  ];

  idiomaActual: string;
  cursoActual: number;
  @Output() cerrarConfiguraciones: EventEmitter<any> = new EventEmitter<any>();
  constructor(public _sharedService: SharedService) {


  }

  ngOnInit(): void {
    this.idiomaActual = this._sharedService.lenguaje;
    this.cursoActual = this._sharedService.cursoActual;
  }

  guardarCambios(){
    this._sharedService.cursoActual = this.cursoActual;
    this._sharedService.lenguaje = this.idiomaActual;
    this.cerrarOnClick();
  }

  cerrarOnClick(){
    this.cerrarConfiguraciones.emit();
  }
}
