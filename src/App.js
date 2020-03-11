import React from "react";
import Proptypes from "prop-types";

function Food({ name, rating }) {
  return (
    <div>
      <h3>I like {name} very much.</h3>
      <h4>score is {rating}</h4>
    </div>
  );
}

Food.propTypes = {
  name: Proptypes.string.isRequired,
  rating: Proptypes.number
};

const foodILike = [
  { id: 1, name: "kimchi", rating: 5 },
  { id: 2, name: "hambuger", rating: 4.9 },
  { id: 3, name: "pizza", rating: 3.7 }
];

function renderFood(dish) {
  return <Food key={dish.id} name={dish.name} rating={dish.rating} />;
}

function App() {
  return (
    <div className="App">
      <h1>Hello!!!!</h1>
      {foodILike.map(renderFood)}
    </div>
  );
}

export default App;
