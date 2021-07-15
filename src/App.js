import React from "react";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }
  render() {
    return (
      <div>
        <h2>{this.state.count}</h2>
        <button onClick={e => this.add(1)}> +1 </button>
        <CountButton onClick={e => this.add(2)} />
      </div>
    );
  }
  // 子组件使用父组件的this，可以采用 箭头函数 或 .bind()
  add(value) {
    this.setState({
      count: this.state.count + value
    });
  }
}

class CountButton extends React.Component {
  render() {
    const { onClick } = this.props;
    return <button onClick={onClick}> +2 </button>;
  }
}