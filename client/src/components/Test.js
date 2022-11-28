import { useEffect, useState } from "react";
import IngredientsList from "./IngredientsList";

const Test = () => {
  const [state, setState] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [newArray, SetnewArray] = useState([]);

  console.log(state);
  //let ingredients = [];

  const addTask = (task) => {
    setTasks((prevState) => [...prevState, task]);
  };
  const deleteTask = (id) => {
    setTasks((prevState) => prevState.filter((task) => task.id !== id));
  };
  const clickHandler = (e) => {
    e.preventDefault();
    addTask({
      name: state,
      id: Date.now(),
    });
  };

  useEffect(() => {
    SetnewArray((prevState) => [...prevState]);
    let newArr = [...tasks];
    let addUrl = "";
    newArr.forEach((task, index) => {
      if (index >= 1) {
        addUrl += `,+${task.name}`;
      } else {
        addUrl += task.name;
      }
    });

    console.log(addUrl);
  }, [tasks]);

  return (
    <div>
      <form
        onSubmit={(e) => {
          clickHandler(e);
        }}
      >
        <input
          type="text"
          value={state}
          onChange={(e) => {
            //console.log(e.target.value);
            setState(e.target.value);
          }}
        />
        <button type="submit">add</button>
      </form>
      {!state ? "" : <IngredientsList deleteTask={deleteTask} tasks={tasks} />}
    </div>
  );
};

export default Test;
