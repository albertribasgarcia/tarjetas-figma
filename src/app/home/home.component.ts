import {Component, OnDestroy, OnInit} from '@angular/core';
import {Curso} from "../shared/modelos/curso.model";
import {MatDialog} from "@angular/material/dialog";
import {DialogAntesEmpezarComponent} from "./dialog-antes-empezar/dialog-antes-empezar.component";
import {Usuario} from "../shared/modelos/usuario.model";
import {Router} from "@angular/router";
import {SharedService} from "../shared/shared.service";
import {Subscription} from "rxjs";
import {Sesion} from "../shared/modelos/sesion.model";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  usuario: Usuario;
  cursos: Curso[];
  ultimoVisto: boolean = false;
  ultimaSesion: Sesion | undefined;
  subscripciones: Subscription[];
  constructor(public _dialog: MatDialog,
              private _router: Router,
              private _sharedService: SharedService) {
    this.subscripciones = [];
    this.subscripciones.push(this._sharedService.getJSON().subscribe(
      data => {
        this.cursos = data;
        this._sharedService.cursos = data;
        this.ultimaSesion = this._sharedService.buscarUltimaSesion(this.cursos, this.cursos.findIndex((curso: Curso) => curso.generacion == this._sharedService.cursoActual)); //
        this.ultimoVisto = !(this.ultimaSesion == undefined);
      }
    ));
  }

  ngOnInit(): void {
  }

  abrirDialogoAntesDeEmpezar(obj: any) {
    const dialogRef = this._dialog.open(DialogAntesEmpezarComponent);
    dialogRef.afterClosed().subscribe(next =>{
      if (next){
        this._sharedService.modoReproduccion = obj.modo;
        this._router.navigateByUrl('/desglose-sesion/'+obj.trimestre.id, {skipLocationChange: true});
      }
    });
  }

  ngOnDestroy(): void{
    for (let subscripcion of this.subscripciones){
      if (subscripcion) subscripcion.unsubscribe();
    }
  }
}
