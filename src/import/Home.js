import React from "react";

const Home = ({currentUser}) => {
  console.log(currentUser)
  return (
    <div>
      {currentUser ? (
        <div>
          <h1>Welcome to the Tix App {currentUser.firstname}.</h1>
        </div>
      ) : (
        <div>
          <h1>Please sign in.</h1>
        </div>
      )}
    </div>
  );
};

export default Home;

//work on home page .. forms,
//tickets
