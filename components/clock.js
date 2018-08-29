import React from "react";

export class Clock extends React.Component {
  state = {
    time: 0,
    counting: false
  };

  timer = () => {
    this.setState(prevState => {
      return { time: prevState.time + 1 };
    });
  };

  toggle = () => {
    var timer = setInterval(
      this.setState(prevState => {
        return { time: prevState.time + 1 };
      }),
      1000
    );
    this.setState(prevState => {
      if (prevState.counting) {
        clearInterval(this.time);
        this.setState({ time: 0, counting: false });
      } else {
        this.setState({ counting: true });
        return setInterval(this.timer, 500);
      }
    });
  };
  render() {
    return (
      <div id="clock">
        <p> {this.state.time}</p>
        <button onClick={this.toggle}>
          {" "}
          {this.state.counting ? <p>Stop</p> : <p> Start</p>}
        </button>
      </div>
    );
  }
}
