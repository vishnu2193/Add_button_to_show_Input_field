import React from "react";

class Imagedelete extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [
        { id: 1, name: "Hello" },
        { id: 2, name: "World" },
        { id: 3, name: "How" },
        { id: 4, name: "Are" },
        { id: 5, name: "You" },
        { id: 6, name: "?" }
      ]
    };
  }

  // shorter & readable
  delete(item) {
    const data = this.state.data.filter((i) => i.id !== item.id);
    this.setState({ data });
  }

  // or this way, it works as well
  //delete(item){
  //  const newState = this.state.data.slice();
  //    if (newState.indexOf(item) > -1) {
  //    newState.splice(newState.indexOf(item), 1);
  //    this.setState({data: newState})
  //  }
  //}

  render() {
    const listItem = this.state.data.map((item) => {
      return (
        <div key={item.id}>
          <span>{item.name}</span>{" "}
          <button onClick={this.delete.bind(this, item)}>Delete</button>
        </div>
      );
    });
    return <div>{listItem}</div>;
  }
}

export default Imagedelete;
