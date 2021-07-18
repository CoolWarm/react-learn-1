import React from "react";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }
  render() {
    return (
      <div>
        <h2>{this.state.count}</h2>
        <button onClick={e => this.add(1)}> +1 </button>
      </div>
    );
  }
  add(value) {
    // setState操作被合并
    // this.setState({
    //   count: this.state.count + value
    // }, ()=>{console.log("+1");});
    // this.setState({
    //   count: this.state.count + value
    // }, ()=>{console.log("+1");});

    // setState合并时进行累加
    this.setState((prevState, nextProps) => {
      return {
        count: prevState.count + 1
      }
    }, ()=>{console.log("+1");})
    this.setState((prevState, nextProps) => {
      return {
        count: prevState.count + 1
      }
    }, ()=>{console.log("+1");})
  }
}