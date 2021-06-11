import React, { useEffect, useState } from "react";
import Form from "./import/Form";
import Login from "./import/Login";
import NavBar from "./import/NavBar";
import Home from "./import/Home";
import Tickets from "./import/Tickets";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {

  const [currentUser, setCurrentUser] = useState(null);

  return (
    <Router>
      <NavBar setCurrentUser={setCurrentUser}/>
      <div className="App">
        <header className="App-header">
          <h1>TIX App</h1>
          <Switch>
            <Route path="/signup">
              <Form />
            </Route>
            <Route path="/login">
              <Login currentUser={currentUser} setCurrentUser={setCurrentUser}/>
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
