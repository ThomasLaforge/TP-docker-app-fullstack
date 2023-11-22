import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './routes/Home'
import Time from './routes/Time'

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/time', element: <Time /> },
])

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
