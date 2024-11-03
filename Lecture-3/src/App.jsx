import React from 'react' 
import { Component } from 'react'

// Children prop allows you to pass elemnts or components as props to other components.
function App () {
  return <div>
    <Card> {/* Whatever we pass inside this card component comes as a children prop. */} 
      <h2>Card Title</h2>
      <p>This is some content inside the card.</p>
    </Card>
    <Card>
      <h2>Another Card</h2>
      <p>This card has some different content.</p>
      <input type="text"></input>
    </Card>
    <ClassCounter />

    <ErrorBoundary>
      <Card1 />
    </ErrorBoundary>

    <ErrorBoundary>
      <Card2 />
    </ErrorBoundary>

  </div>
}

function Card ({children}) {
  return (
    <div style = {{
      border: "1px solid #ccc",
      borderRadius: "5px",
      padding: "20px",
      margin: "10px",
      boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.1)"
    }}>
      {children}
    </div>
  );
}

// When rendering lists, each item should have a unique key prop for React to track changes efficiently.

// Class-Based Components (Not used today but important for interview prep)
class ClassCounter extends Component {
  state = { count: 0 };

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div>
        <p>Count: {this.state.count} </p>
        <button onClick={this.increment} >Increment</button>
      </div>
    );
  }
}

// Life-Cycle Events
/* Mounting, updating, and unmounting are the three primary phases of a React component's lifecycle, and each phase consists of specific
lifecycle events (methods) that allow you to hook into these phases and execute code at certain points */

// Error Boundary 
// Error boundaries are React components that catch JavaScript errors in their child component tree and display a fallback UI.
// We use Error Boundary so that whenever something goes wrong, the whole app does not crash.
function Card1 () {
  throw new Error("Error while rendering");
  return (
    <div style={{backgroundColor: "Black", borderRadius: "20px", margin: "10px", padding: "20px"}}>
      HI there
    </div>
  )
}

function Card2 () {
  return (
    <div style={{backgroundColor: "Red", borderRadius: "20px", margin: "10px", padding: "20px"}}>
      Hello
    </div>
  )
}

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("Error Caught:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return <div style={{backgroundColor: "Red", borderRadius: "20px", margin: "10px", padding: "10px"}}>
        Something went wrong.
      </div>
    }
    return this.props.children
  }
}


export default App



