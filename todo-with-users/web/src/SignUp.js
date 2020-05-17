import React, { Component } from "react";
import { signUp } from "./users";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
    };
  }

  onNameChange = (event) => {
    const name = event.target.value;
    this.setState({ name });
  };

  onEmailChange = (event) => {
    const email = event.target.value;
    this.setState({ email });
  };

  onPasswordChange = (event) => {
    const password = event.target.value;
    this.setState({ password });
  };

  signUp = async () => {
    await signUp(this.state.name, this.state.email, this.state.password);
    this.props.history.push("/signIn");
  };

  render() {
    return (
      <div>
        <h1>Sign Up</h1>
        <input
          name="name"
          value={this.state.name}
          onChange={this.onNameChange}
        />
        <input
          name="email"
          value={this.state.email}
          onChange={this.onEmailChange}
        />
        <input
          name="password"
          type="password"
          value={this.state.password}
          onChange={this.onPasswordChange}
        />
        <button onClick={this.signUp}>Sign Up</button>
      </div>
    );
  }
}

export default SignUp;
