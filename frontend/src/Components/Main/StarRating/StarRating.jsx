import { FaStar, FaRegStar, FaStarHalfAlt } from 'react-icons/fa';

const StarRating = ({ rating }) => {

    if(!rating){
        return <p>No rating available</p>;
    }
  // Calculate number of filled stars and empty stars
  const numStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const numEmptyStars = 5 - numStars - (hasHalfStar ? 1 : 0);

  // Create arrays for filled, half-filled, and empty stars
  const filledStars = new Array(numStars).fill(null).map((_, i) => <FaStar key={i} style={{ color: "gold" }} />);
  const halfStars = hasHalfStar ? [<FaStarHalfAlt key="halfstar" color="gold" style={{clipPath: "inset(0 50% 0 0)"}} />] : [];
  const emptyStars = new Array(numEmptyStars).fill(null).map((_, i) => <FaRegStar key={i} />);

  // Combine all star arrays into one array
  const allStars = [...filledStars, ...halfStars, ...emptyStars];

  return (
    <div>
      {allStars.map((star) => (
        <span key={star.key}>{star}</span>
      ))}
    </div>
  );
};
export default StarRating;