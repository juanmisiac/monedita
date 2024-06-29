import { Header } from "../components/Header"
import { SideNavBar } from "../components/SideNavBar"

export const DolaresPage = () => {
  return (
    <>
      <Header />
      <div className="flex bg-blue-100 dark:bg-[#1f305c]">
        <SideNavBar></SideNavBar>
        <div className="absolute sm:relative flex mt-16 sm:mt-6 ms-16 sm:m-12 text-blue-400 dark:text-white">
          <h2 className="text-3xl font-bold">Dolares</h2>
        </div>
      </div>
    </>
  )
}
