
import { StrictMode,  } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import Home from './Components/Layout/Home';
import Main from './Components/Layout/Main';
import Login from './Components/Layout/login/Login';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children:[
        {
          path: '/',
          element:<Home></Home>
        },
        {
          path: "login",
          element: <Login></Login>,
        },
      ]
    },
  ]);


  createRoot(document.getElementById('root')).render(
    <StrictMode>
      <RouterProvider router={router} />

      
    </StrictMode>
  )

  return (
    <>
    <h1 className='text-5xl '>hello</h1>
    </>
  )
}

export default App
