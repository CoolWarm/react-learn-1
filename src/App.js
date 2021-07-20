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

function enhanceComponent(WrappedComponent) {
  return function EnhancedComponent(props) {
    return <WrappedComponent {...props}/>
  }
}

export default enhanceComponent(App);