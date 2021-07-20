import React from "react";

class App extends React.PureComponent {
  render() {
    return (
      <div>
        <h1>APP</h1>
      </div>
    );
  }
}

App.displayName = "Inside";

function enhanceComponent(WrappedComponent) {
  class EnhancedComponent extends React.PureComponent {
    render() {
      return <WrappedComponent {...this.props} />
    }
  }
  EnhancedComponent.displayName = "Outside";
  return EnhancedComponent;
}

export default enhanceComponent(App);