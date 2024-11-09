// Context API
import React from 'react'
import { useState } from 'react'

const BulbContext = React.createContext();

function BulbProvider({children}) {
  const [ bulbOn, setbulbOn ] = useState(true);

  return (
    <div>
      <BulbContext.Provider value={{
        bulbOn: bulbOn,
        setbulbOn: setbulbOn
      }}>
        {children}
      </BulbContext.Provider>
    </div>
  )
}

export default function App() {
  // const [ bulbOn, setbulbOn ] = useState(true);

  return (
    <div>
      {/* <BulbContext.Provider value={{  Better way to write it is to define all this logic in a separate function
      bulbOn: bulbOn,
      setbulbOn: setbulbOn
      }} >
        <Light />
      </BulbContext.Provider> */}
      <BulbProvider>
        <Light />
      </BulbProvider>
    </div>
  )
}

function Light() {
  return (
    <div>
      <LightBulb  />
      <LightSwitch />
    </div>
  )
}

function LightBulb() {
  const { bulbOn } = React.useContext(BulbContext);
  
  return (
    <div>
      {bulbOn ? "bulb is on" : "bulb is off"}
    </div>
  )
}

function LightSwitch() {
  const { bulbOn, setbulbOn } = React.useContext(BulbContext);
  
  const Toggle = () => {
    setbulbOn(!bulbOn)
  }
  return (
    <div>
      <button onClick={Toggle}>Toggle the bulb</button>
    </div>
  )
}

// The above code written is still not optimised, as even the button also re-renders even though its body is not changing.

// The Context API is a powerful feature in React that enables you to manage state across your application more effectively, especially when dealing with deeply nested components.
// The Context API provides a way to share values (state, functions, etc.) between components without having to pass props down manually at every level. 
// ### Jargon
// - **Context**: This is created using `React.createContext()`. It serves as a container for the data you want to share.
// - **Provider**: This component wraps part of your application and provides the context value to all its descendants. Any component that is a child of this Provider can access the context.
// - **Consumer**: This component subscribes to context changes. It allows you to access the context value (using `useContext`  hook)