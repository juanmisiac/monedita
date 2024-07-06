import { Header } from "../components/Header"
import { SideNavBar } from "../components/SideNavBar"

export const ChilenosPage = () => {
  return (
    <>
      <Header />
      <div className="flex bg-white dark:bg-[#1f305c]">
        <SideNavBar></SideNavBar>
        <div className="absolute flex mt-16 sm:mt-8 ms-16 sm:ms-28 text-blue-500 dark:text-white">
          <h2 className="text-3xl font-bold">Pesos Chilenos</h2>
        </div>
      </div>
    </>
  )
}
