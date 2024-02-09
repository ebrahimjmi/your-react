import { useEffect } from "react";

const UserProfile = ({user, counter, clickCounter}) => {

  const {name, company, location, bio, avatar_url} = user;

  console.log('child render');

  useEffect(() => {
    console.log('child component did mount');
  }, [])
  return(
    <div className="container">
      <p>{counter}</p>
      <p><button onClick={clickCounter}>counter</button></p>
      <p><strong>User name:</strong>{name}</p>
      <p><strong>User name:</strong>{company}</p>
      <p><strong>User name:</strong>{location}</p>
      <p><strong>User name:</strong>{bio}</p>
      <p>
        <img src={avatar_url} />
      </p>

    </div>
  )
}

export default UserProfile;