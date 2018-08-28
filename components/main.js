import React from "react";
import { Race } from "./race";
import { Clock } from "./clock";
import { Input } from "./input";

export class Main extends React.Component {
  render() {
    return (
      <div id="main">
        <Clock />
        <Input />
        <Race />
        <Race />
        <Input />
      </div>
    );
  }
}
