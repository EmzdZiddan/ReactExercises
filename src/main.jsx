import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import LoginPage from './pages/Login.jsx'
import RegisterPage from './pages/Register.jsx'
import ProductsPage from './pages/Products.jsx'
import Test from './pages/Test.jsx'

const router = createBrowserRouter([
  {path:'/',element:<LoginPage/>},
  {path:'*',element:<div>Not Found Bro!</div>},
  {path:'/login',element:<LoginPage/>},
  {path:'/register',element:<RegisterPage/>},
  {path:'/products',element:<ProductsPage/>},
  {path:'/test',element:<Test/>},
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
