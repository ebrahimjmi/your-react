const useOnlineStatus = () => {
  if(window.navigator.onLine) {
    return true;
  } else {
    return false;
  }
}

export default useOnlineStatus;
