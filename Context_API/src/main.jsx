import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider } from './context/ThemeContext.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './routes/home.jsx';
import Contact from './routes/contact.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element:<App/>,
    children: [
      {path:"/", element:<Home/>},
      {path:"/contact", element:<Contact/>}
    ],


  }



])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
)
