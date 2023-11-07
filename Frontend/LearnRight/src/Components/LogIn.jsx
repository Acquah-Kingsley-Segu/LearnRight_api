const Login = () => {
  return(
  <div className="">
    <form action="#">
      <h2>Login</h2>

      <div className="relative mt-[30px] w-full h-[40px]">
        <input className="w-full h-full border-none outline-none py-0 px-[30px] text-[#333] transition-all duration-[200ms] ease-in-out border-b-[1.5px] border-solid border-[#aaaaaa]" type="email" placeholder="Enter your email" required />
        {/* <i className="uil uil-envelope-alt email"></i> have to use react icon here */}
      </div>
      <div className="relative mt-[30px] w-full h-[40px]">
        <input className="w-full h-full border-none outline-none py-0 px-[30px] text-[#333] transition-all duration-[200ms] ease-in-out border-b-[1.5px] border-solid border-[#aaaaaa]" type="password" placeholder="Enter your password" required />
        {/* <i className="uil uil-lock password"></i>
        <i className="uil uil-eye-slash pw_hide"></i> will have to use react icons here */}
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
  </div>)
}

export default Login;