import { Header } from "../components/Header"
import { SideNavBar } from "../components/SideNavBar"
import { TablaDeValores } from "../components/TablaDeValores"

export const DolaresPage = () => {
  return (
    <>
      <Header />
      <div className="flex bg-slate-100 dark:bg-d dark:bg-cover">
        <SideNavBar></SideNavBar>
        <div className="absolute flex flex-col items-center sm:items-start">
          <h2 className="text-3xl font-bold text-blue-500 dark:text-white mt-4 sm:mt-8 sm:ms-28">Dólares</h2>
          <TablaDeValores></TablaDeValores>
        </div>
      </div>
    </>
  )
}
