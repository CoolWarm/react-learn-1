import React from "react";
import classNames from "classnames";

export default class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isActive: true,
    }
  }
  render() {
    const { isActive } = this.state;
    return (
      <>
        <h1 className={classNames("title", { active: isActive }, ["important", "primary"], true, null, undefined, 0, 99)}>Hello World</h1>
      </>
    );
  }
}