import { Link } from "react-router-dom";
import styled from "styled-components";

const RecipeImg = ({ recipe }) => {
  // return (
  //   <StyledMain>
  //     {recipes.map((recipe) => {
  return (
    <Wrapper>
      <StyledDiv>
        <Link to={`/recipe-detail/${recipe.id}`}>
          <ImageBox>
            <StyledImg src={recipe.image} alt="" />
            <ImageDes>
              <StyledH1>{recipe.title}</StyledH1>
              {/* <StyledH1>{recipe.id}</StyledH1> */}
            </ImageDes>
          </ImageBox>
        </Link>
      </StyledDiv>

      {/* <StyledP>{recipe.missedIngredientCount}</StyledP> */}
    </Wrapper>
  );
  //     })}
  //   </StyledMain>
  // );
};
export default RecipeImg;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  //background-color: blue;
`;

const StyledImgDiv = styled.div`
  width: 150px;
`;
const StyledImg = styled.img`
  max-width: 150px;
  object-fit: contain;
`;
const StyledH1 = styled.h1`
  color: black;
`;
const StyledDiv = styled.div`
  margin: auto;
  width: 200px;
`;
const ImageBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ImageDes = styled.div``;

const StyledMain = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2px;
`;
