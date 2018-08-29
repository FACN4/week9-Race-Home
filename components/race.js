import React from "react";

export class Race extends React.Component {
  render() {
    const { homeImg } = this.props;
    const { photoUrl } = this.props;
    const { position } = this.props;
    const { raceId } = this.props;
    console.log(position);
    return (
      <div
        id={raceId}
        style={{
          position: "relative"
        }}
      >
        <img id="avatar" src={photoUrl} style={{ left: `${position}px` }} />
        <img
          id="home"
          src="https://www.dbs.com/dbsdevelopers/Assets/Images/icons_homeplanner.png"
        />
      </div>
    );
  }
}
