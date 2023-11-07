import { NavLink } from "react-router-dom";
const NavLinks = () => {
  return (
    <header className="pt-5">
      <nav class="max-w-[1100px] flex items-center justify-between h-full w-full my-0 mx-auto">
        <a href="#" class="text-white text-[25px]">"LearnRight"</a>

        <ul class="">
          <li class="flex items-center justify-between h-full gap-x-[25px]">
            <NavLink href="#" class="text-xl text-white hover:text-[#d9d9d9]">Home</NavLink>
            <NavLink href="#" class="text-xl text-white hover:text-[#d9d9d9]">Learn</NavLink>
            <NavLink href="#" class="text-xl text-white hover:text-[#d9d9d9]">Take Note</NavLink>
            <NavLink href="#" class="text-xl text-white hover:text-[#d9d9d9]">Take Quiz</NavLink>
            <NavLink href="#" class="text-xl text-white hover:text-[#d9d9d9]">History</NavLink>
            <NavLink href="#" class="text-xl text-white hover:text-[#d9d9d9]">Contact</NavLink>
          </li>
        </ul>
        <NavLink class="text-white border-2 border-solid border-white rounded-md cursor-pointer active:scale-[0.98] px-6 py-1.5" id="form-open">Login</NavLink>
      </nav>
      </header>
  );
}

export default NavLinks;