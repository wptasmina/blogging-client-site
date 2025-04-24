import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";


export default function ReviewCard({ item }) {
  const { image, name, desc, rating } = item

  return (
    <div className="bg-white dark:bg-gray-900 shadow-md rounded-lg p-4">
      <img src={image} alt={name} className="w-16 h-16 rounded-full mx-auto object-cover border dark:border-gray-800" />
      <p className=" text-gray-600 dark:text-gray-400 text-sm text-center italic mt-1">"{desc}"</p>
      {/* Rating  */}
      <div className='flex flex-col justify-between items-center '>
      <h3 className="text-lg dark:text-gray-400 font-semibold text-center mt-2 pb-1">{name}</h3>
        <Rating
          style={{ maxWidth: 80 }}
          value={rating}
          readOnly
        />
      </div>
    </div>
  );
};
