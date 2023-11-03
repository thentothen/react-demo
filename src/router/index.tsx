import { Routes, Route, useRoutes } from 'react-router-dom';
import Home from '@/views/Home';
import NotFound from '@/views/About';
import Overview from '@/views/Overview';
const routes = [
  {
    path: '/',
    meta: {},
    element: <Home />,
    children: [
      {
        path: 'overview',
        meta: { title: '首页' },
        element: <Overview />,
      },
      { path: 'overview2', meta: { title: '首页2' }, element: <NotFound /> },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
];

export { routes };
export default function Router() {
  return useRoutes(routes);
}
