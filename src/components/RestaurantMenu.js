import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestautant from "../hooks/useRestautant";
import { CLOUDINARY_IMG_URL } from "../utils/Constant";
import { useDispatch } from "react-redux";
import { addItems } from "../slice/cartSlice";
const RestaurantMenu = () => {

  const { resId } = useParams();
  const restDetails = useRestautant(resId);
  const restInfo = restDetails[0];
  const resMenuDta = restDetails[1];
  const dispatch = useDispatch();
  
  const handleClick = (data) => {
    dispatch(addItems(data));
  }
  if (resMenuDta === null || restInfo === null) {
    return <Shimmer />;
  }
  const { name, areaName, cuisines, avgRating, feeDetails } = restInfo;
  return (
    <>
      <div className="container m-auto w-1/2">
        <div className="mt-20">
          <div className="py-4 border-2 border-dotted border-l-0 border-t-0 border-r-0 mb-5">
            <h4 className="font-bold text-xl ">{name}</h4>
            <div className="text-sm text-gray-500">
              <p>
                {cuisines.map((data) => (
                  <span>{data}</span>
                ))}
              </p>
              <p>{areaName}</p>
              <p className="mt-4">{feeDetails.message}</p>
            </div>
          </div>
          <h4 className="text-gray-700 text-xl font-bold mb-3">
            Recommended({resMenuDta?.length})
          </h4>
          <ul>
            {resMenuDta?.map((data) => {
              return (
                <>
                  <li key={data?.info?.id} className="card">
                    <div className="card-inner flex justify-between align-top my-12">
                      <div className="left-sect w-3/4 mr-8">
                        <p className="opacity-7 text-gray-700">
                          <strong>{data.card.info.name}</strong>
                        </p>
                        <p className="text-sm text-gray-500 mt-5">{data.card.info.description}</p>
                      </div>
                      <div className="rigt-sect w-1/4">
                        <div className="cursor-pointer relative">
                          <img
                            src={`${CLOUDINARY_IMG_URL}/${data.card.info.imageId}`} className="rounded-lg"
                          />
                          <button onClick={(e) => handleClick(data)} className="btn uppercase absolute bottom-0 right-10 text-green bg-white px-4 py-1 shadow-md rounded-md">Add</button>
                        </div>
                      </div>
                    </div>
                  </li>
                </>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default RestaurantMenu;
