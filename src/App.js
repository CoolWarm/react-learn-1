import React from "react";

export default class App extends React.Component {
  constructor() {
    super();
    console.log("constructor();");
    this.state = {
      count: 0,
      hasChild: true
    };
  }

  render() {
    console.log("render();");
    return (
      <div>
        <h2>Count: {this.state.count}</h2>
        <button onClick={e => this.add()}>+1</button>
        <hr />
        <button onClick={e => this.toggleChild()}>Toggle Child</button>
        {this.state.hasChild && <Cpn />}
      </div>
    );
  }

  add() {
    this.setState({
      count: this.state.count + 1
    });
  }

  toggleChild() {
    this.setState({
      hasChild: !this.state.hasChild
    });
  }

  componentDidMount() {
    console.log("componentDidMount();");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate();");
  }
}

class Cpn extends React.Component {
  render() {
    return <h1>A Child Component</h1>;
  }

  componentWillUnmount() {
    console.log("componentWillUnmount();");
  }
}