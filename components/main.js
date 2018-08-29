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

  toggle = () => {
    const timer = () => {
      this.setState(prevState => {
        return { time: prevState.time + 1 };
      });
    };
    this.setState(prevState => {
      if (prevState.counting) {
        this.setState({ time: 0, counting: false });
        return clearInterval(timer);
      } else {
        this.setState({ counting: true });
        return setInterval(timer, 500);
      }
    });
  };
  //>>>>>>>>>>>>>>functions for race
  racePosition = event => {
    //enter key Player 1
    console.log(event.charCode);
    if (this.state.counting) {
      if (event.charCode === 49) {
        this.setState(prevState => {
          return {
            position: [prevState.position[0] + 1, prevState.position[1]]
          };
        });
      }
      //spacekey Player 2
      else if (event.charCode === 48) {
        this.setState(prevState => {
          return {
            position: [prevState.position[0], prevState.position[1] + 1]
          };
        });
      }
    }
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
          photoUrl={this.state.photoUrl[0]}
          position={this.state.position[0]}
        />
        <Race
          photoUrl={this.state.photoUrl[1]}
          position={this.state.position[1]}
        />
        <Input position={this.state.position[1]} />
      </div>
    );
  }
}
