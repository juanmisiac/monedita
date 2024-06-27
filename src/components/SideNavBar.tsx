import { ArrowLeftFromLine, ArrowRightFromLine } from 'lucide-react';
import { useState } from 'react';

//type Props = {}

export const SideNavBar = (/*props: Props*/) => {
  const [expanded, setExpanded] = useState(true)
  return (
    <aside className={`h-screen ${expanded ? "w-72" : "w-18"} duration-150`}>
      <nav className='h-full flex flex-col bg-blue-200 dark:bg-blue-950'>
        <div className='p-4 pb-2 flex justify-between items-center text-blue-400 dark:text-white font-medium'>
          <h2 className='text-xl drop-shadow-sm'>{expanded ? `Monedas` : ``}</h2>
          <button
            className='p-1.5 rounded-lg bg-blue-400 dark:bg-blue-900 duration-150 hover:scale-110'
            onClick={() => setExpanded(curr => !curr)}>
            {expanded ? <ArrowLeftFromLine className='text-white' /> : <ArrowRightFromLine className='text-white' />}
          </button>
        </div>
      </nav>
    </aside>
  )
}