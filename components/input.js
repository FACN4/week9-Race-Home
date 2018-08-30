import React from "react";
import {username , photo_url} from "./data.json";

export class Input extends React.Component {
  render() {
    return (
      <div id="input">
        <form>
        <input id="inputBox" type="text" list="suggestion" placeholder="">
    <button id ="btn" type="button">Search</button>
    <datalist id= "suggestion">
  </datalist>
        </form>
      </div>
    );
  }
}


// <input id="username" type="text" value={this.props.username} autoFocus/>
