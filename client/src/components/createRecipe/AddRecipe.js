import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import IngredientsList from "../IngredientsList";
import RecipeImg from "../RecipeImg";
import { CurrentUserContext } from "../CurrentUserContext";

const AddRecipe = () => {
  const {
    likedRecipes,
    currentUser,
    setCurrentUser,
    createdRecipes,
    setCreatedRecipes,
  } = useContext(CurrentUserContext);
  //these states hold the input values for instruction ingrdients
  const [recipeValue, setRecipeValue] = useState(null);

  const [instructionValue, setInstructionValue] = useState(null);

  // other state needed
  const [recipeName, setRecipeName] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [instructions, setInstructions] = useState([]);
  const [recipeInstructions, setRecipeInstrucrions] = useState([]);
  //   const [addIngredient, setAddIngredient] = useState([]);

  const [newArray, SetnewArray] = useState([]);
  const [recipes, setRecipes] = useState(null);

  //////////////////////////////
  // add and /or delete ingredients

  const addIngredient = (task) => {
    setIngredients((prevState) => [...prevState, task]);
    // setTasks((prevState) => [...prevState, task]);
  };
  const deleteIngredient = (id) => {
    setIngredients((prevState) => prevState.filter((task) => task.id !== id));
  };

  ////////////////////////////////////
  // add and /or delete instructions

  const addInstruction = (task) => {
    setInstructions((prevState) => [...prevState, task]);
    // setTasks((prevState) => [...prevState, task]);
  };
  const deleteInstruction = (id) => {
    setInstructions((prevState) => prevState.filter((task) => task.id !== id));
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
  const clickHandlerInstruction = (e) => {
    e.preventDefault();
    addInstruction({
      name: instructionValue,
      id: Date.now(),
    });
    setInstructionValue("");
  };

  ///this submits recipe to the backend
  const handleSubmit = () => {
    console.log(currentUser);
    fetch(`/addrecipe/${currentUser._id}`, {
      method: "PATCH",
      body: JSON.stringify({
        // createdRecipe: {
        //   recipeName: "recipeName",
        //   ingredients: "ingredients",
        //   steps: "instructions",
        // },
        createdRecipe: {
          recipeName: recipeName,
          ingredients: ingredients,
          steps: instructions,
        },
      }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("DATA", data.data);
        setCurrentUser({ ...currentUser, createdRecipe: data.data });
      });
  };

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
          placeholder="add instruction..."
          type="text"
          value={instructionValue}
          onChange={(e) => {
            console.log(e.target.value);
            setInstructionValue(e.target.value);
          }}
        />
        <StyledAddButton type="submit">add</StyledAddButton>
      </form>
      <StyledBox>
        {!ingredients ? (
          ""
        ) : (
          <IngredientsList
            deleteTask={deleteInstruction}
            tasks={instructions}
          />
        )}
      </StyledBox>
      <button
        onClick={() => {
          handleSubmit();
        }}
      >
        Submit Recipe
      </button>
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
