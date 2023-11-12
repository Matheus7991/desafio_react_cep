import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

//Paginas
import Cadastro from './routes/cadastro.tsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Cadastro />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
