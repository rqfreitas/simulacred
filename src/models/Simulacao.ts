import { ResultadoSimulacao } from "./ResultadoSimulacao";

export interface Simulacao {
  codigoProduto: number;
  descricaoProduto: string;
  taxaJuros: number;
  resultadoSimulacao?: Array<ResultadoSimulacao>;
}
