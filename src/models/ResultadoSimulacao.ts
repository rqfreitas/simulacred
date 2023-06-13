import { Parcela } from "./Parcela";

export interface ResultadoSimulacao {
  [x: string]: any;
  tipo?: string;
  parcelas?: Array<Parcela>;
}