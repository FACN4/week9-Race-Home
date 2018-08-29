import React from "react";

export class Race extends React.Component {
  state = {
    positionVert: 0
  };
  bounce = () => {
    const moveOne = () => {
      this.setState(prevState => {
        if (this.state.positionVert > 100) {
          return prevState.positionVert - 1;
        } else if (this.state.positionVert < -100) {
          return prevState.positionVert + 1;
        }
      });
      console.log(this.state.positionVert);
    };
    // setInterval(moveOne, 1000);
  };
  render() {
    const { photoUrl } = this.props;
    const { position } = this.props;
    console.log(position);
    return (
      <div
        id="race"
        onLoad={this.bounce}
        style={{
          position: "absolute"
        }}
      >
        <img id="avatar" src={photoUrl} style={{ left: `${position}px` }} />
      </div>
    );
  }
}
