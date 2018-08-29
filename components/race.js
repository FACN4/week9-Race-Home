import React from "react";

export class Race extends React.Component {
  render() {
    const { photoUrl, position } = this.props;
    return (
      <div id="race">
        <img
          id="avatar"
          src={photoUrl}
          // style="position: absolute; left: 15px; top: 100px;"
        />
      </div>
    );
  }
}
