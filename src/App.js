import React from "react";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Harry Potter",
      age: 21
    }
  }
  render() {
    const { name, age } = this.state;
    return (
      <div>
        <h1>L</h1>
        <Profile name={name} age={age} />
        <h1>L</h1>
      </div>
    );
  }
}

function Profile(props) {
  const { name, age } = props;
  return (
    <div>
      <h2>M</h2>
      <Information name={name} age={age} />
      <h2>M</h2>
    </div>
  );
}

function Information(props) {
  const {name, age} = props;
  return (
    <div>
      <h3>S</h3>
      <h3>Name: {name}</h3>
      <h3>Age: {age}</h3>
      <h3>S</h3>
    </div>
  );
}