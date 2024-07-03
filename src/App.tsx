import './App.css'

import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { HomePage } from './routes/HomePage'
import { ErrorPage } from './routes/ErrorPage'
import { DolaresPage } from './routes/DolaresPage'
import { EurosPage } from './routes/EurosPage'
import { RealesPage } from './routes/RealesPage'
import { ChilenosPage } from './routes/ChilenosPage'
import { UruguayosPage } from './routes/UruguayosPage'
import { BitcoinPage } from './routes/BitcoinPage'
import { EthereumPage } from './routes/EthereumPAge'

import { ThemeContext } from './context/ThemeContext'
import { useState } from 'react'

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />
  },
  {
    path: "/dolar",
    element: <DolaresPage />
  },
  {
    path: "/euro",
    element: <EurosPage />
  },
  {
    path: "/real",
    element: <RealesPage />
  },
  {
    path: "/peso-chileno",
    element: <ChilenosPage />
  },
  {
    path: "/peso-uruguayo",
    element: <UruguayosPage />
  },
  {
    path: "/bitcoin",
    element: <BitcoinPage />
  },
  {
    path: "/ethereum",
    element: <EthereumPage />
  }
])

function App() {
  
  const [theme, setTheme] = useState(() => {
    if(window.matchMedia("(prefers-color-scheme: dark)").matches){
      return "dark"
    }
    return "light"
  })
  
  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      <RouterProvider router={router} />
    </ThemeContext.Provider>
  )
}

export default App
