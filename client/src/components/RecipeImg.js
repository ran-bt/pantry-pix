import { useContext, useEffect, useState } from "react";
import { CurrentUserContext } from "./CurrentUserContext";
import SingleRecipe from "./SingleRecipe";

//this component will update the user's liked recipes
const RecipeImg = ({ recipe }) => {
  //when a user clickes on the like icon the liked state is toggled to true or false
  //
  const [liked, setLiked] = useState(false);
  const { likedRecipes, setLikedRecipes, currentUser, setCurrentUser } =
    useContext(CurrentUserContext);

  //based on the value od the liked state we will either add or remove the recipe id from the likedRecipe list stored in the database and update the currunt user data in the currentUserContext

  useEffect(() => {
    if (liked && currentUser) {
      fetch(`/addlikedrecipe/${currentUser._id}`, {
        method: "PATCH",
        body: JSON.stringify({
          likedRecipeId: likedRecipes,
        }),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("DATA", data.data);
          setCurrentUser({ ...currentUser, likedRecipeId: data.data });
        });
    }
  }, [likedRecipes]);

  const callfunc = () => {
    if (!liked) {
      setLikedRecipes((previousState) => [...previousState, recipe.id]);
    } else {
      setLikedRecipes((previousState) => {
        const filterd = previousState.filter(
          (likedRecipe) => likedRecipe !== recipe.id
        );

        return filterd;
      });
    }
  };

  const clickHandler = () => {
    setLiked(!liked);
    callfunc();
  };

  return (
    <SingleRecipe recipe={recipe} clickHandler={clickHandler} liked={liked} />
  );
};
export default RecipeImg;
