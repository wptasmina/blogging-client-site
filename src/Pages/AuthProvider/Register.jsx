// import { FaEye, FaEyeSlash } from "react-icons/fa";

import toast, { Toaster } from 'react-hot-toast';
import regImg from '../../assets/register.png'
import { useContext, useState } from "react";
import { authContext } from './AuthProvider';

export default function Register() {
  // const notify = () => toast("A new Blog has been added !");

  const {handleRegister} = useContext(authContext)
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const conPassword = form.confirmPass.value;
    const photoURL = form.photoURL.value;

    // console.log(form,name,email,password,conPassword,photoURL )

    handleRegister(email, password).then(res=>{
      // console.log(res)
    })
    form.reset()
  }

  return (
    <>
    <div className="bg-[#EDF2FA]">
      <div className="hero">
      <div className="hero-content w-11/12 mx-auto sm:my-10 my-4 flex-col md:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="md:text-4xl text-2xl font-bold text-center">Register now!</h1>
          <img src={regImg} className="sm:w-full w-40 md:my-6" alt="image" />
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-xl">

          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input type="text" placeholder="Enter your Name" name="name" className="input input-bordered focus:outline-none focus:border-blue-300" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" placeholder="Enter your email"  name="email" className="input input-bordered focus:outline-none focus:border-blue-300" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" placeholder="Enter your password"  name="password" className="input input-bordered focus:outline-none focus:border-blue-300" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input type="password" placeholder="Confirm Your Password"  name="confirmPass" className="input input-bordered focus:outline-none focus:border-blue-300" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">PhotoURL</span>
              </label>
              <input type="file" placeholder="Photo URL" name="photoURL" className="input input-bordered p-2 focus:outline-none focus:border-blue-300" required />
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-blue-500 border-0 text-white text-lg hover:bg-blue-500 btn-primary">Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    </div>
    <Toaster></Toaster>
    </>
  )
}
