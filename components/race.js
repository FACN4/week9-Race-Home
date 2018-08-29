import React from "react";

export class Race extends React.Component {
  render() {
    const { photoUrl } = this.props;
    console.log(this.props);
    return (
      <div id="race">
        <img src={photoUrl} />
      </div>
    );
  }
}
