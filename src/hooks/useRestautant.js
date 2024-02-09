import React, { useState, useEffect } from 'react'
import { RESTAURENT_MENU_URL } from '../utils/Constant';
const useRestautant = (resId) => {

  const [restInfo, setRestInfo] = useState(null);
  const [resMenuDta, setResMenuData] = useState(null);

  useEffect(() => {
    fetch((`${RESTAURENT_MENU_URL}=${resId}`))
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

  return [restInfo, resMenuDta]
}

export default useRestautant