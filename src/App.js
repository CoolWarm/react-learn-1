import React from "react";

export default class App extends React.PureComponent {
  render() {
    return (
      <div>
        <Test />
      </div>
    );
  }
}

function withRenderTime(WrappedComponent) {
  return class extends React.Component {
    render() {
      return (
        <WrappedComponent />
      )
    }
    UNSAFE_componentWillMount() {
      this.beginTime = Date.now();
    }
    componentDidMount() {
      this.endTime = Date.now();
      const interval = this.endTime - this.beginTime;
      console.log(`${WrappedComponent.name}: ${interval}`);
    }
  }
}

class TestComponent extends React.PureComponent {
  render() {
    return (
      <div>
        <h2>Test</h2>
      </div>
    )
  }
}

const Test = withRenderTime(TestComponent);