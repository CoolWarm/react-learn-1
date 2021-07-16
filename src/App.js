import React from "react";
import TopBarChildren from "./TopBar-children";
import TopBar from "./TopBar-props";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <TopBarChildren>
          <button>{"<"}</button>
          <em>Hello World</em>
          <a href="/">Go</a>
        </TopBarChildren>
        <TopBar left={<button>{"<"}</button>}
          center={<em>Hello World</em>}
          right={<a href="/">Go</a>} />
      </div>
    );
  }
}