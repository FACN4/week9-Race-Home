import React from "react";
import { Race } from "./race";
import { Clock } from "./clock";
import { Input } from "./input";

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
  //>>>>>>>>>>>>>>functions for race
  racePosition = event => {
    //enter key Player 1
    // console.log(this.state.counting);
    if (this.state.counting) {
      // console.log(event.charCode);
      if (event.charCode === 13) {
        this.setState(prevState => {
          return {
            position: [prevState.position[0] + 1, prevState.position[1]]
          };
        });
        // console.log(this.state.position);
      }
      //spacekey Player 2
      else if (event.charCode === 32) {
        this.setState(prevState => {
          return {
            position: [prevState.position[0], prevState.position[1] + 1]
          };
        });
        console.log(this.state.position);
      }
    }
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
        />
        <Race
          className="player-2"
          photoUrl={this.state.photoUrl[1]}
          position={this.state.position[1]}
        />
        <Input position={this.state.position[1]} />
      </div>
    );
  }
}
