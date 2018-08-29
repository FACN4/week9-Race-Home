import React from "react";

export class Race extends React.Component {
  render() {
    const { imgUrl } = this.props;
    return (
      <div id="race">
        <img src={imgUrl} />
      </div>
    );
  }
}
