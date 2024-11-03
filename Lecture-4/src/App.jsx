import React from 'react';
import { BrowserRouter, Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";

// Single Page Applications(SPAs)

function App () {
  return (
    <div>
      Get coaching classes in  {/* Common TOP-BAR for all the pages. */}
      <BrowserRouter>
      {/* The <Link> component in React Router is used to create navigational links between different pages of your app without
       reloading the entire page (browser does not refresh, as you navigate.) */}
        <Routes>
         <Route path="/" element={<Layout />}> 
          <Route path="/neet/online-coaching-class-11" element={<Class11Program/>}></Route>
          <Route path="/neet/online-coaching-class-12" element={<Class12Program/>}></Route>
          <Route path="/" element={<Landing/>} />
          <Route path="*" element={<ErrorPage/>} /> {/* This is a default 404 page. */}
         </Route>         
        </Routes> 
        FOOTER | CONTACT US
      </BrowserRouter>
    </div>
  );
}

function Layout() { // Layouts let you wrap every route inside a certain component (think headers and footers).
  return (
  <div style={{height: "100vh"}} >
    Hi there
    <Header />
      <div style={{height: "90vh"}} >
        <Outlet />
      </div>  </div>
  );
}

function Header() {
  return (
    <div>
      <Link to="/">Allen</Link>
      |
      <Link to="/neet/online-coaching-class-11">Class-11</Link>
      |
      <Link to="/neet/online-coaching-class-12">Class-12</Link>
      |
    </div>
  );
}

function Landing() {
  return <div>
    Welcome to ALLEN
  </div>
}

function ErrorPage() {
  return <div>
    Sorry page not found.
  </div>
}

function Class11Program() {
  return <div>
    NEET Program for class 11th
  </div>
}

function Class12Program() {
  const navigate = useNavigate();
  function redirectUser() {
    navigate("/")
  }

  return <div>
    NEET Program for class 12th. 
    <button onClick={redirectUser} >Go back to Landing Page</button>
  </div>
}

export default App

// npm init -y
// npm install react-router-dom
