import { ResultadoSimulacao } from '../models/ResultadoSimulacao'
import CardParcela from './CardParcela'
type Props={
  resultado:ResultadoSimulacao[]
}
const CardResultado =({resultado}:Props) =>{
  console.log('resultado')
  console.log(resultado)
  return (

    <div className=''>
      <table>
      <tr>
      <td>
      <div className="">
      <div className='text-xl font-semibold'>
          {resultado[0].tipo}
          </div>
        <table className="w-full border-collapse mx-2">
          <CardParcela parcelas={resultado![0].parcelas!}/>
        </table>
      </div>
      </td>

      <td>
      <div className="">
      <div className='text-xl font-semibold'>
          {resultado[1].tipo}
          </div>
        <table className=" w-full border-collapse">
          <CardParcela parcelas={resultado[1].parcelas!}/>
        </table>
      </div>
      </td>

      </tr>
      </table>
      </div>
  )}

export default CardResultado