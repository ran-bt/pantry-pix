import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import BgImage from "./BgImage";

const Home = () => {
  const [value, setValue] = useState(null);
  const [value2, setValue2] = useState(null);
  const [value3, setValue3] = useState(null);
  const [value4, setValue4] = useState(null);
  const [value5, setValue5] = useState(null);
  const key = process.env.REACT_APP_API_KEY;
  const key1 = process.env.REACT_APP_API_KEY1;

  const [recipes, setRecipes] = useState(null);
  // console.log(process.env.REACT_APP_API_KEY);

  const clickHandler = () => {
    let search = "";
    if (value) {
      search += value;
    }
    if (value2) {
      search += `,+${value2}`;
    }
    if (value3) {
      search += `,+${value3}`;
    }
    if (value4) {
      search += `,+${value4}`;
    }
    if (value5) {
      search += `,+${value5}`;
    }
    fetch(
      `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${key1}&ingredients=${search}&number=5`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setRecipes(data);
      });
  };

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
      <h1>loading...</h1>
      <BgImage />
      <div>
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
      </div>
    </>
  ) : (
    <StyledContainer>
      {recipes.map((recipe) => {
        return (
          <StyledMain>
            <StyledDiv>
              <Link to={`/recipe-detail/${recipe.id}`}>
                <StyledH1>{recipe.title}</StyledH1>
                <StyledH1>{recipe.id}</StyledH1>
                <StyledImgDiv>
                  <img src={recipe.image} alt="" />
                </StyledImgDiv>
              </Link>
            </StyledDiv>

            <StyledP>{recipe.missedIngredientCount}</StyledP>
          </StyledMain>
        );
      })}
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
  );
};

export default Home;
const StyledContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const StyledMain = styled.div`
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
