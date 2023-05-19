import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layout/Main.jsx';
import Home from './components/Home/Home';
import ErrorPage from './components/ErrorPage';
import Blog from './components/Blog/Blog';
import AuthProvider from './provider/AuthProvider';
import Login from './Login/Login';
import Register from './provider/Register/Register';
import AddToy from './components/AddToy/AddToy';
import AllToys from './components/AllToys/AllToys';
import SingleToy from './components/AllToys/SingleToy';
import MyToy from './components/MyToy/MyToy';
import PrivateRoute from './route/PrivateRoute/PrivateRoute';
import Update from './components/Update/Update';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Main></Main>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/blog',
        element:<Blog></Blog>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      },
      {
        path:'/addToy',
        element:<AddToy></AddToy>
      },
      {
        path:'/allToys',
        element:<AllToys></AllToys>,
        loader:()=>fetch('https://toys-cars-server.vercel.app/allToy')
      },
      {
        path:'/toy/:id',
        element:<PrivateRoute><SingleToy></SingleToy></PrivateRoute>,
        loader:({params})=>fetch(`https://toys-cars-server.vercel.app/allToy/${params.id}`)
      },
      {
        path:'/myToy',
        element:<PrivateRoute><MyToy></MyToy></PrivateRoute>
      },
      {
        path:'/update/:id',
        element:<Update></Update>,
        loader:({params})=>fetch(`https://toys-cars-server.vercel.app/allToy/${params.id}`)
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider><RouterProvider router={router} /></AuthProvider>
  </React.StrictMode>,
)
