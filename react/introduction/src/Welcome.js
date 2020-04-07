import React from "react";

const Welcome = (props) => {
  return (
    <h1>
      Hi {props.name}! Your age is {props.age} years.
    </h1>
  );
};

export default Welcome;
