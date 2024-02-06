import { useEffect, useState } from "react";
import RestaurantCard from "./ResturentCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [resData, setResData] = useState([]);

  useEffect(() => {
    fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5511069&lng=77.2983373&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setResData(
          data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
        );
      });
  }, []);

  return resData.length === 0 ? (
    <div className="flex flex-wrap">
      <Shimmer />
      <Shimmer />
      <Shimmer />
      <Shimmer />
      <Shimmer />
      <Shimmer />
      <Shimmer />
      <Shimmer />
      <Shimmer />
      <Shimmer />
      <Shimmer />
    </div>
  ) : (
    <div className="body">
      <div className="container">
        <div className="filter">
          <div className="serach mt-4">
            <input type="text" className="searchBtn" />
            <button>Search</button>
          </div>
          <button
            className="filterBtn mt-4"
            onClick={(e) => {
              const fiterData = resData.filter(
                (data) => data.data.avgRating > 4.3
              );
              console.log(fiterData);
              setResData(fiterData);
            }}
          >
            Top Rated Restaurents
          </button>
        </div>
        <div className="res-conatiner">
          <div className="flex flex-wrap">
            {resData.map((data) => {
              return (
                <RestaurantCard
                  id={data.info.id}
                  name={data.info.name}
                  cusines={data.info.cusines}
                  deliveryTime={data.info.sla.deliveryTime}
                  avgRating={data.info.avgRating}
                  img={data.info.cloudinaryImageId}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
