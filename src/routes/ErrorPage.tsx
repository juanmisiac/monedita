export const ErrorPage = () => {
  return (
    <>
      <div className="h-screen flex flex-col justify-center items-center bg-slate-950">
        <h3 className="text-white font-extrabold text-4xl">Error! 🙈</h3>
        <p className="text-white font-semibold text-xl mt-3">La pagina no existe</p>
        <button className="bg-blue-500 text-white font-semibold p-2 mt-4 rounded-md hover:scale-95 duration-100">
          <a href="/">Volver a Monedita</a>
        </button>
      </div>
    </>
  )
}
