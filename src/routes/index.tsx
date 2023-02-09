/* eslint-disable react/react-in-jsx-scope */
import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/home',
    element: <Home />
  }
]);

export default router;
