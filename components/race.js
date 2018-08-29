import React from "react";

export class Race extends React.Component {
  render() {
    const { photoUrl } = this.props;
    const { position } = this.props;
    console.log(position);
    return (
      <div
        id="race"
        style={{
          position: "absolute"
        }}
      >
        <img id="avatar" src={photoUrl} style={{ left: `${position}px` }} />
      </div>
    );
  }
}
