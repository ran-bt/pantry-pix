import { Link } from "react-router-dom";
import styled from "styled-components";

const RecipeImg = ({ recipe }) => {
  return (
    <StyledMain>
      <StyledImgDiv>
        <img src={recipe.image} alt="" />
      </StyledImgDiv>

      <StyledDiv>
        <Link to={`/recipe-detail/${recipe.id}`}>
          <StyledH1>{recipe.title}</StyledH1>
          <StyledH1>{recipe.id}</StyledH1>
        </Link>
      </StyledDiv>

      <StyledP>{recipe.missedIngredientCount}</StyledP>
    </StyledMain>
  );
};

export default RecipeImg;

const StyledMain = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
`;
const StyledDiv = styled.div``;
const StyledH1 = styled.h1`
  color: black;
`;
const StyledImgDiv = styled.div`
  width: 150px;
`;
const StyledImg = styled.img`
  max-width: 150px;
  object-fit: contain;
`;
const StyledP = styled.p``;
