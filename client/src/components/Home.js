import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import BgImage from "./BgImage";
import { SpinnerCircular } from "spinners-react";
import LeftSideBar from "./LeftSideBar";
import RightSideBar from "./RightSideBar";
import RecipeImg from "./RecipeImg";
import SearchByIngredient from "./SearchByIngredient";
import Test from "./IngredientSearch";

const Home = ({
  recipes,
  setRecipes,
  searchedByIngResults,
  setSearchedByIngResults,
}) => {
  const [value, setValue] = useState("");
  const [value2, setValue2] = useState("");
  const [value3, setValue3] = useState("");
  const [value4, setValue4] = useState("");
  const [value5, setValue5] = useState("");
  const key = process.env.REACT_APP_API_KEY;
  const key1 = process.env.REACT_APP_API_KEY1;

  useEffect(() => {
    fetch(
      `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${key1}&ingredients=pineapples,+flour,+rice,+chicken&number=5`
    )
      .then((res) => res.json())
      .then((data) => {
        //   console.log(data);
        setRecipes(data);
      });
  }, []);

  return !recipes ? (
    <>
      <StyledLoading>{/* <SpinnerCircular /> */}</StyledLoading>
    </>
  ) : (
    <>
      <BgImage url="/headerImg1.jpg" />
      <StyledContainer>
        <LeftSideBar />

        <StyledBox>
          <StyledH2>Whats in your pantry?</StyledH2>
          {/* <SearchByIngredient
            searchedByIngResults={searchedByIngResults}
            setSearchedByIngResults={setSearchedByIngResults}
          /> */}
          <Test />
          <Cousine>Cuisines</Cousine>
          <StyledMain>
            {recipes.map((recipe) => {
              return (
                <div key={recipe.id}>
                  <RecipeImg recipe={recipe} />
                </div>
              );
            })}
          </StyledMain>
        </StyledBox>
        <RightSideBar />
      </StyledContainer>
    </>
  );
};

export default Home;
const StyledLoading = styled.div`
  position: absolute;
  /* display: flex;
  justify-content: center;
  align-items: center; */
  //background-color: red;
  margin-left: 50%;
  margin-top: 50%;
`;

const StyledContainer = styled.div`
  display: flex;
  gap: 15px;
  //width: 50vw;
  //background-color: red;
  //;
`;
const StyledMain = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  //background-color: blue;
`;
const StyledDiv = styled.div`
  margin: auto;
  width: 200px;
`;

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

const StyledNavContainer = styled.div`
  padding: 10px 25px;
  border-bottom: solid 2px #d9d9d9;
  border-top: solid 2px #d9d9d9;
`;

const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
`;
const StyledBox = styled.div`
  //background-color: green;
  //padding-left: 35px;
  margin-top: 25px;
  width: 60vw;
`;
const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: #509e2f;
  font-size: 20px;
`;
const ImageBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ImageDes = styled.div``;

const Cousine = styled.h2`
  margin-top: 45px;
  color: #509e2f;
  font-family: "Montez", cursive;
  font-size: 50px;
`;
const StyledH2 = styled.h2`
  // margin-top: 45px;
  margin-bottom: 10px;
  color: #509e2f;
  font-family: "Montez", cursive;
  font-size: 50px;
`;
