import { Component, OnInit } from '@angular/core';
import {SharedService} from "../shared/shared.service";
import {Trimestre} from "../shared/modelos/trimestre.model";
import {ActivatedRoute, Router} from "@angular/router";
import {Curso} from "../shared/modelos/curso.model";
import {Subscription} from "rxjs";
import {ModoReproduccion} from "../shared/constantes/modo-reproduccion";
import {Sesion} from "../shared/modelos/sesion.model";

@Component({
  selector: 'desglose-sesion',
  templateUrl: './desglose-sesion.component.html',
  styleUrls: ['./desglose-sesion.component.css']
})
export class DesgloseSesionComponent implements OnInit {

  titulos = ['Fracciones', 'Ordinales', 'Geometria', 'Decimales', 'Potencias'];
  trimestreId: number;
  trimestre: Trimestre;
  sesionSeleccionada: Sesion;
  modoReproduccion: number;

  subscripciones: Subscription[];
  constructor(private _sharedService: SharedService,
              private _route: ActivatedRoute,
              private _router: Router) {
    this.subscripciones = [];
    this._route.params.subscribe(data =>{
      this.trimestreId = data['trimestreId'];
    });
    this.subscripciones.push(this._sharedService.getJSON().subscribe(
      (data:Curso[]) =>{

        this.trimestre = data[0].trimestres.find((item:Trimestre) => item.id == this.trimestreId)!;
        this.sesionSeleccionada = this.trimestre.sesiones![0];
        this.trimestre.sesiones?.forEach((sesion: Sesion) => {
          if (sesion.fechaVisto != null && sesion.fechaVisto >= this.sesionSeleccionada.fechaVisto)
            this.sesionSeleccionada = sesion;
        });
        this.modoReproduccion = this._sharedService.modoReproduccion;
        switch(this.modoReproduccion){
          case ModoReproduccion.reproducir:
            break;
          case ModoReproduccion.aleatorio:
            let x = Math.floor(Math.random() * (this.trimestre.numSesiones));
            this.sesionSeleccionada = this.trimestre.sesiones![x];
            break;
          case ModoReproduccion.siguiente:
            let index = this.trimestre.sesiones!.findIndex((sesion: Sesion) => sesion.id == this.sesionSeleccionada.id);
            if (index == this.trimestre.sesiones!.length - 1) this.sesionSeleccionada = this.trimestre.sesiones![index];
            else this.sesionSeleccionada = this.trimestre.sesiones![index+1];
            break;
          case ModoReproduccion.reiniciar:
            this.sesionSeleccionada = this.trimestre.sesiones![0];
            break;
          default: break;
        }

      }
    ));

  }

  ngOnInit(): void {
    /*let id = 1;
    let nombre = "";
    let visto = true;
    let fechaVisto = 1631106000;
    let link = "https";
    let trimestreId = 1;
    let array = [];
    let trimestres = [];
    for (let j = 1; j<=3; j++) {
      for (let i = 1; i <= 50; i++) {
        array.push(
          {
            id: i + ((j-1)*50),
            nombre: this.generarTitulo(nombre),
            visto: i < this.vistos(j),
            fechaVisto: i < this.vistos(j) ? fechaVisto + i * 10000 : null,
            link: link,
            trimestreId: j
          }
        )
      }
      trimestres.push(array);
      array = [];
    }
    console.log(trimestres);*/
  }

  /*vistos(j:number): number{
    switch(j){
      case 1: return 50;
      case 2: return 30;
      case 3: return 0;
      default:return 0;
    }
  }

  generarTitulo(str: string): string{
    let r = Math.floor(Math.random() * (5));
    if (r === 4 && str !== '') return str;
    else{
      return this.generarTitulo(str.concat(this.titulos[r]) + " ");
    }
  }*/

  atras(){
    this._router.navigateByUrl("/home");
  }
}
