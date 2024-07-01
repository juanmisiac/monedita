import { ArrowLeftFromLine, ArrowRightFromLine } from 'lucide-react';
import { useState } from 'react';

import { Link } from 'react-router-dom';

//type Props = {}

//Hay que hacer un estilo especifico para el boton del sidebar que es el link actual

export const SideNavBar = (/*props: Props*/) => {
  const [expanded, setExpanded] = useState(false) //EN EL FUTURO MEJORAR EL ESTADO DE expanded, NECESITO QUE SEA ESTADO GLOBAL
  return (
    <aside className={`h-screen ${expanded ? "w-72" : "w-18"} duration-150 sm:shadow-lg z-30`}>
      <nav className={`h-full flex flex-col sm:bg-blue-200/80 sm:dark:bg-blue-950/80 ${expanded ? "bg-blue-200/80 dark:bg-blue-950/80 backdrop-blur-sm" : ""}`}>
        <div className='p-4 pb-2 flex justify-between items-center text-blue-400 dark:text-white font-medium'>
          <h2 className='text-2xl'>{expanded ? `Monedas` : ``}</h2>
          <button
            className='p-1.5 rounded-lg bg-blue-400 dark:bg-blue-900 duration-150 hover:scale-105 shadow-xl'
            onClick={() => setExpanded(curr => !curr)}>
            {expanded ? <ArrowLeftFromLine className='text-white' /> : <ArrowRightFromLine className='text-white' />}
          </button>
        </div>
        <div className={`${expanded ? "" : "hidden"} sm:flex px-4`}>
          <ul className='text-white dark:text-white font-medium text-xl'>
            <li className='mt-3'>
              <button className={`bg-blue-400 dark:bg-blue-900 px-2 py-1 rounded-lg duration-150 hover:scale-105 shadow-xl ${expanded ? "" : "w-9"}`}>
                <Link to={"/dolar"} className={`${expanded ? "" : "text-xs flex justify-center py-1.5"}`}>{expanded ? `Dólar` : `USD`}</Link>
              </button>
            </li>
            <li className='mt-3'>
              <button className={`bg-blue-400 dark:bg-blue-900 px-2 py-1 rounded-lg duration-150 hover:scale-105 shadow-xl ${expanded ? "" : "w-9"}`}>
                <Link to={"/euro"} className={`${expanded ? "" : "text-xs flex justify-center py-1.5"}`}>{expanded ? `Euro` : `EUR`}</Link>
              </button>
            </li>
            <li className='mt-3'>
              <button className={`bg-blue-400 dark:bg-blue-900 px-2 py-1 rounded-lg duration-150 hover:scale-105 shadow-xl ${expanded ? "" : "w-9"}`}>
                <Link to={"/real"} className={`${expanded ? "" : "text-xs flex justify-center py-1.5"}`}>{expanded ? `Real` : `BRL`}</Link>
              </button>
            </li>
            <li className='mt-3'>
              <button className={`bg-blue-400 dark:bg-blue-900 px-2 py-1 rounded-lg duration-150 hover:scale-105 shadow-xl ${expanded ? "" : "w-9"}`}>
                <Link to={"/peso-chileno"} className={`${expanded ? "" : "text-xs flex justify-center py-1.5"}`}>{expanded ? `Peso Chileno` : `CLP`}</Link>
              </button>
            </li>
            <li className='mt-3'>
              <button className={`bg-blue-400 dark:bg-blue-900 px-2 py-1 rounded-lg duration-150 hover:scale-105 shadow-xl ${expanded ? "" : "w-9"}`}>
                <Link to={"/peso-uruguayo"} className={`${expanded ? "" : "text-xs flex justify-center py-1.5"}`}>{expanded ? `Peso Uruguayo` : `UYU`}</Link>
              </button>
            </li>
          </ul>
        </div>
        <div className={`${expanded ? "p-4 pb-2" : ""} flex justify-between items-center text-blue-400 dark:text-white font-medium`}>
          <h2 className='text-2xl'>{expanded ? `Criptos` : ``}</h2>
        </div>
        <div className={`${expanded ? "" : "hidden"} sm:flex px-4`}>
          <ul className='text-white dark:text-white font-medium text-xl'>
            <li className='mt-3'>
              <button className={`bg-blue-400 dark:bg-blue-900 px-2 py-1 rounded-lg duration-150 hover:scale-105 shadow-xl ${expanded ? "" : "w-9"}`}>
                <Link to={"/bitcoin"} className={`${expanded ? "" : "text-xs flex justify-center py-1.5"}`}>{expanded ? `Bitcoin` : `BTC`}</Link>
              </button>
            </li>
            <li className='mt-3'>
              <button className={`bg-blue-400 dark:bg-blue-900 px-2 py-1 rounded-lg duration-150 hover:scale-105 shadow-xl ${expanded ? "" : "w-9"}`}>
                <Link to={"/ethereum"} className={`${expanded ? "" : "text-xs flex justify-center py-1.5"}`}>{expanded ? `Ethereum` : `ETH`}</Link>
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </aside>
  )
}