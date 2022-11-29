import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import BgImage from "./BgImage";
import LeftSideBar from "./LeftSideBar";

const RecipeDetail = ({ recipes }) => {
  //declaring needed states
  const [instructions, setInstructions] = useState(null);
  const [ingredients, setIngredients] = useState(null);

  const { id } = useParams();

  // const selectedRecipe = recipes.filter((recipeInfo) => {
  //   return recipeInfo.id === id;
  // });
  // console.log("recipe list", recipes);
  // console.log("selected Recipe", selectedRecipe);
  // console.log("selected id", id);

  const key = process.env.REACT_APP_API_KEY;
  const key1 = process.env.REACT_APP_API_KEY1;

  //fetching list of ingredients
  useEffect(() => {
    fetch(
      `https://api.spoonacular.com/recipes/${id}/information?apiKey=${key}&includeNutrition=false`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log("Ingredients", data);
        setInstructions(data);
      });
  }, []);

  // fetching instructions
  // useEffect(() => {
  //   fetch(
  //     `https://api.spoonacular.com/recipes/${id}/analyzedInstructions?apiKey=${key}`
  //   )
  //     .then((res) => res.json())
  //     .then((data) => {
  //       //console.log("Instruction", data);
  //       setInstructions(data);
  //     });
  // }, []);
  return !instructions ? (
    <h1>Loading...</h1>
  ) : (
    <>
      <BgImage url={instructions.image} />
      <MainDiv>
        <LeftSideBar />
        <div>
          {instructions.analyzedInstructions.map((instruction) => {
            return (
              <div>
                <div>
                  {" "}
                  {instruction.steps.map((instructionStep) => {
                    return (
                      <StyledInstructionP>
                        <span>Step: {instructionStep.number}</span>
                        {instructionStep.step}
                      </StyledInstructionP>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </MainDiv>
    </>
  );
};

export default RecipeDetail;
const MainDiv = styled.div`
  display: flex;
  // flex-direction: column;
`;

const StyledInstructionP = styled.p`
  margin-bottom: 12px;

  padding: 15;
  //list-style: circle;
  span {
    font-weight: bold;
    color: green;
  }
`;
