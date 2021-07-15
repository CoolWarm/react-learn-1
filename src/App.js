import React from "react";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Child name="Harry Potter" age="20" />
        <Child name="Peter Parker" age="18" />
      </div>
    );
  }
}

function Child(props) {
  const { name, age } = props;
  return (
    <div>
      <h2>Name: {name}</h2>
      <h2>Age: {age}</h2>
      <hr />
    </div>
  );
}