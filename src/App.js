import React from "react";

import moment from 'moment';
import { Button, Menu, Dropdown, DatePicker } from "antd";

export default class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    const menu = (
      <Menu onClick={e => this.handleMenuClick(e)}>
        <Menu.Item key="1">1st item</Menu.Item>
        <Menu.Item key="2">2nd item</Menu.Item>
        <Menu.Item key="3">3rd item</Menu.Item>
      </Menu>
    );
    return (
      <>
        <Button type="primary">primary</Button>
        <Button>secondary</Button>
        <Dropdown.Button overlay={menu}>Actions</Dropdown.Button>
        <DatePicker allowClear={false} />
        <DatePicker defaultValue={moment('2030/01/01', "YYYY/MM/DD")} format="YYYY/MM/DD" />
      </>
    );
  }
  handleMenuClick(e) {
    console.log('click', e);
  }
}

