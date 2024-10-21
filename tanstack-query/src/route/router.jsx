import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import FetchRQ from '../pages/FetchRQ';
import App from '../App';
import FetchIndv from '../components/UI/FetchIndv';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'rq',
        element: <FetchRQ />,
      },
      {
        path: 'rq/:id',
        element: <FetchIndv />,
      },
    ],
  },
]);

export default router;
