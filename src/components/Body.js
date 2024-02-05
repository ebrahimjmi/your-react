import { useState } from "react";
import RestaurantCard from "./ResturentCard";
import { listOfRestaurents } from "./mockData";
const Body = () => {
  
console.log(listOfRestaurents);

const [resData, setResData] = useState(listOfRestaurents);
  return (
    <div className="body">
      <div className="container">
        <div className="filter">
          <button
            className="filterBtn"
            onClick={(e) => {
              const fiterData = resData.filter((data) => data.data.avgRating > 4.3)
              console.log(fiterData)
              setResData(fiterData);
            }}
          >
            Top Rated Restaurents
          </button>
        </div>
        <div className="serch">Search</div>
        <div className="res-conatiner">
          <div className="flex flex-wrap">
            {
              resData.map((data) => {
                return <RestaurantCard id= {data.data.id} name={data.data.name} cusines={data.data.cusines} deliveryTime={data.data.deliveryTime} avgRating={data.data.avgRating} />
              })
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
