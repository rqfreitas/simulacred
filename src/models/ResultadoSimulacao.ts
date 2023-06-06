import { Parcela } from "./Parcela";

export interface ResultadoSimulacao {
  tipo?: string;
  parcelas?: Array<Parcela>;
}