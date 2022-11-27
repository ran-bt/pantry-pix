import { useState } from "react";

const Test = () => {
  const [state, setState] = useState([]);
  const [ing, setIng] = useState([]);
  console.log(state);
  let ingredients = [];
  const clickHandler = (e) => {
    //console.log(e.target.value);
  };
  return (
    <form>
      <input
        type="text"
        value={state}
        onChange={(e) => {
          //console.log(e.target.value);
          setState(e.target.value);
          ingredients.push(e.target.value);
          console.log(ingredients);
        }}
      />
      <button
        onClick={(e) => {
          clickHandler();
        }}
      >
        add
      </button>
    </form>
  );
};

export default Test;
