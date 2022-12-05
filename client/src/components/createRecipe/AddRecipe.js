import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import IngredientsList from "../IngredientsList";
import RecipeImg from "../RecipeImg";
import { CurrentUserContext } from "../CurrentUserContext";
import { v4 as uuidv4 } from "uuid";

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
    fetch(`/addrecipe/${currentUser._id}`, {
      method: "PATCH",
      body: JSON.stringify({
        // createdRecipe: {
        //   recipeName: "recipeName",
        //   ingredients: "ingredients",
        //   steps: "instructions",
        // },
        createdRecipe: {
          recipeId: Date.now(),
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
        setCurrentUser({ ...currentUser, createdRecipe: data.data });
        setCreatedRecipes(data.data.createdRecipe);
      });
  };

  return (
    <StyledMain>
      <Wrapper>
        <StyledForm
          onSubmit={(e) => {
            clickHandlerRecipeName(e);
          }}
        >
          <StyledInputContainer>
            <StyledInput1
              required
              type="text"
              value={recipeName}
              placeholder="recipe name..."
              onChange={(e) => {
                setRecipeName(e.target.value);
              }}
            />
          </StyledInputContainer>
        </StyledForm>

        <StyledForm
          onSubmit={(e) => {
            clickHandlerIngredients(e);
          }}
        >
          <StyledInputContainer>
            <StyledInput
              placeholder="add ingredients"
              type="text"
              value={recipeValue}
              onChange={(e) => {
                setRecipeValue(e.target.value);
              }}
            />
          </StyledInputContainer>
          <StyledAddButton type="submit">add </StyledAddButton>
        </StyledForm>
        <StyledBox>
          {!ingredients ? (
            ""
          ) : (
            <IngredientsList
              deleteTask={deleteIngredient}
              tasks={ingredients}
            />
          )}
        </StyledBox>

        <StyledForm
          onSubmit={(e) => {
            clickHandlerInstruction(e);
          }}
        >
          <StyledInputContainer>
            <StyledInput
              placeholder="add instruction..."
              type="text"
              value={instructionValue}
              onChange={(e) => {
                setInstructionValue(e.target.value);
              }}
            />
          </StyledInputContainer>

          <StyledAddButton type="submit">add</StyledAddButton>
        </StyledForm>
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
        <ButtonContainer>
          <StyledButton
            onClick={() => {
              handleSubmit();
            }}
          >
            Submit Recipe
          </StyledButton>
        </ButtonContainer>
      </Wrapper>
    </StyledMain>
  );
};

export default AddRecipe;

const Wrapper = styled.div`
  gap: 2px;
  width: 600px;
  border: 3px solid black;
  margin-top: 50px;
`;

const StyledAddButton = styled.button`
  margin-left: -5px;

  width: 60px;
  color: white;
  background-color: black;
  border: none;
  &:hover {
    cursor: pointer;
  }
`;
const StyledBox = styled.div`
  margin: auto;
  width: 100%;
  height: 150px;
  background-color: #fafafa;

  overflow-x: hidden;
  border: 1px solid rgb(232, 232, 232);
  padding: 20px 10px;
`;
const StyledForm = styled.form`
  display: flex;
  flex-wrap: nowrap;
  gap: 0;

  background-color: #fafafa;
`;
const StyledInputContainer = styled.div`
  width: 600px;
  background-color: black;
`;
const StyledInput1 = styled.input`
  width: 567px;
  border: 2px solid black;
  border-radius: 0;
  margin: auto;
`;
const StyledInput = styled.input`
  width: 511px;
  border: 2px solid black;
  border-radius: 0;
  border-left: none;
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const StyledButton = styled.button`
  color: white;
  background-color: green;
  padding: 15px 25px;
  border-radius: 3px;
  border: none;
  &:hover {
    cursor: pointer;
  }
`;
const StyledMain = styled.div`
  display: flex;
  justify-content: center;

  width: 650px;

  margin: auto;
`;
