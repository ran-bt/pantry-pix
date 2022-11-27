import { Link } from "react-router-dom";
import styled from "styled-components";
import { FiHeart } from "react-icons/fi";
import { useState } from "react";
const RecipeImg = ({ recipe }) => {
  const [liked, setLiked] = useState(false);
  // return (
  //   <StyledMain>
  //     {recipes.map((recipe) => {
  return (
    <Wrapper>
      <StyledDiv>
        <StyledHeart onClick={() => setLiked(!liked)}>
          {!liked ? (
            <FiHeart color="green" fill="white" size="25px" />
          ) : (
            <>
              <FiHeart color="red" fill="red" size="25px" />
            </>
          )}
        </StyledHeart>
        <StyledLink to={`/recipe-detail/${recipe.id}`}>
          <ImageBox>
            <StyledImg src={recipe.image} alt="" />
            <ImageDes>
              <StyledP>{recipe.title}</StyledP>
              {/* <StyledH1>{recipe.id}</StyledH1> */}
            </ImageDes>
          </ImageBox>
        </StyledLink>
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
  //display: flex;
  //flex-direction: column;
  //width: 200px;
  // background-color: blue;
  transition: 0.7s transform;
  &:hover {
    box-shadow: 0px 2px 17px -1px #509e2f;

    transform: scale(1.02);
  }
`;

const StyledDiv = styled.div`
  margin: auto;
  width: 200px;
  height: 250px;
  border: 1px solid green;
  text-align: center;
  position: relative;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;
const StyledImgDiv = styled.div`
  width: 200px;
`;

const ImageBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledImg = styled.img`
  width: 195px;
  object-fit: contain;
  overflow: hidden;
`;
const ImageDes = styled.div``;

const StyledP = styled.p`
  margin-top: 2px;
  color: black;
  font-size: small;
  font-weight: bold;
`;
const StyledHeart = styled(Link)`
  position: absolute;
  top: 5px;
  right: 10px;
  /* color: white;
  size: 10px; */
`;
// const StyledMain = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   gap: 2px;
// `;
