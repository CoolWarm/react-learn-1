import React from "react";

import styled from 'styled-components';

export default class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      themeColor: "green"
    }
  }
  render() {
    return (
      <AppWrapper>
        <h2>Heading</h2>
        <p>Paragraph</p>
        <MyInput type="password" border={this.state.themeColor} />
      </AppWrapper>
    );
  }
}

const AppWrapper = styled.div`
  font-size: 20px;
`;

const MyInput = styled.input.attrs({
  placeholder: "my input"
})`
  color: brown;
  border-color: ${props => props.border};
`;