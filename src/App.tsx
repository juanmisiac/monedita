import './App.css'

import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { HomePage } from './routes/HomePage'
import { ErrorPage } from './routes/ErrorPage'
import { DolaresPage } from './routes/DolaresPage'
import { EurosPage } from './routes/EurosPage'
import { RealesPage } from './routes/RealesPage'
import { ChilenosPage } from './routes/ChilenosPage'
import { UruguayosPage } from './routes/UruguayosPage'

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
  },
  {
    path: "/ethereum",
  }
])

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
