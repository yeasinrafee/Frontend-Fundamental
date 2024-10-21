import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import FetchRQ from '../pages/FetchRQ';
import App from '../App';

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
    ],
  },
]);

export default router;
