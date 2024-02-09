import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestautant from "../hooks/useRestautant";
const RestaurantMenu = () => {

  const {resId} = useParams();
  const restDetails = useRestautant(resId);
  const restInfo = restDetails[0];
  const resMenuDta = restDetails[1];
  
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
