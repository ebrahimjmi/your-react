import { useEffect, useState } from "react";
import RestaurantCard from "./ResturentCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [resData, setResData] = useState(null);
  const [searchRestData, setSearchRestData] = useState(null);
  const [searchTxt, setSearchTxt] = useState("");
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
        setSearchRestData(
          data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
        );
      });
  }, []);

  return searchRestData === null ? (
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
      <div className="container m-auto">
        <div className="filter">
          <div className="serach mt-4">
            <input
              type="text"
              className="searchBtn border  outline-none"
              value={searchTxt}
              onChange={(e) => setSearchTxt(e.target.value)}
              
            />
            <button
              onClick={(e) =>
                setSearchRestData(
                  resData.filter((data) =>
                    data.info.name
                      .toLowerCase()
                      .includes(searchTxt.toLowerCase())
                  )
                )
              }
              className=" border p-2 bg-gray-50"
            >
              Search
            </button>
            <button
            className="btn bg-green-100 ml-10 p-2 rounded-lg "
            onClick={(e) => {
              const fiterData = resData.filter(
                (data) => data.info.avgRating > 4.3
              );
              setResData(fiterData);
            }}
          >
            Top Rated Restaurents
          </button>
          </div>
         
        </div>
        <div className="res-conatiner">
          <div className="flex flex-wrap">
            {searchRestData.map((data) => {
              return (
                <Link key={data.info.id} className="res-card m-4 block bg-gray-100 rounded-lg " to={`/restaurents/${data.info.id}`}>
                  <RestaurantCard
                    id={data.info.id}
                    name={data.info.name}
                    cusines={data.info.cusines}
                    deliveryTime={data.info.sla.deliveryTime}
                    avgRating={data.info.avgRating}
                    img={data.info.cloudinaryImageId}
                  />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
