import React, { useEffect } from "react";
import { RESTAURENT_MENU_URL } from "../utils/Constant";
import { useParams } from "react-router-dom";
import { useState } from "react";
import Shimmer from "./Shimmer";
const RestaurantMenu = () => {
  const [resMenuDta, setResMenuData] = useState(null);
  const [restInfo, setRestInfo] = useState(null);
  const {resId} = useParams();

  useEffect(() => {
    fetch((`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.5511069&lng=77.2983373&restaurantId=${resId}`))
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setResMenuData(
          data?.data?.cards[2]?.groupedCard.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards
        );
        setRestInfo(
          data?.data?.cards[0]?.card?.card?.info
        )
        console.log(data);
      });
  }, []);
  if(resMenuDta === null || restInfo === null) {
    return <Shimmer />
  }
  const {name, areaName, cuisines, avgRating, feeDetails } = restInfo;

  return (
    <>
      <div className="container">
        <h4>{name}</h4>
        <div>
          <p>{cuisines.map((data => <span>{data}</span>))}</p>
          <p>{areaName}</p>
          <p>{feeDetails.message}</p>
        </div>
        <h4>Recommended({console.log(resMenuDta)})</h4>
        <ul>
          {resMenuDta?.map((data) => {
            return(
              <>
              <li>
                <p><strong>{data.card.info.name}</strong></p>
                <p>{data.card.info.description}</p>
              </li>
              </>
            )
          })}
        </ul>
      </div>
    </>
  );
};

export default RestaurantMenu;
