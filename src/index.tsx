import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Index from './pages/Index';
import Login from './pages/auth/Login';

const router = createBrowserRouter([
  { path: '/', element: <Index /> },
  {
    path: '*', element: (
      <>
        <App />
      </>
    ),
  },
  {
    path: '/login', element: (
      <>
        <Login />
      </>
    ),
  },
], {
  future: {
    v7_relativeSplatPath: true,
    v7_fetcherPersist: true,
    v7_normalizeFormMethod: true,
    v7_partialHydration: true,
    v7_skipActionErrorRevalidation: true,
  }
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <RouterProvider router={router} future={{ v7_startTransition: true }} />
);

reportWebVitals();
