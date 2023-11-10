import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import Learn from "./Components/Learn";
import Login from "./Components/LogIn";
import Note from "./Components/Note";
import Quiz from "./Components/Quiz";
import Signup from "./Components/SignUp";
import DashboardHome from "./Components/SubComponent/DashboardHome";
import PQ4R from "./Components/SubComponent/PQ4R";
import Preview from "./Components/SubComponent/Preview";
import Question from "./Components/SubComponent/Question";
import Read from "./Components/SubComponent/Read";
import Recite from "./Components/SubComponent/Recite";
import Reflect from "./Components/SubComponent/Reflect";
import Home from "./Home";
import Review from "./Components/SubComponent/Review";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
    ],
  },
  {
    path: "/dashboard/",
    element: <Dashboard />,
    children: [
      {
        path: "",
        element: <DashboardHome />,
      },
      {
        path: "learn/",
        element: <Learn />,
        children: [
          {
            path: "cue/:cueID/pq4r/",
            element: <PQ4R />,
            children: [
              {
                path: "preview",
                element: <Preview />,
              },
              {
                path: "question",
                element: <Question />,
              },
              {
                path: "read",
                element: <Read />,
              },
              {
                path: "reflect",
                element: <Reflect />,
              },
              {
                path: "recite",
                element: <Recite />,
              },
              {
                path: "review",
                element: <Review />,
              },
            ],
          },
        ],
      },
      {
        path: "note",
        element: <Note />,
      },
      {
        path: "quiz",
        element: <Quiz />,
      },
    ],
  },
]);

export default router;
