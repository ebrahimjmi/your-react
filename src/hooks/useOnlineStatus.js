import { useState } from "react";

const useOnlineStatus = () => {
  const [online, setOnline] = useState(false);
  if(window.navigator.onLine) {
    setOnline(true);
  }
  return online;
}

export default useOnlineStatus;
