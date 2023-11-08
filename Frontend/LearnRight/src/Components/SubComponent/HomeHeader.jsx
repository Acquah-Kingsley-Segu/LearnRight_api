import { NavLink } from "react-router-dom";
const HomeHeader = () => {
  return (
    <header className="pt-5">
      {" "}
      {/** make it fix and change background color onscroll */}
      <nav className="max-w-[1100px] flex items-center justify-between h-full w-full my-0 mx-auto">
        <a href="#" className="text-white text-[25px]">
          "LearnRight"
        </a>

        <ul className="">
          <li className="flex items-center justify-between h-full gap-x-[25px]">
            <NavLink
              href="#"
              className="text-xl text-[#fff] hover:text-[#d9d9d9]"
            >
              Home
            </NavLink>
            <NavLink
              href="#"
              className="text-xl text-white hover:text-[#d9d9d9]"
            >
              Learn
            </NavLink>
            <NavLink
              href="#"
              className="text-xl text-white hover:text-[#d9d9d9]"
            >
              Take Note
            </NavLink>
            <NavLink
              href="#"
              className="text-xl text-[#fff] hover:text-[#d9d9d9]"
            >
              Take Quiz
            </NavLink>
            <NavLink
              href="#"
              className="text-xl text-[#fff] hover:text-[#d9d9d9]"
            >
              History
            </NavLink>
            <NavLink
              href="#"
              className="text-xl text-[#fff] hover:text-[#d9d9d9]"
            >
              Contact
            </NavLink>
          </li>
        </ul>
        <NavLink
          to={"/login"}
          className="text-[#fff] bg-violet-700 border-[1.5px] border-violet-700 rounded-md cursor-pointer
          active:scale-[0.98] px-6 py-1.5 hover:bg-white hover:border-violet-700 hover:text-violet-700"
          id="form-open"
        >
          Login
        </NavLink>
      </nav>
    </header>
  );
};

export default HomeHeader;
