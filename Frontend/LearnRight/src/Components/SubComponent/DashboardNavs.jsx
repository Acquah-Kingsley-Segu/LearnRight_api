import { useEffect, useState } from "react";
import { GiBookCover, GiNotebook } from "react-icons/gi";
import { MdAccountCircle, MdQuiz, MdSpaceDashboard } from "react-icons/md";
import { NavLink } from "react-router-dom";
import logo from "../../images/logo.png";

const DashboardNavs = () => {
  const [navState, setNavState] = useState("");

  const navs = [{ name: "learn", link: "/learn" }];

  useEffect(() => {
    setNavState(window.location.pathname);
    console.log(navState);
  }, [navState]);

  return (
    <aside className="w-1/6 m-1 mr-3 bg-slate-100 flex flex-col border-2 border-solid border-slate-300 rounded-lg">
      <NavLink
        to={"/dashboard/"}
        className="flex mt-5 py-3 justify-center items-center"
      >
        <img src={logo} alt="Logo" height={32} width={32} />
        <p className="font-mono text-sm">LearnRight</p>
      </NavLink>
      <div className="bg-slate-500 w-5/6 h-px mt-5 ml-4"></div>
      <div className="flex flex-col justify-between flex-1">
        <div className="mt-12 flex flex-col pt-5 m-3">
          <NavLink
            to={"/dashboard/"}
            className={`flex items-center mb-6 pl-3 py-1 text-zinc-400 hover:cursor-pointer
            hover:text-white hover:bg-violet-700 hover:rounded-full`}
          >
            <MdSpaceDashboard className="text-2xl " />
            <p className="ml-2 text-md pb-1 ">Dashboard</p>
          </NavLink>
          <NavLink
            to={"/dashboard/learn"}
            className={`flex items-center mb-6 pl-3 py-1 text-zinc-400 hover:cursor-pointer
            hover:text-white hover:bg-violet-700 hover:rounded-full`}
          >
            <GiBookCover className="text-2xl " />
            <p className="ml-2 text-md pb-1 ">Learn</p>
          </NavLink>
          <NavLink
            to={"/dashboard/note"}
            className="flex items-center mb-6 pl-3 py-1 text-zinc-400 hover:cursor-pointer 
            hover:text-white hover:bg-violet-700 hover:rounded-full"
          >
            <GiNotebook className="text-2xl" />
            <p className="ml-3 text-md">Note</p>
          </NavLink>
          <NavLink
            to={"/dashboard/quiz"}
            className="flex items-center mb-6 pl-3 py-1 text-zinc-400 hover:cursor-pointer
            hover:text-white hover:bg-violet-700 hover:rounded-full"
          >
            <MdQuiz className="text-2xl" />
            <p className="ml-3 text-md">Quiz</p>
          </NavLink>
        </div>
        <div className="flex flex-col justify-center mb-8">
          <NavLink className="text-6xl flex justify-center text-zinc-400">
            <MdAccountCircle />
          </NavLink>
          <div className="flex flex-col items-center">
            <p>Username</p>
            <p>username@gmail.com</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default DashboardNavs;
