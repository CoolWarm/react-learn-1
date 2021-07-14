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

class Child extends React.Component {
  // 默认
  // constructor(props) {
  //   super(props);
  //   // this.props = props;
  // }

  render() {
    return (
      <div>
        <hr />
        <h2>Name: {this.props.name}</h2>
        <h2>Age: {this.props.age}</h2>
        <hr />
      </div>
    );
  }
}