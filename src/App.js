import React from "react";

export default class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      hobby: "football"
    }
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
                value={this.state.username}
                onChange={e => this.handleChange(e)}
              />
            </label>
          </div>
          <div>
            <label htmlFor="password">Password:
              <input type="password"
                id="password"
                name="password"
                value={this.state.password}
                onChange={e => this.handleChange(e)}
              />
            </label>
          </div>
          <div>
            <label htmlFor="hobby">Hobby
              <select id="hobby"
                name="hobby"
                value={this.state.hobby}
                onChange={e => this.handleChange(e)}>
                <option value="baskball">Basketball</option>
                <option value="football">Football</option>
                <option value="volleyball">volleyball</option>
              </select>
            </label>
          </div>
          <input type="submit" value="SUBMIT" />
        </form>
      </div>
    );
  }
  handleChange(event) {
    this.setState({
      // 计算属性名 computed property names
      [event.target.name]: event.target.value
    });
  }
  handleSubimt(event) {
    event.preventDefault();
    console.log(this.state.username, this.state.password, this.state.hobby);
  }
}