import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputs: []
    };
  }

  addInput = (ev) => {
    this.setState((prev) => ({ inputs: [...prev.inputs, "HI"] }));
  };

  render() {
    return (
      <div>
        <button onClick={this.addInput}>Add input</button>
        <br />
        {this.state.inputs.map((i) => {
          return (
            <>
              <input type="text" />
              <input type="text" />
              <input type="text" />
              <input type="text" />
            </>
          );
        })}
      </div>
    );
  }
}
export default App;
