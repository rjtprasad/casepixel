import { Star } from "lucide-react";

const UserRatings = () => {
  return (
    <>
      {[...Array(5)].map((_, index) => (
        <Star key={index} className="h-4 w-4 text-green-600 fill-green-600" />
      ))}
    </>
  );
};

export default UserRatings;
