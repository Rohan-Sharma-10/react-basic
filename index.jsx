import { useState } from "react";
import './App.css'

export default function App () {
  // const [state, setState] = useState(initialState); It provides a way to declare state variables and update them within your component
  // state: The current state value.
  // setState: A function to update the state.
  // initialState: The initial value for the state

  // count is mutable even though we have declared it in const.
  //  because we are changning the internal elements of the array and not the whole array.
    const [count, setCount] = useState(0);

  function onClickHandler () {
    setCount(count + 1); // similar to count += 1; 
  } 

  return (
  <div>
    <Button onClick={onClickHandler}></Button>
  </div>
);
}

function Button (props) {
  return <button onClick={props.onClickHandler}> Counter {count}</button>
}