
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Product from './component/product/product.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import DisplayProduct from './component/product/DisplayProduct.jsx'
import CartDisplay from './component/product/Cart/CartDisplay.jsx'
import AddPost from './component/product/Cart/AddPost.jsx'

const router = createBrowserRouter(
  [
    {
      path:'/',
      element:<App/>
    },
    {
      path:'/product',
      element:<Product/>
    },{
      path:'/product/:location',
       element:<Product/>
    },
    {
      path:'/product/:location/:id',
      element:<DisplayProduct/>
    },
    {
      path:"/cart" ,
      element:<CartDisplay />
    },
    {
      path:"/addpost",
      element:<AddPost/>
    }
  ]
)
createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}></RouterProvider>
)
