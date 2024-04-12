import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from '../src/root';
import Home from './pages/Home';
import ErrorPage from './components/ErrorPage';
import CardDetails from './components/CardDetails';
import Login from './pages/Login'
import SignUp from './pages/Signup';
import FirbaseProvider from './FirebaseProbider/FirbaseProvider';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/property_details/:id",
        element: <CardDetails />,
        loader: () => fetch('../estate.json')
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FirbaseProvider>
      <RouterProvider router={router} />
    </FirbaseProvider>

  </React.StrictMode>,
)
