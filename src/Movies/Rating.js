import ReactStars from "react-rating-stars-component";
import React from "react";

function Rating(props) {
  const ratingChanged = (newRating) => {
    props.setRate(newRating);
  };

  return (
    <ReactStars
      count={5}
      onChange={ratingChanged}
      size={24}
      activeColor="#ffd700"
    />
  );
}

export default Rating;
