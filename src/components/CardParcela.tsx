import { Parcela } from '../models/Parcela'

type Props={
  parcelas: Array<Parcela>
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
          <th className="py-1 px-1 border border-gray-300">Número</th>
          <th className="py-1 px-1 border border-gray-300">Valor Amortização</th>
          <th className="py-1 px-1 border border-gray-300">Valor Juros</th>
          <th className="py-1 px-1 border border-gray-300">Valor Prestação</th>
        </tr>
      </thead>
      <tbody>
        {parcelas.map((parcela, index) => (
          <tr key={index}>
            <td className="py-1  border border-gray-300">{parcela.numero}</td>
            <td className="py-1  border border-gray-300">{parcela.valorAmortizacao}</td>
            <td className="py-1  border border-gray-300">{parcela.valorJuros}</td>
            <td className="py-1  border border-gray-300">R$ {parcela.valorPrestacao}</td>
          </tr>
        ))}
      </tbody>
     
    </>
  )
}

export default CardParcela