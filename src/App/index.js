import React from "react";
import styled, { ThemeProvider } from 'styled-components';

export default class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      themeColor: "green"
    }
  }
  render() {
    return (
      <ThemeProvider theme={{ themeColor: "lightskyblue" }}>
        <h2>Heading</h2>
        <p>Paragraph</p>
        <MyButton>Button</MyButton>
        <MyPrimaryButton>Primary Button</MyPrimaryButton>
      </ThemeProvider>
    );
  }
}

const MyButton = styled.button`
  padding: 10px 30px;
  font-size: 15px;
`;
// 继承
const MyPrimaryButton = styled(MyButton)`
  color: darkblue;
  background-color: ${props => props.theme.themeColor};
`;