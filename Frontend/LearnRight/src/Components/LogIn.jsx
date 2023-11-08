import { useState } from "react";
import { MdClose, MdOutlineLock, MdOutlineMail } from "react-icons/md";
import ReactModal from "react-modal";
import { NavLink, useNavigate } from "react-router-dom";

const Login = () => {
  const [openModal, setOpenModal] = useState(true);
  const navigate = useNavigate();

  return (
    <ReactModal
      isOpen={openModal}
      className="bg-white flex flex-col w-1/4 border-0 border-white rounded-lg shadow-md p-2 h-3/5 overflow-y-auto scroll scroll-smooth"
      overlayClassName="bg-black/10 fixed inset-0 flex justify-center items-center h-full"
    >
      <div className="flex items-center px-2 py-2">
        <h2 className="flex-1 text-center font-medium text-xl">Login</h2>
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
        <div className="border-b-[1.5px] border-solid border-[#aaaaaa] relative mt-[30px] mx-3 h-[40px] flex justify-center">
          <MdOutlineMail className="h-full text-[#333] text-2xl" />
          <input
            className="w-full h-full outline-none py-0 pl-1 text-[#333] text-sm transition-all duration-[200ms] ease-in-out"
            type="email"
            placeholder="Enter your email"
            required
          />
          {/* <i className="uil uil-envelope-alt email"></i> have to use react icon here */}
        </div>
        <div className="border-b-[1.5px] border-solid border-[#aaaaaa] relative mt-[15px] mx-3 h-[40px] flex justify-center">
          <MdOutlineLock className="h-full text-[#333] text-2xl" />
          <input
            className="w-full h-full outline-none py-0 pl-1 text-[#333] text-sm transition-all duration-[200ms] ease-in-out"
            type="password"
            placeholder="Enter your password"
            required
          />
          {/* <i className="uil uil-lock password"></i>
          <i className="uil uil-eye-slash pw_hide"></i> will have to use react icons here */}
        </div>
        <div className="mt-[14px] bg-greeen-200 mx-3 flex items-center justify-between">
          <span className="flex gap-x-[8px] whitespace-nowrap">
            <input className="accent-[#7d2ae8]" type="checkbox" id="check" />
            <label
              className="text-[12px] cursor-pointer select-none text-[#0b0217]"
              for="check"
            >
              Remember me
            </label>
          </span>
          <a href="#" className="forgot_pw text-violet-400 text-sm">
            Forgot password?
          </a>
        </div>

        <button className="py-[6px] px-[24px] mx-3 mt-10 hover:bg-white hover:border-[1.5px] hover:border-violet-700 hover:text-black text-white bg-violet-700 border-[1.5px] border-solid border-[#fff] bg-transparent rounded-[6px] cursor-pointer">
          Login Now
        </button>

        <div className="text-xs text-center mt-[15px]">
          Don't have an account?{" "}
          <NavLink to={"/signup"} id="signup" className="text-violet-400">
            Signup
          </NavLink>
        </div>
      </form>
    </ReactModal>
  );
};

export default Login;

/**
 * <ReactModal 
    className="bg-red-200"
    isOpen={openModal}
    >
      <form action="#">
        <h2>Login</h2>

        <div className="relative mt-[30px] w-full h-[40px]">
          <input className="w-full h-full border-none outline-none py-0 px-[30px] text-[#333] transition-all duration-[200ms] ease-in-out border-b-[1.5px] border-solid border-[#aaaaaa]" type="email" placeholder="Enter your email" required />
          {/* <i className="uil uil-envelope-alt email"></i> have to use react icon here 
          </div>
          <div className="relative mt-[30px] w-full h-[40px]">
            <input className="w-full h-full border-none outline-none py-0 px-[30px] text-[#333] transition-all duration-[200ms] ease-in-out border-b-[1.5px] border-solid border-[#aaaaaa]" type="password" placeholder="Enter your password" required />
             <i className="uil uil-lock password"></i>
            <i className="uil uil-eye-slash pw_hide"></i> will have to use react icons here
          </div>
  
          <div className="mt-[14px] flex items-center justify-between">
            <span className="flex gap-x-[8px] whitespace-nowrap">
              <input className="accent-[#7d2ae8]" type="checkbox" id="check" />
              <label className="text-[12px] cursor-pointer select-none text-[#0b0217]" for="check">Remember me</label>
            </span>
            <a href="#" className="forgot_pw">Forgot password?</a>
          </div>
  
          <button className="py-[6px] px-[24px] border-[1.5px] border-solid border-[#fff] bg-transparent rounded-[6px] cursor-pointer">Login Now</button>
  
          <div className="text-xs text-center mt-[15px]">Don't have an account? <a href="#" id="signup">Signup</a></div>
        </form>
      </ReactModal>
 * 
 * 
 */
