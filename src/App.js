import React, { PureComponent } from "react";
import ReactDOM from "react-dom";

export default class App extends React.PureComponent {
  render() {
    return (
      <div>
      <h1>APP</h1>
        <Modal>
          <Pop />
          <h3>Hello World</h3>
        </Modal>
      </div>
    );
  }
}

class Modal extends PureComponent {
  render() {
    return ReactDOM.createPortal(
      this.props.children,
      document.querySelector("#modal")
    );
  }
}

class Pop extends PureComponent {
  render() {
    return (
      <div>
        <h2>POP</h2>
      </div>
    )
  }
}
