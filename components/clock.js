import React from "react";

export class Clock extends React.Component {
  render() {
    const { toggle, time, counting } = this.props;
    return (
      <div id="clock">
        <p> {time}</p>
        <button onClick={toggle}>
          {" "}
          {counting ? <p>Stop</p> : <p> Start</p>}
        </button>
      </div>
    );
  }
}
