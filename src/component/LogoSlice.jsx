import logo1 from '../assets/marqu-logo/logo-1.jpg'
import logo2 from '../assets/marqu-logo/logo-2.png'
import logo3 from '../assets/marqu-logo/logo-3.png'
import logo4 from '../assets/marqu-logo/logo-4.jpg'
import logo5 from '../assets/marqu-logo/logo-5.webp'
import logo6 from '../assets/marqu-logo/logo-6.png'
import logo7 from '../assets/marqu-logo/logo-7.png'
import logo8 from '../assets/marqu-logo/logo-8.jpg'




export default function LogoSlice() {
  return (
    
      <div className='flex justify-center items-center gap-8 dark:bg-gray-900 text-gray-800 dark:text-white shadow-md'>
        <img src={logo1} className="w-60 h-28 p-2 object-cover rounded-md border bg-white" />
        <img src={logo2} className="w-60 h-28 p-2 object-cover rounded-md border bg-white" />
        <img src={logo3} className="w-60 h-28 p-2 object-cover rounded-md border bg-white" />
        <img src={logo4} className="w-60 h-28 p-2 object-cover rounded-md border bg-white" />
        <img src={logo5} className="w-60 h-28 p-2 object-cover rounded-md border bg-white" />
        <img src={logo6} className="w-60 h-28 p-2 object-cover rounded-md border bg-white" />
        <img src={logo7} className="w-60 h-28 p-2 object-cover rounded-md border bg-white" />
        <img src={logo8} className="w-60 h-28 p-2 object-cover mr-8 rounded-md border bg-white " /> 
      </div>

  )
}
