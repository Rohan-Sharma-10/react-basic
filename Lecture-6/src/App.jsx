// Custom Hooks
import { useState, useEffect, useRef } from 'react'
import { useFetch } from "./Hooks/useFetch.js"
import { usePrev } from "./Hooks/usePrev.js"
import { useDebounce } from "./Hooks/useDebounce.js"

  //useFetch HOOK
// export default function App() {
  // const [currentPost, setCurrentPost] = useState(1);
  // const {data, loading} = useFetch("https://jsonplaceholder.typicode.com/posts/" + currentPost);

  // if (loading) {
  //   return <div> Loading...... </div>
  // }

  // return (
  //   <div>
  //     <button onClick={() => {setCurrentPost(c => c - 1)}} >Previous Post</button>
  //     <button onClick={() => {setCurrentPost(c => c + 1)}} >Next Post</button>
  //     <div>{JSON.stringify(data)}</div>
  //   </div>
  // )

  // usePrev HOOK 
  // const [state, setState] = useState(0);
  // const prev = usePrev(state);

  // return (
  //   <div>
  //     <p> {state} </p>
  //     <button onClick={() => {setState(curr => curr + 1)}}> Click Me </button>
  //     <p> The previous value was {prev} </p>
  //   </div>
  // )

// }

  // useDebounce HOOK
export default function App() {
  const [inputVal, setInputVal] = useState("");
  const debouncedValue = useDebounce(inputVal, 2000)

  const change = (event) => {
    setInputVal(event.target.value)   // document.getElementById("input") == event.target
  }

  useEffect(() => {
    console.log("expensive operation")
  }, [debouncedValue])

  return (
    <div>
      <input id="input" type="text" onChange={change}></input>
    </div>
  )
}


