import { useState } from "react";
import {
  MdClose,
  MdOutlineLock,
  MdOutlineMail,
  MdOutlinePersonPinCircle,
} from "react-icons/md";
import ReactModal from "react-modal";
import { NavLink, useNavigate } from "react-router-dom";

const Signup = () => {
  const [openModal, setOpenModal] = useState(true);
  const navigate = useNavigate();

  return (
    <ReactModal
      isOpen={openModal}
      className="bg-white flex flex-col w-1/4 border-0 border-white rounded-lg shadow-md p-2 h-3/5 overflow-y-auto scroll scroll-smooth"
      overlayClassName="bg-black/10 fixed inset-0 flex justify-center items-center h-full"
    >
      <div className="flex items-center px-2 py-2">
        <h2 className="flex-1 text-center font-medium text-xl">Signup</h2>
        <button
          onClick={() => {
            setOpenModal(false);
            navigate("..");
          }}
        >
          <MdClose className="text-2xl text-red-500 hover:bg-red-500 hover:text-white rounded-sm" />
        </button>
      </div>
      <form action="" method="post" className="flex-1 flex flex-col">
        <div className="border-b-[1.5px] border-solid border-[#aaaaaa] relative mt-[10px] mx-3 h-[40px] flex justify-center">
          <MdOutlinePersonPinCircle className="h-full text-[#333] text-2xl" />
          <input
            className="w-full h-full outline-none py-0 pl-1 text-[#333] text-sm transition-all duration-[200ms] ease-in-out"
            type="text"
            placeholder="Create a username"
            required
          />
        </div>
        <div className="border-b-[1.5px] border-solid border-[#aaaaaa] relative mt-[10px] mx-3 h-[40px] flex justify-center">
          <MdOutlineMail className="h-full text-[#333] text-2xl" />
          <input
            className="w-full h-full outline-none py-0 pl-1 text-[#333] text-sm transition-all duration-[200ms] ease-in-out"
            type="email"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="border-b-[1.5px] border-solid border-[#aaaaaa] relative mt-[10px] mx-3 h-[40px] flex justify-center">
          <MdOutlineLock className="h-full text-[#333] text-2xl" />
          <input
            className="w-full h-full outline-none py-0 pl-1 text-[#333] text-sm transition-all duration-[200ms] ease-in-out"
            type="password"
            placeholder="Create a password"
            required
          />
        </div>
        <div className="border-b-[1.5px] border-solid border-[#aaaaaa] relative mt-[10px] mx-3 h-[40px] flex justify-center">
          <MdOutlineLock className="h-full text-[#333] text-2xl" />
          <input
            className="w-full h-full outline-none py-0 pl-1 text-[#333] text-sm transition-all duration-[200ms] ease-in-out"
            type="password"
            placeholder="Confirm password"
            required
          />
        </div>

        <button className="py-[6px] px-[24px] mx-3 mt-5 hover:bg-white hover:border-[1.5px] hover:border-violet-700 hover:text-black text-white bg-violet-700 border-[1.5px] border-solid border-[#fff] bg-transparent rounded-[6px] cursor-pointer">
          Signup Now
        </button>

        <div className="text-xs text-center mt-[15px]">
          Already have an account?
          <NavLink to={"/login"} id="signup" className="text-violet-400">
            Login
          </NavLink>
        </div>
      </form>
    </ReactModal>
  );
};

export default Signup;

{
  /**
<div class="form signup_form">
      <form action="#">
        <h2>Signup</h2>
        <div class="input_box">
          <input type="email" placeholder="Enter your email" required />
          <i class="uil uil-envelope-alt email"></i>
        </div>
        <div class="input_box">
          <input type="password" placeholder="Create password" required />
          <i class="uil uil-lock password"></i>
          <i class="uil uil-eye-slash pw_hide"></i>
        </div>
        <div class="input_box">
          <input type="password" placeholder="Confirm password" required />
          <i class="uil uil-lock password"></i>
          <i class="uil uil-eye-slash pw_hide"></i>
        </div>
        <button class="button">Signup Now</button>
        <div class="login_signup">
          Already have an account?{" "}
          <a href="#" id="login">
            Login
          </a>
        </div>
      </form>
    </div>

*/
}
