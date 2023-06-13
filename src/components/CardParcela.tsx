import { Parcela } from '../models/Parcela'

type Props={
  parcelas: Array<Parcela>
}

function formatCurrency(valor:number) {
  const formattedNumber = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
  }).format(valor);
  
  return formattedNumber;
}

const CardParcela = ({parcelas}:Props) => {
  // pumero: number;
  // valorAmortizacao: number;
  // valorJuros: number;
  // valorPrestacao: number;
  return (
    <>
      <thead>
        <tr>
          <th className="py-1 px-1 border border-gray-300">Parcela</th>
          <th className="py-1 px-1 border border-gray-300">Valor Amortização</th>
          <th className="py-1 px-1 border border-gray-300">Valor Juros</th>
          <th className="py-1 px-1 border border-gray-300">Valor Prestação</th>
        </tr>
      </thead>
      <tbody>
        {parcelas.map((parcela, index) => (
          <tr key={index}>
            <td className="py-1  border border-gray-300 m-auto text-center">{parcela.numero}</td>
            <td className="py-1  border border-gray-300 m-auto text-center">{formatCurrency(parcela.valorAmortizacao)}</td>
            <td className="py-1  border border-gray-300 text-center">{formatCurrency(parcela.valorJuros)}</td>
            <td className="py-1  border border-gray-300 text-center">{formatCurrency(parcela.valorPrestacao)}</td>
          </tr>
        ))}
      </tbody>
     
    </>
  )
}

export default CardParcela