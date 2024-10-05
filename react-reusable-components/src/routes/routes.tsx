import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../pages/Home';
import About from '../pages/About';
import AdminLayout from '../components/layout/AdminLayout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
    ],
  },
  {
    path: '/admin',
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <h1>Admin DashBoard</h1>,
      },
      {
        path: 'add-admin',
        element: <h1>Add Admin</h1>,
      },
    ],
  },
]);

export default router;
