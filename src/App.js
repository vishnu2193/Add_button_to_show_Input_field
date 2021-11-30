import React from "react";
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    // props from sample.js
    console.log(this.props.name);
    this.state = {
      inputs: [],
      posts: [],
      search: ""
    };
  }

  componentDidMount() {
    axios({
      url: `https://jsonplaceholder.typicode.com/posts`,
      method: "GET",
      headers: { "Content-Type": "application/json" }
    })
      .then((responce) => {
        this.setState({ posts: responce.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  addInput = (ev) => {
    this.setState((prev) => ({ inputs: [...prev.inputs, "HI"] }));
  };
  handle = (e) => {
    this.setState({ search: e.target.value });
  };

  render() {
    var person = require("./Sample.js");
    const { posts, search } = this.state;
    return (
      <div>
        <h1>
          {person.firstName}
          {person.lastName}
          {this.props.name}
        </h1>
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

        {/* search & get api */}
        <input onChange={this.handle} value={search} />
        <div>
          {posts
            .filter((item) =>
              item.title.toLowerCase().includes(search.toLowerCase())
            )
            .map((item) => {
              return (
                <div>
                  <p>{item.title}</p>
                  <p>{item.id}</p>
                </div>
              );
            })}

          {/*          {counter > 1 ? (
                  <input />
                ) : (
                  <input value={item.price} disabled />
                )}     */}
        </div>
      </div>
    );
  }
}
export default App;
