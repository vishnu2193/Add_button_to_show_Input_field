import React from "react";
import "./HideShow.css";

class HideShow extends React.Component {
  constructor() {
    super();

    this.state = {
      open: false
    };
  }
  handleButtonClick = () => {
    this.setState((state) => {
      return {
        open: !state.open
      };
    });
  };
  container = React.createRef();
  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }
  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }
  handleClickOutside = (event) => {
    if (
      this.container.current &&
      !this.container.current.contains(event.target)
    ) {
      this.setState({
        open: false
      });
    }
  };
  // below link to understand
  //https://codedaily.io/tutorials/Create-a-Dropdown-in-React-that-Closes-When-the-Body-is-Clicked
  render() {
    return (
      <div className="container" ref={this.container}>
        <button type="button" class="button" onClick={this.handleButtonClick}>
          ☰
        </button>
        {this.state.open && (
          <div class="dropdown">
            <ul>
              <li>Option 1</li>
              <li>Option 2</li>
              <li>Option 3</li>
              <li>Option 4</li>
            </ul>
          </div>
        )}
      </div>
    );
  }
}

export default HideShow;
