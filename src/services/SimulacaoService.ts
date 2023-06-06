import { useQuery } from 'react-query';
import { EntradaSimulacao } from '../models/EntradaSimulacao';

export function useFetchSimulacao(entrada: EntradaSimulacao) {
  return useQuery(['simulacao',entrada], async() => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({valorDesejado: entrada.valorDesejado, prazo: entrada.prazo})
    };
    return await fetch('https://apphackaixades.azurewebsites.net/api/Simulacao', requestOptions).then(res => res.json());
  });
}
export class SimulacaoService {
  
  public async getProdutos2() {
    try {
      
    } catch (error) {
      
    }
    const response = await fetch('https://apphackaixades.azurewebsites.net/api/Simulacao');
    const data = await response.json();
    return data;
  }
  public async postSimulacao(entrada: EntradaSimulacao) {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({valorDesejado: entrada.valorDesejado, prazo: entrada.prazo})
    };
    const response = await fetch('https://apphackaixades.azurewebsites.net/api/Simulacao', requestOptions);
    const data = await response.json();
    return data;

  }
}