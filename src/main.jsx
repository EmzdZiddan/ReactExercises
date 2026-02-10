import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import NotFoundPage from './pages/NotFound.jsx'
import LoginPage from './pages/Login.jsx'
import RegisterPage from './pages/Register.jsx'
import ProductsPage from './pages/Products.jsx'
import ProfilePage from './pages/Profile.jsx'
import Test from './pages/Test.jsx'
import DetailProductPage from './pages/DetailProduct.jsx'

const router = createBrowserRouter([
  {path:'/',element:<LoginPage/>},
  {path:'*',element:<NotFoundPage/>},
  {path:'/login',element:<LoginPage/>},
  {path:'/register',element:<RegisterPage/>},
  {path:'/product',element:<ProductsPage/>},
  {path:'/profile',element:<ProfilePage/>},
  {path:'/test',element:<Test/>},
  {path:'/product/:id', element:<DetailProductPage/>}
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
