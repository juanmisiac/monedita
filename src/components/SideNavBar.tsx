import { ArrowLeftFromLine, ArrowRightFromLine } from 'lucide-react';
import { useState } from 'react';

import { Link } from 'react-router-dom';

//type Props = {}

//Hay que hacer un estilo especifico para el boton del sidebar que es el link actual

export const SideNavBar = (/*props: Props*/) => {
  const [expanded, setExpanded] = useState(true) //EN EL FUTURO MEJORAR EL ESTADO DE expanded, NECESITO QUE SEA ESTADO GLOBAL
  return (
    <aside className={`h-screen ${expanded ? "w-72" : "w-18"} duration-150 shadow-lg`}>
      <nav className='h-full flex flex-col bg-blue-200 dark:bg-blue-950'>
        <div className='p-4 pb-2 flex justify-between items-center text-blue-400 dark:text-white font-medium'>
          <h2 className='text-2xl'>{expanded ? `Monedas` : ``}</h2>
          <button
            className='p-1.5 rounded-lg bg-blue-400 dark:bg-blue-900 duration-150 hover:scale-105'
            onClick={() => setExpanded(curr => !curr)}>
            {expanded ? <ArrowLeftFromLine className='text-white' /> : <ArrowRightFromLine className='text-white' />}
          </button>
        </div>
        <div className='flex flex-col px-4'>
          <ul className='text-white dark:text-white font-medium text-xl'>
            <li className='mt-4'>
              <button className={`bg-blue-400 dark:bg-blue-900 px-2 py-1 rounded-lg duration-150 hover:scale-105 ${expanded ? "" : "w-9"}`}>
                <Link to={"/dolares"} className={`${expanded ? "" : "text-xs flex justify-center py-1.5"}`}>{expanded ? `Dolares` : `USD`}</Link>
              </button>
            </li>
            <li className='mt-3'>
              <button className={`bg-blue-400 dark:bg-blue-900 px-2 py-1 rounded-lg duration-150 hover:scale-105 ${expanded ? "" : "w-9"}`}>
                <Link to={"/euros"} className={`${expanded ? "" : "text-xs flex justify-center py-1.5"}`}>{expanded ? `Euros` : `EUR`}</Link>
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </aside>
  )
}