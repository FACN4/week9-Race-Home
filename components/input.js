import React from "react";
import {getUser} from "../utils/getUserData";

export class Input extends React.Component {
  render() {
    return (
      <div id="input">
        <form>
          <input id="username" type="text" value={this.props.username}/>
        </form>
      </div>
    );
  }
}


//ref="" onChange={this.handleChange}//
//autoFocus autoComplete="false"//
