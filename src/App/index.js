import React from "react";

import {
  AppWrapper,
  TitleWrapper
} from './style';

export default class App extends React.PureComponent {
  render() {
    return (
      <AppWrapper>
        <TitleWrapper>Heading</TitleWrapper>
        <div className="article">
          <p>Paragraph</p>
          <ul>
            <li>item1</li>
            <li className="active">item2</li>
            <li>item3</li>
            <li>item4</li>
          </ul>
        </div>
      </AppWrapper>
    );
  }
}