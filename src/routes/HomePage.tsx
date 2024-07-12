import { Header } from "../components/Header"
import { SideNavBar } from "../components/SideNavBar"
import '../App.css'

export const HomePage = () => {
  return (
    <>
      <Header />
      <div className="flex bg-slate-100 dark:bg-d dark:bg-cover">
        <SideNavBar></SideNavBar>
        <div className="absolute w-4/5 h-4/5 sm:left-18 mt-16 sm:mt-14 ms-10 sm:ms-18 text-blue-500 dark:text-white">
          <div className="flex flex-col items-center sm:flex-row">
            <div className="flex flex-col items-center sm:items-start">
              <h2 className="text-6xl sm:text-9xl font-bold dark:bg-gradient-to-b dark:from-blue-500 dark:to-blue-300 dark:text-transparent dark:bg-clip-text">Monedita</h2>
              <p className="text-1.5xl leading-7 sm:text-4.5xl sm:leading-11 text-center sm:text-left font-bold ms-1 sm:ms-2 mt-2">
                Precios de <span className="text-yellow-500 dark:text-yellow-400">Criptomonedas</span> y <br /><span className="text-green-500">Divisas</span> en tiempo real
              </p>
            </div>
            <div className="hidden container flex-col items-center bg-neutral-200 dark:bg-gray-950 mt-12 sm:mt-0 sm:ms-16 rounded-lg border border-neutral-300 dark:border-neutral-800 shadow-inner">
              <h2 className="text-2xl font-bold">Conversor, Grafico, etc <br />Poner flex despues de container</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
