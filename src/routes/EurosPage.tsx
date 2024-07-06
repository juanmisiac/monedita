import { Header } from "../components/Header"
import { SideNavBar } from "../components/SideNavBar"

export const EurosPage = () => {
  return (
    <>
      <Header />
      <div className="flex bg-white dark:bg-d dark:bg-cover">
        <SideNavBar></SideNavBar>
        <div className="absolute flex mt-16 sm:mt-8 ms-16 sm:ms-28 text-blue-500 dark:text-white">
          <h2 className="text-3xl font-bold">Euros</h2>
        </div>
      </div>
    </>
  )
}
