
import React, { useEffect, useState } from "react";
import Form from "./import/Form"
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
    <div className="App">
      <header className="App-header">
        <h1> TIX App</h1>
        <Form/>
      </header>
    </div>
  );
}

export default App;
