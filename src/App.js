import React from "react";

function Food({ name }) {
  return <h3>I like {name} very much.</h3>;
}

const foodILike = ["kimchi", "hambuger", "pizza"];

function App() {
  return (
    <div className="App">
      <h1>Hello!!!!</h1>
      <Food name="kimchi" />
      <Food name="hambuger" />
      <Food name="pizza" />
      {foodILike.map(food => (
        <Food name={food} />
      ))}
    </div>
  );
}

export default App;
