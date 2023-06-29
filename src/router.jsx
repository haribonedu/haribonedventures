import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from './views/Home';
import AboutAndContact from './views/AboutAndContact';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/about',
    element: <AboutAndContact />,
  },
  {
    path: '/contact',
    element: <AboutAndContact />,
  },
]);

export default router;
