import useReviews from "../../hooks/useReviews";
import CustomerReview from "../CustomerReview/CustomerReview";

import "./Review.css";

const Review = () => {
  const [reviews, setReviews] = useReviews();

  return (
    <div className="reviews">
      <div className="review-container grid-cols-3">
        {reviews.map((review) => (
          <CustomerReview key={review.id} review={review}></CustomerReview>
        ))}
      </div>
    </div>
  );
};

export default Review;
