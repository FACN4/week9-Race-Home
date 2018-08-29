import React from "react";
import { Race } from "./race";
import { Clock } from "./clock";
import { Input } from "./input";

export class Main extends React.Component {
  // state = {
  //   time: 0,
  //   photoUrl: [],
  //   position: []
  // };
  // moveAvatar () => {
  //
  // }
  render() {
    return (
      <div id="main">
        <Clock />
        <Input />
        <Race /* imgUrl={someUrl} */ />
        <Race />
        <Input />
      </div>
    );
  }
}
