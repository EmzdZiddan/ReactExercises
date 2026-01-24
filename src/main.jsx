import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import LoginPage from './pages/Login.jsx'
import RegisterPage from './pages/Register.jsx'


const router = createBrowserRouter([
  {path:'/',element:<div>lala</div>},
  {path:'/login',element:<LoginPage/>},
  {path:'/register',element:<RegisterPage/>}
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
