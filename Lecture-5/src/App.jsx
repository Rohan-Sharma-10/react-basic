//Rolling Up the State (As your application grows, you might find that multiple components need access to the same state.
// Instead of duplicating state in each component, you can lift the state up to the LCA(Lowest Common Ancestor), allowing the common ancestor to manage it).
import { useState } from 'react'

export default function App() {

  return (
    <div>
      <LightBulb />
    </div>
  )
}

function LightBulb() {
  const [ bulbOn, setbulbOn ] = useState(true);

  return (
    <div>
      <BulbState  bulbOn={bulbOn} />
      <ToggleBulbState bulbOn={bulbOn} setbulbOn={setbulbOn} />
    </div>
  )
}

function BulbState({bulbOn}) {
  return (
    <div>
      {bulbOn ? "bulb On" : "bulb Off"}
    </div>
  )
}

function ToggleBulbState({bulbOn, setbulbOn}) {

  const Toggle = () => {
    // setbulbOn(currentState => !currentState);
    setbulbOn(!bulbOn)
  }

  return (
    <div>
      <button onClick={Toggle} >Toggle The Bulb</button>
    </div>
  )
}

// Prop Drilling (**Prop drilling** occurs when you need to pass data from a higher-level component down to a lower-level component that is several layers deep in the component tree. This often leads to the following issues:
//- **Complexity:** You may have to pass props through many intermediate components that don’t use the props themselves, just to get them to the component that needs them.
//- **Maintenance:** It can make the code harder to maintain, as changes in the props structure require updates in multiple components.)

// export default function App() {
//   const [ bulbOn, setbulbOn ] = useState(true);

//   return (
//     <div>
//       <Light bulbOn={bulbOn} setbulbOn={setbulbOn} />
//     </div>
//   )
// }

// function Light({bulbOn, setbulbOn}) {
//   return (
//     <div>
//       <LightBulb  bulbOn={bulbOn} />
//       <LightSwitch bulbOn={bulbOn} setbulbOn={setbulbOn} />
//     </div>
//   )
// }

// function LightBulb({bulbOn}) {
//   return (
//     <div>
//       {bulbOn ? "bulb is on" : "bulb is off"}
//     </div>
//   )
// }

// function LightSwitch({bulbOn, setbulbOn}) {
//   const Toggle = () => {
//     setbulbOn(!bulbOn)
//   }
//   return (
//     <div>
//       <button onClick={Toggle}>Toggle the bulb</button>
//     </div>
//   )
// }