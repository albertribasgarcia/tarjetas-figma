import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Sesion} from "../../shared/modelos/sesion.model";
import {SharedService} from "../../shared/shared.service";
import {Trimestre} from "../../shared/modelos/trimestre.model";
import {Curso} from "../../shared/modelos/curso.model";

@Component({
  selector: 'ultimo-visto',
  templateUrl: './ultimo-visto.component.html',
  styleUrls: ['./ultimo-visto.component.css']
})
export class UltimoVistoComponent implements OnInit {

  trimestre: Trimestre;
  @Input() sesion: Sesion;
  @Output() accionUltimoVisto: EventEmitter<any> = new EventEmitter<any>();
  constructor(private _sharedService: SharedService) {

  }

  ngOnInit(): void {
    let indexCurso = this._sharedService.cursos.findIndex((curso: Curso) => curso.generacion == this._sharedService.cursoActual);
    let indexTrimestre = this._sharedService.cursos[indexCurso].trimestres.findIndex((trim: Trimestre) => trim.id = this.sesion.trimestreId);
    this.trimestre = this._sharedService.cursos[indexCurso].trimestres[indexTrimestre];
  }

  emitAccionUltimoVisto(accion: number){
    this.accionUltimoVisto.emit({modo: accion, trimestre: this.trimestre});
  }
}
