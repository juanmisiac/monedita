import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ArrowLeftFromLine, ArrowRightFromLine, Minus } from 'lucide-react';

export const SideNavBar = () => {
  const [expanded, setExpanded] = useState(false) //EN EL FUTURO MEJORAR EL ESTADO DE expanded, NECESITO QUE SEA ESTADO GLOBAL
  return (
    <aside className={`h-screen ${expanded ? "w-72" : "w-18"} duration-150 sm:shadow-md z-30`}>
      <nav className={`h-full flex flex-col sm:bg-white/80 sm:dark:bg-blue-950/80 border-r ${expanded ? "bg-white/80 dark:bg-blue-950/80 backdrop-blur-sm" : ""}`}>
        <div className='p-4 pb-2 flex justify-between items-center text-blue-500 dark:text-white font-medium'>
          <h2 className='text-2xl'>{expanded ? `Monedas` : ``}</h2>
          <button
            className='p-1.5 rounded-lg bg-white dark:bg-blue-900 border border-neutral-300 duration-150 hover:border-neutral-400 shadow-xl'
            onClick={() => setExpanded(curr => !curr)}>
            {expanded ? <ArrowLeftFromLine className='text-blue-500' /> : <ArrowRightFromLine className='text-blue-500' />}
          </button>
        </div>
        <div className={`${expanded ? "" : "hidden"} sm:flex px-4`}>
          <ul className='text-blue-500 dark:text-white font-normal text-xl'>
            <li className='mt-3'>
              <button className={`bg-white dark:bg-blue-900 border border-neutral-300 px-2 py-1 rounded-lg duration-150 hover:border-neutral-400 shadow-xl ${expanded ? "" : "w-9"}`}>
                <NavLink to={"/dolar"} className={`${expanded ? "" : "text-xs flex justify-center py-1.5"}`}>{expanded ? `Dólar` : `USD`}</NavLink>
              </button>
            </li>
            <li className='mt-3'>
              <button className={`bg-white dark:bg-blue-900 border border-neutral-300 px-2 py-1 rounded-lg duration-150 hover:border-neutral-400 shadow-xl ${expanded ? "" : "w-9"}`}>
                <NavLink to={"/euro"} className={`${expanded ? "" : "text-xs flex justify-center py-1.5"}`}>{expanded ? `Euro` : `EUR`}</NavLink>
              </button>
            </li>
            <li className='mt-3'>
              <button className={`bg-white dark:bg-blue-900 border border-neutral-300 px-2 py-1 rounded-lg duration-150 hover:border-neutral-400 shadow-xl ${expanded ? "" : "w-9"}`}>
                <NavLink to={"/real"} className={`${expanded ? "" : "text-xs flex justify-center py-1.5"}`}>{expanded ? `Real` : `BRL`}</NavLink>
              </button>
            </li>
            <li className='mt-3'>
              <button className={`bg-white dark:bg-blue-900 border border-neutral-300 px-2 py-1 rounded-lg duration-150 hover:border-neutral-400 shadow-xl ${expanded ? "" : "w-9"}`}>
                <NavLink to={"/peso-chileno"} className={`${expanded ? "" : "text-xs flex justify-center py-1.5"}`}>{expanded ? `Peso Chileno` : `CLP`}</NavLink>
              </button>
            </li>
            <li className='mt-3'>
              <button className={`bg-white dark:bg-blue-900 border border-neutral-300 px-2 py-1 rounded-lg duration-150 hover:border-neutral-400 shadow-xl ${expanded ? "" : "w-9"}`}>
                <NavLink to={"/peso-uruguayo"} className={`${expanded ? "" : "text-xs flex justify-center py-1.5"}`}>{expanded ? `Peso Uruguayo` : `UYU`}</NavLink>
              </button>
            </li>
          </ul>
        </div>
        <div className={`${expanded ? "p-4 pb-2" : "mt-3 ms-5.5"} flex justify-between items-center text-blue-500 dark:text-white font-medium`}>
          <h2 className={`${expanded ? "text-2xl" : "hidden sm:flex" }`}>{expanded ? `Criptos` : <Minus />}</h2>
        </div>
        <div className={`${expanded ? "" : "hidden"} sm:flex px-4`}>
          <ul className='text-blue-500 dark:text-white font-normal text-xl'>
            <li className='mt-3'>
              <button className={`bg-white dark:bg-blue-900 border border-neutral-300 px-2 py-1 rounded-lg duration-150 hover:border-neutral-400 shadow-xl ${expanded ? "" : "w-9"}`}>
                <NavLink to={"/bitcoin"} className={`${expanded ? "" : "text-xs flex justify-center py-1.5"}`}>{expanded ? `Bitcoin` : `BTC`}</NavLink>
              </button>
            </li>
            <li className='mt-3'>
              <button className={`bg-white dark:bg-blue-900 border border-neutral-300 px-2 py-1 rounded-lg duration-150 hover:border-neutral-400 shadow-xl ${expanded ? "" : "w-9"}`}>
                <NavLink to={"/ethereum"} className={`${expanded ? "" : "text-xs flex justify-center py-1.5"}`}>{expanded ? `Ethereum` : `ETH`}</NavLink>
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </aside>
  )
}