import { Component, useEffect, useState } from "react";
import User from "./UserProfileClass";
import UserProfile from "./UserProfile";

const About = () => {
  
  const [userInfo, setUserInfo] = useState({
    name: '',
    company: '',
    location: '',
    bio: '',
    avatar_url: '',
  });
  const [counter, setCounter] = useState(0);
  useEffect ((e) => {
    fetch("https://api.github.com/users/ebrahimjmi")
    .then((res) => {
      return res.json()
    })
    .then((data) => {
      setUserInfo(data);
    })
    console.log('parent component did mount')
    const timer = setInterval(() => {
    }, 1000)

    return () => {                            // componentWillUnmo
      clearInterval(timer);
      console.log('comonent will unmount')
    }
  }, [])

  const clickCounter = (e) => {
    setCounter(counter+1);
  }

  console.log('parent render')
  return (
    <>
    <UserProfile user = {userInfo} counter = {counter} clickCounter = {clickCounter} />
    </>
  )
}

export default About;
