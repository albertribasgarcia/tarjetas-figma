import {Sesion} from "./sesion.model";

export interface Trimestre {
  id: number,
  numero: number,
  numSesiones: number,
  progreso: number,
  sesiones?: Sesion[],
  cursoId: number,
}
