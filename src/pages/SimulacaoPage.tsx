
import { Link, useParams } from 'react-router-dom'
import Card from '../components/Card'
import { useFetchSimulacao } from '../services/SimulacaoService'
import { Simulacao } from '../models/Simulacao'
//import CardResultado from '../components/CardResultado'
import Tabs from '../components/Tab'

function SimulacaoPage() {
  const { prazo, valor } = useParams()

  const valorFinal = Number(valor!.replace('.', '').replace(',', '.'))
  // console.log(valorFinal)
  //alert(valorFinal)
  const entrada = { valorDesejado: valorFinal, prazo: Number(prazo) }
  //const simulacao : any = {data: {codigoProduto:2, descricaoProduto:"produto tal", taxaJuros:2}}//useFetchSimulacao(entrada)
 const simulacao = useFetchSimulacao(entrada)
   console.log(simulacao)

  if(simulacao.isLoading) { 
    return <div className='m-auto max-w-2xl mt-4'>Carregando...</div>
  }

  else if(simulacao.isError) {
    return <div className='m-auto max-w-2xl mt-4'>Erro ao carregar os dados</div>
  }

  else if(simulacao.data.Mensagem) {
    return (
    <>
    <div className='m-auto max-w-2xl mt-4'>
      <Card name={simulacao.data.Mensagem} >
    <Link to="/">
    <button className="inline-block mt-4 rounded bg-gradient-to-r from-sky-700 via-teal-700 to-teal-500 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75">
            <span className="block rounded-sm bg-white px-8 py-3 text-sm font-medium hover:bg-transparent">
              Nova Simulação
            </span>
          </button>
      </Link>
      </Card></div>
      </>
    )
  }
  else {
  const simulacaoData:Simulacao = simulacao.data
  console.log(simulacaoData)

  return (
    <div className='m-auto mt-4 w-[80%]'>
    <Card name="Resultado da sua Simulação" >

    <div className=' grid grid-cols-2'>
      <div className="m-auto col-span-1">
        Codigo do Produto:<br/>  
        <span className="text-2xl font-bold text-gray-800">{simulacaoData.codigoProduto}</span>
        <br/>
        Descrição:<br/>
        <span className="text-2xl font-bold text-gray-800">{simulacaoData.descricaoProduto}</span>
        <br/>
        Taxa de Juros:<br/>
        <span className="text-2xl font-bold text-gray-800">{simulacaoData.taxaJuros}</span>
        <br/>
      </div>
      <div className="m-auto col-span-1">
        Valor do Empréstimo:<br/>
        <span className="text-2xl font-bold text-gray-800">R$ {valor!.toString()}</span>
        <br/>Prazo:<br/>
        <span className="text-2xl font-bold text-gray-800">{prazo} meses</span>
      </div>
    
      
    </div>
    <hr></hr>
    <div className="m-auto ">
      <div className="m-auto ">
      <Tabs resultado={simulacaoData!.resultadoSimulacao!}/>
        {/* <CardResultado resultado={simulacaoData!.resultadoSimulacao!}/> */}
      </div>
      
    </div>
    <Link to="/">
    <button className="inline-block mt-4 rounded bg-gradient-to-r from-sky-700 via-teal-700 to-teal-500 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75">
            <span className="block rounded-sm bg-white px-8 py-3 text-sm font-medium hover:bg-transparent">
              Nova Simulação
            </span>
          </button>  
          </Link>
    </Card>
      </div>
  )}
}

export default SimulacaoPage