import React from "react";

export default class App extends React.PureComponent {
  constructor(props) {
    super(props);

    this.usernameRef = React.createRef();
  }
  render() {
    return (
      <div>
        <form onSubmit={e => this.handleSubimt(e)}>
          <div>
            <label htmlFor="username">Username:
              <input type="text"
                id="username"
                name="username"
                ref={this.usernameRef}
                // 可设置初始默认值
                // defaultValue="username"
              />
            </label>
          </div>
          <input type="submit" value="SUBMIT" />
        </form>
      </div>
    );
  }
  handleSubimt(event) {
    event.preventDefault();
    const username = this.usernameRef.current.value;
    console.log(username);
  }
}