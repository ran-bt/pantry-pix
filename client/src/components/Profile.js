import { useContext, useEffect, useState } from "react";
import { CurrentUserContext } from "./CurrentUserContext";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const [liked, setLiked] = useState();
  const { likedRecipes, currentUser } = useContext(CurrentUserContext);

  //const key = process.env.REACT_APP_API_KEY;
  const key1 = "c3abc385b6234ccd924ea88750a1c611";
  //process.env.REACT_APP_API_KEY1;
  //"2b1b94826ab340d0a9ecb53d13d061c8";

  //get recipe ids from currentUser context then fetch recipe information and render it on screen
  const str = likedRecipes.toString();
  //[1,2,3].to... = "[1,2,3]"
  //console.log(str);
  console.log("CurrentUser", currentUser);

  useEffect(() => {
    fetch(
      `https://api.spoonacular.com/recipes/informationBulk?apiKey=${key1}&ids=${str}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setLiked(data);
      });
  }, []);

  return !liked ? (
    <p>No Liked recipes</p>
  ) : (
    <>
      <div className="Container">
        <div>
          <h2> Liked recipes</h2>
          <div>
            {" "}
            {liked.map((like) => (
              <div>{like.title}</div>
            ))}
          </div>
        </div>
        <div>
          <h2> Created recipes</h2>
          <div> div with created recipes/ or you have no created receipes</div>
        </div>
        {/* <Wrapper>
      <StyledDiv>
        <StyledHeart>
         
              <FiHeart color="red" fill="red" size="25px" />
          
        </StyledHeart>
        <StyledLink to={`/recipe-detail/${recipe.id}`}>
          <ImageBox>
            <StyledImg src={recipe.image} alt="" />
            <ImageDes>
              <StyledP>{recipe.title}</StyledP>
              {/* <StyledH1>{recipe.id}</StyledH1> */}
        {/* </ImageDes>
          </ImageBox>
        </StyledLink>
      </StyledDiv> */}

        {/* <StyledP>{recipe.missedIngredientCount}</StyledP> 
    </Wrapper>  */}
      </div>
    </>
  );
};

export default Profile;
