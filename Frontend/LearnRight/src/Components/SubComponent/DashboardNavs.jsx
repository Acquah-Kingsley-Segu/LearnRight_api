import { GiBookCover, GiNotebook } from "react-icons/gi";
import { MdAccountCircle, MdNotifications, MdQuiz } from "react-icons/md";
import { NavLink } from "react-router-dom";

const DashboardNavs = () => {
  return (
    <aside className="w-12 flex flex-col items-center">
      <p>LR</p>
      <div className="mt-12">
        <NavLink className="mb-8 text-2xl text-zinc-400 hover:text-violet-700 hover:cursor-pointer">
          <GiBookCover className="mb-8" />
          <p></p>
        </NavLink>
        <NavLink className="text-2xl text-zinc-400 hover:text-violet-700 hover:cursor-pointer">
          <GiNotebook className="mb-8" />
          <p></p>
        </NavLink>
        <NavLink className="mb-8 text-2xl text-zinc-400 hover:text-violet-700 hover:cursor-pointer">
          <MdQuiz className="mb-8" />
          <p></p>
        </NavLink>
        <NavLink className="text-2xl text-zinc-400 hover:text-violet-700 hover:cursor-pointer">
          <MdNotifications />
          <p></p>
        </NavLink>
      </div>
      <div className="flex-1 flex flex-col justify-end">
        <NavLink className="mb-10 text-2xl text-zinc-400 hover:text-violet-700 hover:cursor-pointer">
          <MdAccountCircle />
          <p></p>
        </NavLink>
      </div>
    </aside>
  );
};

export default DashboardNavs;
