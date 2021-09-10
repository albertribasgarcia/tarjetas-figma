import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Curso} from "./modelos/curso.model";
import {Trimestre} from "./modelos/trimestre.model";
import {Sesion} from "./modelos/sesion.model";


@Injectable()
export class SharedService {

  private _modoReproduccion: number;
  private _lenguaje: string;
  private _cursoActual: number;
  private _cursos: Curso[];

  constructor(public _httpClient: HttpClient){
    this.lenguaje = "es";
    this.cursoActual = 3;
    this.getJSON().subscribe(data =>{
      this.cursos = data;
    });
  }
  public getJSON(): Observable<any> {
    return this._httpClient.get("./assets/dataMock.json");
  }

  buscarUltimaSesion(data: Curso[], curso: number): Sesion | undefined{
    let ultimaSesion: Sesion;
    let ultimaFecha = 0;
    for (let trimestre of data[curso].trimestres){
      for (let sesion of trimestre.sesiones!){
        if (sesion.fechaVisto > ultimaFecha) {
          ultimaFecha = sesion.fechaVisto;
          ultimaSesion = sesion;
        }
      }
    }
    if (ultimaFecha === 0) return undefined;
    return ultimaSesion!;
  }

  get cursoActual(): number {
    return this._cursoActual;
  }

  set cursoActual(value: number) {
    this._cursoActual = value;
  }
  get lenguaje(): string {
    return this._lenguaje;
  }

  set lenguaje(value: string) {
    this._lenguaje = value;
  }
  get modoReproduccion(): number {
    return this._modoReproduccion;
  }

  set modoReproduccion(value: number) {
    this._modoReproduccion = value;
  }
  get cursos(): Curso[] {
    return this._cursos;
  }

  set cursos(value: Curso[]) {
    this._cursos = value;
  }
}
