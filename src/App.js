import React, { useEffect, useState } from "react";
import Form from "./import/Form";
import Login from "./import/Login";
import NavBar from "./import/NavBar";
import Home from "./import/Home";
import TicketsList from "./import/TicketsList";
import NewTicket from "./import/NewTicket";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/tickets")
      .then((r) => r.json())
      .then((ticketsArray) => {
        setTickets(ticketsArray);
      });
  }, []);
  useEffect(() => {
    fetch("http://localhost:3000/users")
      .then((r) => r.json())
      .then((usersArray) => {
        setUsers(usersArray);
      });
  }, []);

let isAgentList = users.filter((user) => {
if(user.is_agent === true){
  return "true"
}
})

console.log("user list", users)
console.log("agent list", isAgentList)

  // function updateReview(updatedReview) {
  //   const updatedReviewList = reviews.map((review) => {
  //     if (review.id === updatedReview.id) {
  //       return updatedReview;
  //     } else {
  //       return review;
  //     }
  //   });

  //   setReviews(updatedReviewList);
  // }


  // let filteredProducts = products.filter((product) => {

  //   return product.name.toLowerCase().includes(productSearch.toLowerCase()) ||
  //   product.brand.toLowerCase().includes(productSearch.toLowerCase()) ||
  //   product.type_of.toLowerCase().includes(productSearch.toLowerCase())
  // });

  // if (filter !== "all") {
  //   filteredProducts = filteredProducts.filter(product => product.cost_range === filter)
  // }


  return (
    <Router>
      <NavBar setCurrentUser={setCurrentUser} />
      <div className="App">
        <header className="App-header">
          <h1>TIX App</h1>
          <Switch>
            <Route path="/signup">
              <Form />
            </Route>
            <Route path="/login">
              <Login
                currentUser={currentUser}
                setCurrentUser={setCurrentUser}
              />
            </Route>
            <Route exact path="/">
              <Home currentUser={currentUser} />
            </Route>
            <Route exact path="/tickets">
              <TicketsList tickets={tickets} setTickets={setTickets} />
            </Route>
            <Route exact path="/newtix">
              <NewTicket users={users} isAgentList={isAgentList}/>
            </Route>
          </Switch>
        </header>
      </div>
    </Router>
  );
}

export default App;
