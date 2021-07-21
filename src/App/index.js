import React from "react";

import style from './style.module.css'

export default class App extends React.PureComponent {
  render() {
    return (
      <>
        <h2 className={style.heading}>Heading</h2>
        <p style={{color: "green", fontSize: "20px"}}>paragraph</p>
        <ul>
          <li className={style.listItem}>list item1</li>
          <li className={style.listItem}>list item2</li>
        </ul>
      </>
    );
  }
}