import React from 'react'
import Card from '../components/Card'

import { NumericFormat } from 'react-number-format'
import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate()
  const [valor, setValor] = React.useState(0)
  const [prazo, setPrazo] = React.useState(0)

  const handleSimulacao = ( ) => {
    navigate(`/simulacao/${prazo}/${valor}`);
    window.location.reload();
    
  }
  const handleValor = (e: any) => {
    //const floatValue = (e.target.value).replace('R$', '')//.replace('.', '').replace(',', '.');
    setValor((e.target.value).replace('R$', ''));
    //console.log(e.target.value)
  }
  
  const handlePrazo = (e: any) => {
    setPrazo(e.target.value);
  }

  return (
    <div className='m-auto max-w-2xl mt-4'>
      <Card name="Simule o seu Empréstimo" >
        <div>
        <div className="m-auto">
      Valor:<br/>
    <NumericFormat
    thousandSeparator="."
    decimalSeparator=","
    prefix="R$"
    decimalScale={2}
    fixedDecimalScale={true}
    allowNegative={false}
    //allowEmptyFormatting={false}
    className="w-[50%] py-2 my-1 mx-auto px-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
    placeholder="R$0,00"
    onChange={handleValor}
    />
    <br/>
    Prazo(meses):<br/>
    <input
  type="number"
  onChange={handlePrazo}
  min="1"
  className="w-[50%] py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
  placeholder="Prazo"
/>

  </div>
          <div className=" m-4">
          <button onClick={handleSimulacao} className="inline-block rounded bg-gradient-to-r from-sky-700 via-teal-700 to-teal-500 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75">
            <span className="block rounded-sm bg-white px-8 py-3 text-sm font-medium hover:bg-transparent">
              Simular
            </span>
          </button>
          </div>
          </div>
        </Card>
      </div>
      
  )
}

export default Home