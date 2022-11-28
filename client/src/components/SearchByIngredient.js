import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import BgImage from "./BgImage";
import { SpinnerCircular } from "spinners-react";
import LeftSideBar from "./LeftSideBar";
import RightSideBar from "./RightSideBar";
import RecipeImg from "./RecipeImg";

const SearchByIngredient = ({
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

  const [recipes, setRecipes] = useState(null);

  //const [searchResults, setSearchResults] = useState(null);
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
        setSearchedByIngResults(data);
        setValue("");
        setValue2("");
        setValue3("");
        setValue4("");
        setValue5("");
      });
  };
  return (
    <>
      <Main>
        <StyledInput
          type="text"
          value={value}
          placeholder="ingredient"
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />

        <StyledInput
          placeholder="ingredient "
          type="text"
          value={value2}
          onChange={(e) => {
            setValue2(e.target.value);
          }}
        />
        <StyledInput
          placeholder="ingredient "
          type="text"
          value={value3}
          onChange={(e) => {
            setValue3(e.target.value);
          }}
        />
        <StyledInput
          placeholder="ingredient "
          type="text"
          value={value4}
          onChange={(e) => {
            setValue4(e.target.value);
          }}
        />
        <StyledInput
          placeholder="ingredient "
          type="text"
          value={value5}
          onChange={(e) => {
            setValue5(e.target.value);
          }}
        />
        <StyledButton
          onClick={() => {
            clickHandler();
          }}
        >
          Find recipes
        </StyledButton>
      </Main>
      {!recipes ? (
        <StyledLoading>{/* <SpinnerCircular /> */}</StyledLoading>
      ) : (
        <Wrapper>
          {recipes.map((recipe) => {
            return (
              <StyledResponse>
                <RecipeImg recipe={recipe} />
              </StyledResponse>
            );
          })}
        </Wrapper>
      )}
    </>
  );
};

export default SearchByIngredient;

const StyledLoading = styled.div`
  position: absolute;
  /* display: flex;
  justify-content: center;
  align-items: center; */
  //background-color: red;
  margin-left: 50%;
  margin-top: 50%;
`;

const Main = styled.div`
  //margin-top: 15px;
  display: flex;
  flex-direction: column;
  border: solid 1px gray;
  align-items: center;
  background-color: #d9d9d9;
  padding: 10px 0;
`;
const StyledInput = styled.input`
  height: 20px;
  width: 450px;
  //border: none;
  border-bottom: 1px solid gray;
  border-top: none;
  border-left: none;
  border-right: none;
  background-color: #d9d9d9;
  border-radius: 0;
  &::placeholder {
    color: red;
    font-size: 15px;
  }
  color: green;
  font-size: 15px;
`;
const StyledButton = styled.button`
  margin-top: 5px;
  background-color: #509e2f;
  border: none;
  padding: 10px 30px;
`;
const StyledResponse = styled.div`
  display: flex;
`;

const Wrapper = styled.div`
  margin-top: 15px;
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
`;
