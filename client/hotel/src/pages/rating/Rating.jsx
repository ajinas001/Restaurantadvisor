import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import './Rating.css'; 

const Ratings = () => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  return (
    <div>
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;

        return (
          <label key={i}>
            <FaStar
              className="star"
              color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
              size={20} // Adjusted size to make the stars smaller
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
              onClick={() => setRating(ratingValue)} // Added onClick to set the rating
            />
          </label>
        );
      })}
      <p>You rated {rating} out of 5 stars.</p>
    </div>
  );
};

export default Ratings;
