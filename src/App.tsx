import './App.css'

import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { HomePage } from './routes/HomePage'
import { ErrorPage } from './routes/ErrorPage'
import { DolaresPage } from './routes/DolaresPage'

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />
  },
  {
    path: "/dolares",
    element: <DolaresPage />
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
