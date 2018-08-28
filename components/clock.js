import React from "react";


export class Clock extends React.Component {
state = {
  time : 0,
  counting : false
}

timer = () => {
  this.setState((prevState) => {
    return {time: prevState.time + 1}
  })
}

toggle = () =>{
  this.setState(prevState => {
    if ( prevState.counting){
      clearInterval(this.time);
      this.time = 0;
    }
    else{
timer();
    }
  render(){
    return(
  <div id="clock">
    <button> I am a clock </button>
  </div>
)
}
}
