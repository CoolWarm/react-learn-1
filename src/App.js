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
        <button onClick={e => this.changeText()}>Change Text 1</button>
        <button id="btn">Change Text 2</button>
      </div>
    )
  }
  changeText() {
    // setTimeout setState同步
    setTimeout(() => {
      this.setState({
        message: "AFTER"
      }, () => { console.log("in setState():", this.state.message) });
      console.log("after setState():", this.state.message);
    }, 0);
  }
  componentDidUpdate() {
    console.log("componentDidUpdate:", this.state.message);
  }
  componentDidMount() {
    // 原生DOM事件中 setState同步
    document.querySelector("#btn").addEventListener("click", () => {
      this.setState({
        message: "AFTER"
      }, () => { console.log("in setState():", this.state.message) });
      console.log("after setState():", this.state.message);
    })
  }
}
// 在 组件生命周期 或 React合成事件 中 setState异步