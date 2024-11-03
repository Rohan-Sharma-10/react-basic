import { useState, useEffect } from 'react' 

function App () {
  return <div>
    <Counter></Counter>
  </div>
}

function Counter () {
  const [count, setCount] = useState(0)
  let [counterVisible, setcounterVisible] = useState(true);

  useEffect(function () {
    setInterval(() => {
      setcounterVisible(c => !c)
    }, 5000);
  }, [])

  console.log("counter");
  function increaseCount () {
    setCount(count + 1);
  }

  function decreaseCount () {
    setCount(count - 1);
  }

  function resetCount () {
    setCount(0);
  }

  return <div>
    <h1> {count} </h1>
    <button onClick={increaseCount}> Increment </button>
    <button onClick={decreaseCount}> Decrement </button>
    <button onClick={resetCount}> Reset </button>
    hi
    {counterVisible && <StopWatch></StopWatch>}
  hello

  </div>
  
}

function StopWatch () {
  const [count, setCount] = useState(1)

   // prevents our setInteval from re-endering.
   useEffect(function() { // Mounting: When a React component is first instantiated.
    let clock = setInterval(function() {
      setCount(count => count + 1);
    }, 1000)

    return () => {
      console.log("unmount");
      clearInterval(clock);
    }
  }, []); // The empty array ensures the effect runs only once when the component mounts.

  return <div>
    <h1> {count} </h1>
  </div>
}

export default App

// the code written in useEffect is used at the time of mounting and ignored at the time of re-rendering and the function we return in useEffect is called at the time of unmounting.
