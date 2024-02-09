import { Component } from "react";

class User extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {name, company, location, bio, avatar_url} = this.props.profile;
    return (
      <div>
        <div className="container">
          <p>
            <strong>User Name:</strong>{name}
          </p>
          <p>
            <strong>Location:</strong> {location}
          </p>
          <p>
            <strong>Bio</strong>
            {bio}
          </p>
          <p>
            <img src={avatar_url} />
          </p>
        </div>
      </div>
    );
  }
}
export default User;
