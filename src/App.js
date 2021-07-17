import React from "react";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "BEFORE"
    }
  }
  render() {
    return (
      <div>
        <h2>{this.state.message}</h2>
        <button onClick={e => this.changeText()}>Change Text</button>
      </div>
    )
  }
  changeText() {
    this.setState({
      message: "AFTER"
    }, () => { console.log("in setState():", this.state.message) });
    console.log("after setState():", this.state.message);
  }
  componentDidUpdate() {
    console.log("componentDidUpdate:", this.state.message);
  }
}
