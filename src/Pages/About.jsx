
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  const features = [
    { title: "User-Friendly", description: "A seamless writing and reading experience." },
    { title: "Secure Authentication", description: "Login via email, Google, or GitHub with JWT security." },
    { title: "Categories & Search", description: "Easily filter blogs by category and search by title." },
    { title: "Wishlist Feature", description: "Save your favorite blogs to read later." },
    { title: "Engagement", description: "Comment, like, and share your thoughts on any blog." },
    { title: "Fully Responsive", description: "Optimized for mobile, tablet, and desktop users." }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* Header Section */}
      <motion.h1
        className="text-4xl font-bold text-center mb-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        About Our Blog
      </motion.h1>
      
      {/* Description Section */}
      <motion.p
        className="text-lg text-gray-600 text-center mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Welcome to our blog platform, where technology, news, gaming, lifestyle, and education come together. We provide a space for writers to share insights, latest trends, and knowledge with a global audience.
      </motion.p>
      
      {/* Features Section */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg text-center border"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
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
        <h2 className="text-2xl font-semibold">Join Us Today!</h2>
        <p className="text-gray-600 mt-2">Start writing and sharing your knowledge with the world.</p>
        <button 
          onClick={() => navigate('/addblog')}
          className="mt-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-[#313030] duration-300 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Get Started
        </button>
      </motion.div>
    </div>
  );
};



export default About;
