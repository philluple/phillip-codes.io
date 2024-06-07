import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.tsx'
import Home from './pages/Home.tsx'
import Experience from './pages/Experience.tsx'
import "./index.css"
import 'bootstrap/dist/css/bootstrap.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>
  },
  {
    path: "/experience",
    element: <Experience></Experience>
  }
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
);
