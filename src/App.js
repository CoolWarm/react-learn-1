import React from "react";
import PropTypes from 'prop-types';

// https://react.docschina.org/docs/typechecking-with-proptypes.html

export default class App extends React.Component {
  render() {
    return (
      <div>
        <ClassChild name="Harry Potter" age={20} hobbies={["magic", "learning"]} />
        <FunctionChild name="Peter Parker" age={18} hobbies={["hanging", "fighting"]} />
        <FunctionChild />
        <ClassChild />
      </div>
    );
  }
}

function FunctionChild(props) {
  const { name, age, hobbies } = props;
  return (
    <div>
      <h2>Name: {name}</h2>
      <h2>Age: {age}</h2>
      <ul>
        {hobbies.map((item) => {
          return <li>{item}</li>;
        })}
      </ul>
      <hr />
    </div>
  );
}

FunctionChild.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  hobbies: PropTypes.array.isRequired
}

FunctionChild.defaultProps = {
  name: "Harry Potter",
  age: 18,
  hobbies: []
}


class ClassChild extends React.Component {
  render() {
    const { name, age, hobbies } = this.props;
    return (
      <div>
        <h2>Name: {name}</h2>
        <h2>Age: {age}</h2>
        <ul>
          {
            hobbies.map((item) => {
              return <li>{item}</li>
            })
          }
        </ul>
        <hr />
      </div>
    );
  };
  
  static propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number,
    hobbies: PropTypes.array.isRequired
  }

  static defaultProps = {
    name: "Peter Parter",
    age: 19,
    hobbies: []
  }
}