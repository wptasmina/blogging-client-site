import { Outlet } from "react-router-dom"
import Navbar from "./component/Navbar"
import Footer from "./component/Footer"
import { useEffect } from "react";



function App(theme) {

  useEffect(() => {
    document.documentElement.className = theme; // Ensures correct class is set
    localStorage.setItem("theme", theme);
  }, [theme]);
  

  return (
    <>
      <div className={theme}>
        <Navbar />
        <div className="min-h-[calc(100vh-360px)] ">
        <Outlet></Outlet>
        </div>
        <Footer />
      </div>
      
    </>
  )
}

export default App
