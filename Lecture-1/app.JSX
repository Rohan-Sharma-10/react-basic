// import React from 'react'

function App () { 
    const [count, setCount] = React.useState(0)

    return (
        <div>
            <Button count={count} setCount={setCount}></Button>
        </div>
    )
}

function Button (props) {
    function onButtonClick () {
        props.setCount(props.count + 1);
    }
    return <button onClick={onButtonClick}>Counter {props.count}</button> // Although we are going to write this line of code more often then the below one. Button under the hood the thing that this code is changing to is below. 
    // This is JavaScript XML(JSX), This fucntion is returning XML not HTML
    // This component return XML

    // return React.createElement(  // This is pure JavaScript
    //     'button', 
    //     { onClick: onButtonClick },
    //     `Counter ${props.count}`
    // )
}

export default App