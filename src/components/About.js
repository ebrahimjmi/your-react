import { Component } from "react";
import User from "./User";

class About extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      company: '',
      location: '',
      bio: '',
      avatar_url: '',
    }
    console.log('constructor');
  }
  componentDidMount() {
    fetch("https://api.github.com/users/ebrahimjmi")
    .then((res) => {
      return res.json()
    })
    .then((data) => {
      this.setState(data)
    })
    console.log('did mount')
  }
  componentWillUnmount() {
    console.log('will unmount')
  }
  render() {
    console.log('reder')
    return (
      <div>
        <User profile = {this.state} />
      </div>
    );
  }
}

export default About;
