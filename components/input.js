import React from "react";
import {checkResponse , getUser , photoUrls} from "../utils/getUserData";

export class Input extends React.Component {
  render() {
    return (
      <div id="input">
        <form>
          <input type="text" value="username" />
        </form>
      </div>
    );
  }
}
