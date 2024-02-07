import { CLOUDINARY_IMG_URL } from "../utils/Constant";

const RestaurantCard = (props) => {
 
  const {id, name, cusines, deliveryTime, avgRating, img} = props;
  return (
    <>
      <div className="card-img">
        <img src={CLOUDINARY_IMG_URL+'/'+img} width={200}/>
      </div>
      <div className="card-body">
        <h3>{name}</h3>
        <strong style={{fontSize: 16, display: 'block'}}>{cusines}</strong>
        <strong style={{fontSize: 12, display: 'block'}}>Delivery Time: {deliveryTime}</strong>
        <strong style={{fontSize: 12, display: 'block'}}>Rating: {avgRating}</strong>
      </div>
    </>
  );
};

export default RestaurantCard;