import React, { Component } from "react";
import { signIn } from "./users";
import { setUser, setAuthToken } from "./session";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  onEmailChange = (event) => {
    const email = event.target.value;
    this.setState({ email });
  };

  onPasswordChange = (event) => {
    const password = event.target.value;
    this.setState({ password });
  };

  signIn = async () => {
    const { user, authToken } = await signIn(
      this.state.email,
      this.state.password
    );

    setUser(user);
    setAuthToken(authToken);
    this.props.history.push("/todos");
  };

  render() {
    return (
      <div>
        <h1>Sign In</h1>
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
        <button onClick={this.signIn}>Sign In</button>
      </div>
    );
  }
}

export default SignIn;
