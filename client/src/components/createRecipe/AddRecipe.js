import { useEffect, useState } from "react";
import styled from "styled-components";
import IngredientsList from "../IngredientsList";
import RecipeImg from "../RecipeImg";

const AddRecipe = () => {
  //these states hold the input values for instruction ingrdients
  const [recipeValue, setRecipeValue] = useState(null);

  const [instructionValue, setInstructionValue] = useState(null);

  // other state needed
  const [recipeName, setRecipeName] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [recipeInstructions, setRecipeInstrucrions] = useState([]);
  //   const [addIngredient, setAddIngredient] = useState([]);

  const [newArray, SetnewArray] = useState([]);
  const [recipes, setRecipes] = useState(null);

  const addIngredient = (task) => {
    setIngredients((prevState) => [...prevState, task]);
    // setTasks((prevState) => [...prevState, task]);
  };
  const deleteIngredient = (id) => {
    setIngredients((prevState) => prevState.filter((task) => task.id !== id));
  };

  const clickHandlerRecipeName = () => {};
  const clickHandlerIngredients = (e) => {
    e.preventDefault();
    addIngredient({
      name: recipeValue,
      id: Date.now(),
    });

    setRecipeValue("");
  };
  const clickHandlerInstruction = () => {};

  return (
    <div>
      <form
        onSubmit={(e) => {
          clickHandlerRecipeName(e);
        }}
      >
        <input
          required
          type="text"
          value={recipeName}
          placeholder="recipe name..."
          onChange={(e) => {
            console.log(e.target.value);
            setRecipeName(e.target.value);
          }}
        />
        <StyledAddButton type="submit">add</StyledAddButton>
      </form>

      <form
        onSubmit={(e) => {
          clickHandlerIngredients(e);
        }}
      >
        <input
          placeholder="add ingredients"
          type="text"
          value={recipeValue}
          onChange={(e) => {
            console.log(e.target.value);
            setRecipeValue(e.target.value);
          }}
        />
        <StyledAddButton type="submit">add </StyledAddButton>
      </form>
      <StyledBox>
        {!ingredients ? (
          ""
        ) : (
          <IngredientsList deleteTask={deleteIngredient} tasks={ingredients} />
        )}
      </StyledBox>

      <form
        onSubmit={(e) => {
          clickHandlerInstruction(e);
        }}
      >
        <input
          required
          type="instructions"
          value={recipeInstructions}
          onChange={(e) => {
            console.log(e.target.value);
            setRecipeInstrucrions(e.target.value);
          }}
        />
        <StyledAddButton type="submit">add</StyledAddButton>
      </form>

      <button>Submit</button>
    </div>
  );
};

export default AddRecipe;

const StyledAddButton = styled.button``;
const StyledBox = styled.div`
  margin: auto;
  width: 100%;
  height: 150px;
  background-color: #fafafa;
  // background-color: red;
  //background-image: url("/mockup-graphics-C4AQnyn59oU-unsplash.jpg");
  overflow-x: hidden;
  border: 1px solid rgb(232, 232, 232);
  padding: 20px 10px;
`;
