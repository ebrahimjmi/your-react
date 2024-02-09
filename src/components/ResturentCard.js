import { CLOUDINARY_IMG_URL } from "../utils/Constant";

const RestaurantCard = (props) => {
 
  const {id, name, cusines, deliveryTime, avgRating, img} = props;
  return (
    <>
      <div className="card-img w-100">
        <img className="" src={CLOUDINARY_IMG_URL+'/'+img} width={200}/>
      </div>
      <div className="card-body px-2">
        <h3>{name}</h3>
        <strong >{cusines}</strong>
        <span >Delivery Time: {deliveryTime}</span>
        <span >Rating: {avgRating}</span>
      </div>
    </>
  );
};

export default RestaurantCard;