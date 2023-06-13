import  { useState } from 'react';
import { ResultadoSimulacao } from '../models/ResultadoSimulacao';
import CardParcela from './CardParcela';

type Props={
  resultado:ResultadoSimulacao[]
}

const Tabs = ({resultado}:Props) => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber:number) => {
    setActiveTab(tabNumber);
  };

  return (
    <div className="w-full">
      <div className="flex border-b border-gray-300">
        <button
          className={`py-2 px-4 font-semibold ${
            activeTab === 1 ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-600'
          }`}
          onClick={() => handleTabClick(1)}
        >
          {resultado[0].tipo}
        </button>
        <button
          className={`py-2 px-4 font-semibold ${
            activeTab === 2 ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-600'
          }`}
          onClick={() => handleTabClick(2)}
        >
          {resultado[1].tipo}
        </button>
      </div>
      <div className="mt-4">
        {activeTab === 1 &&
         <div className="p-4 bg-white">
          <table className="m-auto border-collapse mx-2">
            <CardParcela parcelas={resultado![0].parcelas!}/>
          </table>
          </div>}
        {activeTab === 2 &&
         <div className="p-4 bg-white">
          <table className="m-auto border-collapse mx-2">
            <CardParcela parcelas={resultado![1].parcelas!}/>
          </table>
        </div>}
      </div>
    </div>
  );
};

export default Tabs;