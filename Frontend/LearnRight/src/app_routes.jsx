
import { createBrowserRouter } from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import Login from './Components/LogIn';
import Signup from './Components/SignUp';
import Home from './Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/login",
    element: <Login/>
  },
  {
    path: "/create_account",
    element: <Signup/>
  },
  {
    path: "/dashboard",
    element: <Dashboard/>,
  }
])

export default router;