import { useContext } from "react"
import loginImg from "../../assets/login.png"
import { AuthContext } from "./AuthProvider"
import gImg from "../../assets/google.webp"
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";

export default function LoginPage() {
//google
  const { handleGoogleLogin, handleLogin }  = useContext(AuthContext);

  // Login
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    // console.log(e.target) 
    const email = form.email.value;
    const password = form.password.value;
    
    // console.log(form, email, password )

    handleLogin( email, password )
    .then(res=>{
       toast.success("Login success!")
      console.log(res)
    })
    .catch(error =>{
      console.log(error)
    })

    form.reset()
  }

  return (
  <>
  <div className="bg-[#EDF2FA]">
  <div className="hero min-h-screen w-11/12 mx-auto">
  <div className="hero-content p-0 flex-col sm:my-10 my-4 md:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="md:text-4xl text-2xl font-bold text-center">Login now!</h1>
      <img src={loginImg} className="sm:w-full w-40 md:my-6" alt="image" />
    </div>

    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-md">

      <form onSubmit={handleSubmit} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name="email" className="input input-bordered focus:outline-none focus:border-blue-300" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name="password" className="input input-bordered focus:outline-none focus:border-blue-300" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover font-medium text-[#1B66C9] ">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <input type="submit" value="Login" className="btn bg-blue-500 border-0 text-white text-lg hover:bg-blue-500 btn-primary" />
        </div>

        <div className="divider">OR</div>

        <div className="flex justify-start border gap-8 py-2 rounded-full hover:bg-[#EDF2FA]"> 
          <img src={gImg} className="w-6 ml-4"/>
          <div>
          <h4 className="w-full font-medium cursor-pointer" onClick={()=>{
            handleGoogleLogin().then(res=>{
              //console.log(res)
            })
          }}>
            Continue with Google
           </h4>
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
