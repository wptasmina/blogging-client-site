import { motion } from "framer-motion";
import img1 from '../assets/img-1.jpeg';
import img2 from '../assets/img-2.jpg';
import img3 from '../assets/img-3.jpg';
import img4 from '../assets/img-4.jpg';
import img5 from '../assets/img-5.jpg';
import img6 from '../assets/img-6.jpg';

// review 
import star1 from '../assets/review/star-1.png'
import star2 from '../assets/review/star-2.png'
import star3 from '../assets/review/star-3.png'
// import star1 from '../assets/review/star-1.png';
// import star2 from '../assets/review/star-2.png';
// import star3 from '../assets/review/star-3.png';




export default function ReviewCard() {

  const features = [
    { name: "JodeHoke", description: "A seamless writing and reading experience.", icon: star1, img: img1 },
    { name: "Kaber Fahad", description: "Login via email, Google, or GitHub with JWT security.", icon: star2, img: img2 },
    { name: "Hannan kabir", description: "Easily filter blogs by category and search by title.", icon: star3, img: img3 },
    { name: "Salman dooj", description: "Save your favorite blogs to read later.", icon: star2, img: img4 },
    { name: "Engo ka", description: "Comment, like, and share your thoughts on any blog.", icon: star1, img: img5 },
    { name: "Rohad", description: "Optimized for mobile, tablet, and desktop users.", icon: star3, img: img6 }
  ];

  return (
    <div className=" w-11/12 mx-auto py-6">
      <div className="pb-8">
        <h2 className=" text-4xl font-extrabold pb-2">Top Review 📈</h2> 
        <p>Allows users to add blogs seamlessly. Add real-time validation for better user experience.</p>
      </div>
      {/* Features Section */}
      <div className="dark:bg-gray-900 text-gray-800 dark:text-white grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg text-center border transform transition-all duration-300 hover:shadow-2xl"
            whileHover={{ scale: 1.05 }}
          >
        <div className="flex justify-between items-center gap-2">
            <div  className="flex justify-center items-center gap-2">
                <img src={feature.img} alt={feature.name} className="w-10 h-10 object-cover rounded-full mb-4 shadow-md" />
                <h3 className="text-xl font-semibold mb-3">{feature.name}</h3>
            </div>
              <img src={feature.icon} className="w-20 object-cover " />
        </div>
        <p className="text-gray-600">{feature.description}</p>
            
          </motion.div>
        ))}
      </div>

      {/* Call to Action Section */}
      <motion.div
        className="text-center mt-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >

      </motion.div>
    </div>
  );
};
