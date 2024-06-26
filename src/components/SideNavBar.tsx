import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

export const SideNavBar = () => {
  const [expanded, setExpanded] = useState(true)
  return (
    <aside className={`h-screen ${expanded ? "w-72" : "w-18"} duration-150`}>
      <nav className='h-full flex flex-col bg-blue-200 dark:bg-blue-950 border-r'>
        <div className='p-4 pb-2 flex justify-between items-center text-blue-400 dark:text-white font-medium'>
          <h2 className='text-xl'>{expanded ? `Monedas` : ``}</h2>
          <button
            className='p-1.5 rounded-lg bg-blue-300 dark:bg-blue-900 hover:bg-blue-400 dark:hover:bg-blue-800 duration-150 hover:scale-110'
            onClick={() => setExpanded(curr => !curr)}>
            {expanded ? <ChevronLeft className='text-white' /> : <ChevronRight className='text-white' />}
          </button>
        </div>
      </nav>
    </aside>
  )
}
