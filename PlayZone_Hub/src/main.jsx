import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  RouterProvider
} from "react-router-dom";
import Authprovides from './Pages/providers/AuthProviders';
import router from './Routes/Routes.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='md:max-w-7xl mx-auto'>
    <React.StrictMode>
      <Authprovides>
        <RouterProvider router={router} />
      </Authprovides>
    </React.StrictMode>
  </div>
)