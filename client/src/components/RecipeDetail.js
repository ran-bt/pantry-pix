import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const RecipeDetail = () => {
  const { id } = useParams();

  const key = process.env.REACT_APP_API_KEY;
  const key1 = process.env.REACT_APP_API_KEY1;
  console.log(key1);

  const [instructions, setInstructions] = useState(null);

  useEffect(() => {
    fetch(
      `https://api.spoonacular.com/recipes/${id}/analyzedInstructions?apiKey=${key}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setInstructions(data);
      });
  }, []);
  return !instructions ? (
    <h1>Loading...</h1>
  ) : (
    <div>
      {instructions.map((instruction) => {
        return (
          <div>
            <p>first map</p>
            <ul>
              {" "}
              {instruction.steps.map((instructionStep) => {
                return <li>{instructionStep.step}</li>;
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default RecipeDetail;