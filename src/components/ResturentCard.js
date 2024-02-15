import { Link } from "react-router-dom";
import { CLOUDINARY_IMG_URL } from "../utils/Constant";
import { useContext } from "react";
import userContext from "../hooks/context/UserContext";

const RestaurantCard = (props) => {
  const { id, name, cusines, deliveryTime, avgRating, img, aggregatedDiscountInfoV3 } = props;
  const data = useContext(userContext);
  return (
    <>
      <Link to={`/restaurents/${id}`}>
        <div className="card-img w-100">
          <img className="w-[200px] h-[200px]" src={CLOUDINARY_IMG_URL + "/" + img} width={200} />
          <label>{aggregatedDiscountInfoV3?.subHeader}</label>
        </div>
        <div className="card-body px-2">
          <h3 className="font-bold my-2 text-lg">{name}</h3>
          <strong>{cusines}</strong>
          <span className="block text-sm">Delivery Time: {deliveryTime}</span>
          <span className="block text-sm">Rating: {avgRating}</span>
          <strong>{data.loggedInUser}</strong>
        </div>
      </Link>
    </>
  );
};

export default RestaurantCard;
