import img1 from '../assets/img-1.jpeg'
import img2 from '../assets/img-2.jpg'
import img3 from '../assets/img-3.jpg'
import img4 from '../assets/img-4.jpg'
import img5 from '../assets/img-5.jpg'
import img6 from '../assets/img-6.jpg'
import img7 from '../assets/img-7.jpg'
import img8 from '../assets/img-8.jpeg'



export default function LogoSlice() {
  return (
    
      <div className='flex justify-center items-center gap-8 border'>
        <img src={img1} className="w-64 h-64 object-cover rounded-md" />
        <img src={img2} className="w-64 h-64 object-cover rounded-md" />
        <img src={img3} className="w-64 h-64 object-cover rounded-md" />
        <img src={img4} className="w-64 h-64 object-cover rounded-md" />
        <img src={img5} className="w-64 h-64 object-cover rounded-md" />
        <img src={img6} className="w-64 h-64 object-cover rounded-md" />
        <img src={img7} className="w-64 h-64 object-cover rounded-md" />
        <img src={img8} className="w-64 h-64 object-cover mr-8 rounded-md" /> 
      </div>

  )
}
