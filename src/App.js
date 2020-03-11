import React from "react";

function Food({ name }) {
  return <h3>I like {name} very much.</h3>;
}

function App() {
  return (
    <div className="App">
      <h1>Hello!!!!</h1>
      <Food name="kimchi" />
      <Food name="hambuger" />
      <Food name="pizza" />
    </div>
  );
}

export default App;
