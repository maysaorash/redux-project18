import React from 'react';
function Counter(props) {
   return (
    <div className = "container">
      <div>{props.counter}</div>
      <div><button onClick = {props.increment}>Increase</button>
      <button onClick = {props.decrement}>Decrease</button></div>
   </div>
      );
   }

export default Counter;