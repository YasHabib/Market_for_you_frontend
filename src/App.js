import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MainPage from './pages/MainPage';

const route = createBrowserRouter([
{ path: '/', element: <MainPage/> },
{ path: '/dashboard',element: <HomePage /> }
])


function App() {
  return <RouterProvider router={route} />;
}

export default App;
