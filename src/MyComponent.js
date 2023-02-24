import React from "react";

function MyComponent(props) {
  console.log(props);
  return (
    <div>
      <h2>
        Learning {props.title} on {props.day}
      </h2>
    </div>
  );
}

// class MyComponent extends Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return (
//       <div>
//         <h1>{this.props.title}</h1>
//         <button onClick={this.props.onButtonClicked}>Click Me!</button>
//       </div>
//     );
//   }
// }

export default MyComponent;
