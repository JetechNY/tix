import React, { useEffect, useState } from "react";
import Form from "./import/Form";
import Login from "./import/Login";
import NavBar from "./import/NavBar";
import Home from "./import/Home";
import Tickets from "./import/Tickets";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  // useEffect(() =>{
  //   fetch('http://localhost:52671/users', {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   //   body: JSON.stringify(data),
  //   // })
  //   // .then(response => response.json())
  //   // .then(data => {
  //   //   console.log('Success:', data);
  //   // })
  //   // .catch((error) => {
  //   //   console.error('Error:', error);
  //   })
  // }, [])

  return (
    <Router>
      <NavBar />
      <div className="App">
        <header className="App-header">
          <h1>TIX App</h1>
          <Switch>
            <Route path="/signup">
              <Form />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/tickets">
              <Tickets />
            </Route>
          </Switch>
        </header>
      </div>
    </Router>
  );
}

export default App;
