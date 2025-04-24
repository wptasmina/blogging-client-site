import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function Review() {
  const [review, setReview] = useState([]);

  useEffect(() => {
    axios.get("https://blogging-server-alpha.vercel.app/review")
      .then((res) => {
        setReview(res.data);
      });
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6">
      {review.map((item, index) => (
        <div key={index} className="bg-white shadow-md rounded-lg p-4">
          <img src={item.image} alt={item.name} className="w-16 h-16 rounded-full mx-auto" />
          <h3 className="text-lg font-semibold text-center mt-2">{item.name}</h3>
          <p className="text-gray-600 text-sm text-center italic mt-1">"{item.desc}"</p>
          <p className="text-yellow-500 text-center mt-2">⭐ {item.rating} / 5</p>
        </div>
      ))}
    </div>
  );
}
