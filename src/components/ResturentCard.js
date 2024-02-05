const RestaurantCard = (props) => {
  const {id, name, cusines, deliveryTime, avgRating} = props;
  return (
    <div className="res-card" key={id} >
      <div className="card-img">
        <img src="https://b.zmtcdn.com/data/dish_photos/b6c/9b153dffd3829fb695a66e4fd7182b6c.jpeg" width={200}/>
      </div>
      <div className="card-body">
        <h3>{name}</h3>
        <strong style={{fontSize: 16, display: 'block'}}>{cusines}</strong>
        <strong style={{fontSize: 12, display: 'block'}}>Delivery Time: {deliveryTime}</strong>
        <strong style={{fontSize: 12, display: 'block'}}>Rating: {avgRating}</strong>
      </div>
    </div>
  );
};

export default RestaurantCard;