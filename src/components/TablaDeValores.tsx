import { Valores } from './Valores'
import { useState, useEffect } from 'react'

type Data = {
  nombre: string
  compra: number
  venta: number
}

export const TablaDeValores = () => {
  const [data, setData] = useState<Data[]>([])

  const classProp: string = "flex flex-col sm:flex-row justify-between items-center bg-neutral-100 dark:bg-black m-2 px-2 py-1 rounded-lg border border-neutral-300 dark:border-neutral-700 hover:border-neutral-400 dark:hover:border-neutral-500 hover:cursor-pointer text-blue-500 dark:text-white"

  useEffect(() => {
    fetch("https://dolarapi.com/v1/dolares")
      .then(response => response.json())
      .then(data => setData(data))
  }, []);

  return (
    <section className='bg-neutral-200 dark:bg-[#010101] mt-6 sm:mx-4 ms-7 sm:ms-28 p-2 w-[85vw] sm:w-[32vw] rounded-lg border border-neutral-300 dark:border-neutral-800'>
      {data.map((data, index) => (
        <Valores 
          key={index}
          class={classProp}
          dolarType={data.nombre}
          buyValue={data.compra}
          sellValue={data.venta}
        />
      ))}
    </section>
  )
}
