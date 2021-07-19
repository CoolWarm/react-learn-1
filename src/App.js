import React from "react";

export default class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.titleRef2 = React.createRef();
    this.titleRef3 = null;
    this.counterRef = React.createRef();
  }
  render() {
    return (
      <div>
        <h2 ref="titleRef1">Hello World</h2>
        <h2 ref={this.titleRef2}>Hello World</h2>
        <h2 ref={(arg) => {this.titleRef3 = arg}}>Hello World</h2>
        <button onClick={e => this.changeText()}>Change Text</button>
        <hr />
        <Counter ref={this.counterRef} />
        <button onClick={e => this.counterAdd(2)}> ++ </button>
      </div>
    );
  }
  changeText() {
    // 字符串 不推荐
    this.refs.titleRef1.innerHTML = "Hello Ref1";
    // 对象 推荐
    this.titleRef2.current.innerHTML = "Hello Ref2";
    // 函数
    this.titleRef3.innerHTML = "Hello Ref3";
  }
  counterAdd(value) {
    // 控制自定义组件
    this.counterRef.current.add(value);
  }
}

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      count: 0
    }
  }
  render() {
    return (
      <div>
        <h2>Count: {this.state.count}</h2>
        <button onClick={e => this.add(1)}> +1 </button>
      </div>
    );
  }
  add(value) {
    this.setState({
      count: this.state.count + value
    });
  }
}