import {Trimestre} from "./trimestre.model";

export interface Curso{
  id: number,
  asignatura: string,
  generacion: number,
  trimestres: Trimestre[],
}
