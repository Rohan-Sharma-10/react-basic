import {useState, useEffect} from "react"

export default function App () {
  
  return <div>
    <Counter></Counter>
  </div>
}

function Counter () {
  const [counterVisible, setCounterVisible] = useState(true);

  useState(() => {
    setInterval(() => {
      setCounterVisible(c => !c)
    }, 5000)
  })
  
  return <div>
    {counterVisible && <Stopwatch></Stopwatch>}
  </div>
}

function Stopwatch () {
  const [count, setCount] = useState(1);

  useEffect(() => {
    const clock = setInterval(() => {
      setCount(count => count + 1)
    }, 1000)

  return () => {
    console.log("unmount");
    clearInterval(clock);
  }
    
  }, [])

  return <div>
    <h1>    {count}
</h1>
  </div>
  
}

// code 2 

import {useState, useEffect} from "react"

export default function () {
  const [count, setCount] = useState(0);

function increase () {
  setCount(c => c + 1)
}
  
  return <div>
    <Counter count = {count} />
    <button onClick={increase}> Increase Count </button>
  </div>
}

function Counter (props) {
  useEffect(() => {
    console.log("mount");

    return () => {
      console.log("unmount");
    }
  }, [])

   useEffect(() => {
    console.log("count has changed")

    return () => {
      console.log("cleanup inside the effect")
    }
    
  }, [props.count]) // whenever the counter changes, this runs
  
  return <div>
    Counter {props.count}
  </div>
} 
 
// export default function App () {
//   const [currentTab, setCurrentTab] = useState("feed");

//   useEffect(() => {
//     console.log("Send request to backend to get for the tab " + currentTab)
//   }, [currentTab]);
  
//   return <div>
//     <button onClick={() => {setCurrentTab("feed")}} style={{color: currentTab == "feed" ? "red" : "black"}}>Feed</button>
//     <button onClick={() => {setCurrentTab("notifications")}} style={{color: currentTab == "notifications" ? "red" : "black"}}>Notifications</button>
//     <button onClick={() => {setCurrentTab("messages")}} style={{color: currentTab == "messages" ? "red" : "black"}}>Messages</button>
//     <button onClick={() => {setCurrentTab("jobs")}} style={{color: currentTab == "jobs" ? "red" : "black"}}>Jobs</button>    
//   </div>
// }

// export default function App () {
//   return <div>
//     <Timer></Timer>
//   </div>
// }

// function Timer () {
//   const [seconds, setSeconds] = useState(0);

//   useEffect(() => {
//     let clock = setInterval(() => {
//       console.log("inside the clock");
//       setSeconds(prev => prev + 1)
//     }, 1000)

//     return () => {
//       clearInterval(clock)
//     }
//   }, [])

//   return <div> {seconds} seconds elapsed </div>
// }

