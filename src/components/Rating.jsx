import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { nanoid } from "nanoid";

const StarRating = ({ onRatingChange }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(null);

  return (
    <div className="container mt-4 rounded d-flex justify-content-end">
      <div className="rating text-center px-5">
        <span className="subtitle d-inline">Películas Con Rate</span>
        <div className="rating-stars d-inline ps-2 mb-3">
          {[...Array(5)].map((star, index) => {
            const ratingValue = index + 1;
            return (
              <label>
                <input
                  type="radio"
                  name="rating"
                  value={ratingValue}
                  key={nanoid()}
                  onClick={() => {
                    setRating(ratingValue);
                    onRatingChange(ratingValue); // Llamar al prop con el valor del rating
                  }}
                />
                <FaStar
                  className="star"
                  color={
                    ratingValue <= (hover || rating) ? "#FFC107" : "#e4e5e9"
                  }
                  size={20}
                  onMouseEnter={() => setHover(ratingValue)}
                  onMouseLeave={() => setHover(null)}
                />
              </label>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default StarRating;
