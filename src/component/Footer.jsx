import { NavLink } from "react-router-dom"
import logo from "../assets/logo-gl.png"
import { FaSquareFacebook,FaInstagram, FaXTwitter, FaYoutube } from "react-icons/fa6"

export default function Footer() {
  return (
    <div className=' bg-base-200 '>
    <footer className="footer text-base-content px-2 py-10 md:p-10 w-11/12 mx-auto">
    <nav>
      <h6 className="footer-title">Quick Link</h6>
      <a className="link link-hover">Home</a>
      <a className="link link-hover">Add Blogs</a>
      <a className="link link-hover">Dashbord</a>
      <a className="link link-hover">Contact</a>
    </nav>
    <nav>
      <h6 className="footer-title">Categories</h6>
      <NavLink className="link link-hover">
      Developer Platform</NavLink>
      <a className="link link-hover">Jobs
      </a>
      <a className="link link-hover">Enterprise</a>
      <a className="link link-hover">FAQs</a>
      <a className="link link-hover">Help & Center</a>
    </nav>
    
    <nav>
      <h6 className="footer-title">Legal</h6>
      <a className="link link-hover">Terms of Condition</a>
      <a className="link link-hover">Privacy policy</a>
      <a className="link link-hover">Cookie policy</a>
    </nav>
    <form>
      <h6 className="footer-title">News letter</h6>
      <fieldset className="form-control w-80">
        <label className="label">
          <span>Enter your email address</span>
        </label>
        <div className="join">
          <input
            type="text"
            placeholder="username@site.com"
            className="input input-bordered join-item focus:outline-none" />
          <button className="bg-blue-500 text-white font-normal join-item px-3">Subscribe</button>
        </div>
      </fieldset>
    </form>
  </footer>
  
  <div  className="footer bg-[#EDF2FA]">
  <footer className="footer w-11/12 mx-auto text-base-content border-base-300 border-t px-10 py-4">
  <aside className="grid-flow-col justify-center items-center">
    <img src={logo} className='w-20' />
    <p className='text-center'>Copyright © {new Date().getFullYear()} - All right reserved</p>
  </aside>
  <nav className="md:place-self-center md:justify-self-end">
    <div className="grid grid-flow-col gap-4">
    <p  className="flex justify-center items-center text-gray-500 font-medium">Follow Us:</p>
     
      <NavLink to="https://www.youtube.com">
        <FaYoutube className="text-3xl text-[#E81123] " />
      </NavLink>
      <NavLink to="https://www.instagram.com">
        <FaInstagram className="text-2xl text-red-700" />
      </NavLink>
      <NavLink to="https://www.twitter.com">
        <FaXTwitter className="text-2xl text-black" />
      </NavLink>
      <NavLink to="https://www.facebook.com">
        <FaSquareFacebook className="text-2xl text-blue-600" />
      </NavLink>
    </div>
  </nav>
</footer>
  </div>
  </div>
  )
}
