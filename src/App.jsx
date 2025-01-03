import { Outlet } from "react-router-dom"
import Navbar from "./component/Navbar"
import Footer from "./component/Footer"



function App() {


  return (
    <>
      <div>
        <Navbar />
        {/* <div className="min-h-[calc(100vh-360px)] "> */}
        <Outlet></Outlet>
        {/* </div> */}
        <Footer />
      </div>
      
    </>
  )
}

export default App
