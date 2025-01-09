import { useContext } from "react"
import loginImg from "../../assets/login.png"
import { authContext } from "./AuthProvider"
import gImg from "../../assets/google.webp"
import { NavLink } from "react-router-dom";

export default function LoginPage() {
//google
  const {handleGoogleLogin, handleLogin }  = useContext(authContext);

  // Login
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log(email,password)

    handleLogin(email, password)
  }

  return (
  <>
  <div className="bg-[#EDF2FA]">
  <div className="hero  min-h-screen w-11/12 mx-auto">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold text-center">Login now!</h1>
      <img src={loginImg} className=" w-full my-6" alt="image" />
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-md">

      <form onClick={handleSubmit} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered focus:outline-none focus:border-blue-300" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered focus:outline-none focus:border-blue-300" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover font-medium text-[#1B66C9] ">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-blue-500 border-0 text-white text-lg hover:bg-blue-500 btn-primary">Login</button>
        </div>

        <div className="divider">OR</div>

        <div className="flex justify-between border py-3 rounded-full hover:bg-[#EDF2FA]"> 
          <img src={gImg} className="w-8 pl-4"/>
          <div className="text-center w-full px-4 font-medium cursor-pointer" onClick={handleGoogleLogin}>
            Continue with Google
           </div>
        </div>
          <p className="text-md text-center">New to the Website? plase <NavLink to="/register"> <span className="text-[#1B66C9] font-medium"> Register</span></NavLink></p> 

      </form>
    </div>
  </div>
</div>
  </div>
    </>
  )
}
