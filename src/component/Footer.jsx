import React from 'react'

export default function Footer() {
  return (
    <div className=' bg-base-200 '>
    <footer className="footer text-base-content p-4 md:p-10 w-11/12 mx-auto">
    <nav>
      <h6 className="footer-title">Quick Link</h6>
      <a className="link link-hover">Home</a>
      <a className="link link-hover">Blogs</a>
      <a className="link link-hover">Contact</a>
      <a className="link link-hover">Jobs</a>
      <a className="link link-hover">Dashbord</a>
    </nav>
    <nav>
      <h6 className="footer-title">Categories</h6>
      <a className="link link-hover">News</a>
      <a className="link link-hover">Lifestyle</a>
      <a className="link link-hover">Technology</a>
      <a className="link link-hover">Sports</a>
      <a className="link link-hover">Travel</a>
      <a className="link link-hover">Business</a>
    </nav>
    
    <nav>
      <h6 className="footer-title">Legal</h6>
      <a className="link link-hover">Terms of Condition</a>
      <a className="link link-hover">Privacy policy</a>
      <a className="link link-hover">Cookie policy</a>
    </nav>
    <form>
      <h6 className="footer-title">Newsletter</h6>
      <fieldset className="form-control w-80">
        <label className="label">
          <span>Enter your email address</span>
        </label>
        <div className="join">
          <input
            type="text"
            placeholder="username@site.com"
            className="input input-bordered join-item" />
          <button className="bg-red-300 join-item px-2">Subscribe</button>
        </div>
      </fieldset>
    </form>
  </footer>
  </div>
  )
}
