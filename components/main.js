import React from "react";
import { Race } from "./race";
import { Clock } from "./clock";
import { Input } from "./input";
import { getUser } from "../utils/getUserData";

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

  // timer = () => {};
  //
  // toggle = () => {
  //   this.timer;
  // };

  toggle = () => {
    const timer = () => {
      this.setState(prevState => {
        return { time: prevState.time + 1 };
      });
    };
    this.setState(prevState => {
      if (prevState.counting) {
        this.setState({ time: 0, counting: false, position: [0, 0] });
        return clearInterval(timer);
      } else {
        this.setState({ counting: true });
        return setInterval(timer, 500);
      }
    });
  };
  //>>>>>>>>>>>>>>functions for race
  racePosition = event => {
    //1 key Player 1
    if (this.state.counting) {
      if (this.state.position[0] > 750 || this.state.position[1] > 750) {
        return;
      }

      if (event.charCode === 49) {
        this.setState(prevState => {
          return {
            position: [prevState.position[0] + 5, prevState.position[1]]
          };
        });
      }

      //0 key Player 2
      else if (event.charCode === 48) {
        this.setState(prevState => {
          return {
            position: [prevState.position[0], prevState.position[1] + 5]
          };
        });
      }
    }
    console.log(this.state.position);
    // setTimeout(function() {
    //   console.log("timeout");
    // }, 1000);
  };

  render() {
    return (
      <div id="main" onKeyPress={this.racePosition}>
        <Clock
          time={this.state.time}
          toggle={this.toggle}
          counting={this.state.counting}
        />
        <Input position={this.state.position[0]} />
        <Race
          className="player-1"
          photoUrl={this.state.photoUrl[0]}
          position={this.state.position[0]}
          raceId="race1"
        />
        <Race
          className="player-2"
          photoUrl={this.state.photoUrl[1]}
          position={this.state.position[1]}
          raceId="race2"
        />
        <Input position={this.state.position[1]} />
      </div>
    );
  }
}
