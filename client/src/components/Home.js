import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import BgImage from "./BgImage";
import { SpinnerCircular } from "spinners-react";
import LeftSideBar from "./LeftSideBar";
import RightSideBar from "./RightSideBar";
import RecipeImg from "./RecipeImg";

const Home = ({ recipes, setRecipes }) => {
  const [value, setValue] = useState("");
  const [value2, setValue2] = useState("");
  const [value3, setValue3] = useState("");
  const [value4, setValue4] = useState("");
  const [value5, setValue5] = useState("");
  const key = process.env.REACT_APP_API_KEY;
  const key1 = process.env.REACT_APP_API_KEY1;

  //const [recipes, setRecipes] = useState(null);
  // console.log(process.env.REACT_APP_API_KEY);

  //   const clickHandler = () => {
  //     let search = "";
  //     if (value) {
  //       search += value;
  //     }
  //     if (value2) {
  //       search += `,+${value2}`;
  //     }
  //     if (value3) {
  //       search += `,+${value3}`;
  //     }
  //     if (value4) {
  //       search += `,+${value4}`;
  //     }
  //     if (value5) {
  //       search += `,+${value5}`;
  //     }
  //     fetch(
  //       `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${key1}&ingredients=${search}&number=5`
  //     )
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log(data);
  //         setRecipes(data);
  //       });
  //   };

  //   useEffect(() => {
  //     fetch(
  //       `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${key1}&ingredients=pineapples,+flour,+rice,+chicken&number=5`
  //     )
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log(data);
  //         setRecipes(data);
  //       });
  //   }, []);

  return !recipes ? (
    <>
      <StyledLoading>{/* <SpinnerCircular /> */}</StyledLoading>

      {/*  <button
          onClick={() => {
            clickHandler();
          }}
        >
          Submit
        </button>
        <input
          type="text"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        list ingredients
        <input
          type="text"
          value={value2}
          onChange={(e) => {
            setValue2(e.target.value);
          }}
        />
        <input
          type="text"
          value={value3}
          onChange={(e) => {
            setValue3(e.target.value);
          }}
        />
        <input
          type="text"
          value={value4}
          onChange={(e) => {
            setValue4(e.target.value);
          }}
        />
        <input
          type="text"
          value={value5}
          onChange={(e) => {
            setValue5(e.target.value);
          }}
        /> 
      </div>*/}
    </>
  ) : (
    <>
      <BgImage />
      <StyledContainer>
        <LeftSideBar />

        <StyledBox>
          <StyledNavContainer>
            <NavBar>
              <StyledNavLink to={"#"}>Home</StyledNavLink>
              <StyledNavLink to={"#"}>Search By Ingredient</StyledNavLink>
              <StyledNavLink to={"#"}>Profile</StyledNavLink>
              <StyledNavLink to={"#"}>Help</StyledNavLink>
            </NavBar>
          </StyledNavContainer>
          <StyledMain>
            {recipes.map((recipe) => {
              return (
                <>
                  <RecipeImg recipe={recipe} />
                  {/* <StyledDiv>
                  <Link to={`/recipe-detail/${recipe.id}`}>
                    <StyledH1>{recipe.title}</StyledH1>
                    <StyledH1>{recipe.id}</StyledH1>
                    <StyledImgDiv>
                      <img src={recipe.image} alt="" />
                    </StyledImgDiv>
                  </Link>
                </StyledDiv>

                <StyledP>{recipe.missedIngredientCount}</StyledP> */}
                </>
              );
            })}
          </StyledMain>
        </StyledBox>
        <RightSideBar />
        {/* <div>
        <button
          onClick={() => {
            clickHandler();
          }}
        >
          Submit
        </button>
        <input
          type="text"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        list ingredients
      </div> */}
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
  background-color: red;
  //;
`;
const StyledMain = styled.div`
  display: flex;
  width: 300px;
  flex-wrap: wrap;
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
  background-color: green;
  //padding-left: 35px;
  margin-top: 25px;
  width: 60vw;
`;
const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: #509e2f;
  font-size: 20px;
`;
