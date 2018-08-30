import React from "react";

export class Race extends React.Component {
  state = {
    positionVert: Math.floor(Math.random() + 20)
  };
  bounce = () => {
    this.setState(prevState => {
      var counter = prevState.positionVert;
      var inc = +4;
      setInterval(() => {
        if (counter == 20) {
          inc = -4;
        } else if (counter == -20) {
          inc = +4;
        }
        counter += inc;
        // console.log(counter);
        this.state.positionVert = counter;
      }, 40);
    });
  };
  render() {
    const { photoUrl, position } = this.props;

    return (
      <div
        id="race"
        onLoad={this.bounce}
        style={{
          position: "relative"
        }}
      >
        <img
          id="avatar"
          src={photoUrl}
          style={{ left: `${position}px`, top: `${this.state.positionVert}px` }}
        />
      </div>
    );
  }
}
