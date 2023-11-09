
import { createBrowserRouter } from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import Login from './Components/LogIn';
import Signup from './Components/SignUp';
import Home from './Home';
import DashboardHome from './Components/SubComponent/DashboardHome';
import Learn from './Components/Learn';
import Note from './Components/Note';
import Quiz from './Components/Quiz';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    children: [
      {
        path: "/login",
        element: <Login/>,
      },
      {
        path: "/signup",
        element: <Signup/>
      },
    ]
  },
  {
    path: "/dashboard/",
    element: <Dashboard/>,
    children:[
      {
        path: "",
        element: <DashboardHome/>
      },
      {
        path: "learn",
        element: <Learn/>
      },
      {
        path: "note",
        element: <Note/>,
      },
      {
        path: "quiz",
        element: <Quiz/>
      }
    ]
  }
])

export default router;