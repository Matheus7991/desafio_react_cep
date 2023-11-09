import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

//Paginas
import Home from './routes/home.tsx';
import Cadastro from './routes/cadastro.tsx';
import Lista from './routes/lista.tsx';


const router = createBrowserRouter([
  {
    path:"/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      }, 
    ],
  }, {
    path: "/cadastro",
    element: <Cadastro />,
  }, {
    path: "/lista",
    element: <Lista />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
