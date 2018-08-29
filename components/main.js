import React from "react";
import { Race } from "./race";
import { Clock } from "./clock";
import { Input } from "./input";
import {checkResponse , getUser , photoUrls} from "../utils/getUserData";


export class Main extends React.Component {
  state = {
    time: 0,
    counting: false,
    photoUrl: [
      "https://avatars1.githubusercontent.com/u/24710103?s=400&u=7f0d9ddf007bb1072ea08f96f841a2b97e4b4fca&v=4",
      "https://avatars3.githubusercontent.com/u/39088518?v=4"
    ],
    position: [0, 0]
  };
  //>>>>>>>>>>>>>>functions for Clock

  timer = () => {
    this.setState(prevState => {
      return { time: prevState.time + 1 };
    });
  };

  toggle = () => {
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
      <div id="main">
        <Clock
          time={this.state.time}
          toggle={this.toggle}
          counting={this.state.counting}
        />
        <Input />
        <img src={avatar_url}/>
        <Race photoUrl={this.state.photoUrl[1]} />
        <Input />
      </div>
    );
  }
}
