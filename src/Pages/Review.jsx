import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ReviewCard from '../component/ReviewCard';

export default function Review() {
  const [review, setReview] = useState([]);

  useEffect(() => {
    axios.get("https://blogging-server-alpha.vercel.app/review")
      .then((res) => {
        setReview(res.data);
      });
  }, []);

  return (
    <div className='w-11/12 mx-auto py-6'>
      <div className="pb-8">
        <h2 className=" text-4xl font-extrabold pb-2">Top Review 📈</h2>
        <p>Allows users to add blogs seamlessly. Add real-time validation for better user experience.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {review.map((item, index) => 
          <ReviewCard key={index} item={item} />
        )}
      </div>
    </div>
  );
}
