import { SideNavBar } from "../components/SideNavBar"

export const HomePage = () => {
  return (
    <>
      <div className="flex bg-blue-100 dark:bg-[#1f305c]">
        <SideNavBar></SideNavBar>
        <div className="flex mt-6 ms-12 text-blue-400 dark:text-white">
          <h2 className="text-3xl font-bold">Monedita</h2>
        </div>
      </div>
    </>
  )
}
