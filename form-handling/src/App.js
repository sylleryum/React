import React, { Component } from "react";
import TheForm from "./TheForm";

/*
Challenge:

Given a stateless functional component:
1. Follow the steps necessary to add state to it,
2. Have state keep track of whether the user is logged in or not
3. Add a button that logs the user in/out
    a. extra challenge - make the button display "log in" if they're not logged in and "log out" if they are
4. Display text that says "Logged in" if the user is logged in, or "Logged out" if they're not.
*/

class App extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      age: 0,
      gender: "",
      location: "",
      vegetarian: false,
      glutenFree: false
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    // const {name, value, type, checked} = event.target
    //     type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({ [name]: value })

    const { name, value, type, checked } = event.target;
    type === "checkbox"
      ? this.setState({ [name]: checked })
      : this.setState({ [name]: value });

    //console.log(this.state);
    // this.setState(prevstate => {
    //   //return { isLogged: !prevstate.isLogged };
    // });
  }

  render() {
    return (
      <div>
        <TheForm formInfo={this.state} onClicking={this.handleChange} />
      </div>
    );
  }
}

export default App;
