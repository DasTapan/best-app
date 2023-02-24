import React from "react";
import MyComponent from "./MyComponent";
import logo from "./logo.svg";
import "./App.css";

// function App() {
//   return (
//     <div>
//       <h1>Hello, World</h1>
//       <MyComponent title="React Demo" day="Sunday" />
//     </div>
//   );
// }

class App extends React.Component {
  render() {
    return (
      <div>
        <h2>
          I love{" "}
          {this.props.foods.map((food, index) => {
            return `Food${index + 1}: ${food}, `;
          })}
        </h2>
      </div>
    );
  }
}

App.defaultProps = {
  foods: ["Mutton", "Prawn", "Rasabali", "Bhaja Manda", "Arisa"],
};

export default App;
