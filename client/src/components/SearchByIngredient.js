import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import BgImage from "./BgImage";
import { SpinnerCircular } from "spinners-react";
import LeftSideBar from "./LeftSideBar";
import RightSideBar from "./RightSideBar";
import RecipeImg from "./RecipeImg";
import IngredientsList from "./IngredientsList";

const SearchByIngredient = () => {
  //⬇defining the used states

  const [inputValue, setInputValue] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [newArray, SetnewArray] = useState([]);
  const [recipes, setRecipes] = useState(null);

  //⬇ 2 API Keys to alternate if we run the daily request limit ⬇

  //const key = process.env.REACT_APP_API_KEY;
  const key1 = process.env.REACT_APP_API_KEY1;

  // creates a copy of the current state and adds new ingredient
  const addIngredient = (item) => {
    setIngredients((prevState) => [...prevState, item]);
  };

  //finds and deletes the ingredient
  const deleteIngredient = (id) => {
    setIngredients((prevState) => prevState.filter((item) => item.id !== id));
  };

  //on click the button a new object is added to the ingredient array
  const clickHandler = (e) => {
    e.preventDefault();
    addIngredient({
      name: inputValue,
      id: Date.now(),
    });
    setInputValue("");
  };

  //except for the first the word the API requires ",+" to be added infront of
  //any additional ingredient

  // this variable will hold the modified ingredients string

  // let addUrl = "";
  // useEffect(() => {
  //   SetnewArray((prevState) => [...prevState, newArray]);
  //   let newArr = [...ingredients];

  //   newArr.forEach((ingredient, index) => {
  //     if (index >= 1) {
  //       addUrl += `,+${ingredient.name}`;
  //     } else {
  //       addUrl += ingredient.name;
  //     }
  //   });

  //console.log(addUrl);
  // }, [ingredients]);
  // console.log("URL ", addUrl);
  const clickHandler2 = () => {
    //everytime a new ingredient is added this code adds the a new string with
    // the ",+" as required by the API
    let newArr = [...ingredients];
    let addUrl = "";
    newArr.forEach((item, index) => {
      if (index >= 1) {
        addUrl += `,+${item.name}`;
      } else {
        addUrl += item.name;
      }
    });

    // console.log("clicked");
    // console.log("URL ", addUrl);
    fetch(
      `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${key1}&ingredients=${addUrl}&number=12`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setRecipes(data);
      });
  };
  return (
    <>
      <div>
        <form
          onSubmit={(e) => {
            clickHandler(e);
          }}
        >
          <input
            type="text"
            value={inputValue}
            onChange={(e) => {
              //console.log(e.target.value);
              setInputValue(e.target.value);
            }}
          />
          <StyledAddButton type="submit">add</StyledAddButton>
        </form>
        <StyledBox>
          {!inputValue ? (
            ""
          ) : (
            <IngredientsList
              deleteIngredient={deleteIngredient}
              ingredients={ingredients}
            />
          )}
        </StyledBox>
        <button
          onClick={() => {
            clickHandler2();
          }}
        >
          Find Recipes
        </button>
      </div>
      <Main>
        {/* <StyledInput
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
        </StyledButton> */}
      </Main>
      {!recipes ? (
        <StyledLoading>{/* <SpinnerCircular /> */}</StyledLoading>
      ) : (
        <Wrapper>
          {recipes.map((recipe) => {
            return (
              <StyledResponse key={Date.now()}>
                <RecipeImg recipe={recipe} />
              </StyledResponse>
            );
          })}
        </Wrapper>
      )}
    </>
  );
};

const StyledAddButton = styled.button`
  background-color: black;
  color: white;
`;
const StyledBox = styled.div`
  margin: auto;
  width: 450px;
  height: 259px;
  background-color: red;
  overflow: scroll;
`;
const Main = styled.div`
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  border: solid 1px gray;
  align-items: center;
  background-color: #d9d9d9;
  padding: 10px 0;
`;
const Wrapper = styled.div`
  margin-top: 15px;
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
`;

const StyledLoading = styled.div`
  position: absolute;
  /* display: flex;
   justify-content: center;
   align-items: center; */
  //background-color: red;
  margin-left: 50%;
  margin-top: 50%;
`;
const StyledResponse = styled.div`
  display: flex;
`;
export default SearchByIngredient;

// const StyledLoading = styled.div`
//   position: absolute;
//   /* display: flex;
//   justify-content: center;
//   align-items: center; */
//   //background-color: red;
//   margin-left: 50%;
//   margin-top: 50%;
// `;

// const Main = styled.div`
//   //margin-top: 15px;
//   display: flex;
//   flex-direction: column;
//   border: solid 1px gray;
//   align-items: center;
//   background-color: #d9d9d9;
//   padding: 10px 0;
// `;
// const StyledInput = styled.input`
//   height: 20px;
//   width: 450px;
//   //border: none;
//   border-bottom: 1px solid gray;
//   border-top: none;
//   border-left: none;
//   border-right: none;
//   background-color: #d9d9d9;
//   border-radius: 0;
//   &::placeholder {
//     color: red;
//     font-size: 15px;
//   }
//   color: green;
//   font-size: 15px;
// `;
// const StyledButton = styled.button`
//   margin-top: 5px;
//   background-color: #509e2f;
//   border: none;
//   padding: 10px 30px;
// `;
// const StyledResponse = styled.div`
//   display: flex;
// `;

// const Wrapper = styled.div`
//   margin-top: 15px;
//   display: flex;
//   flex-wrap: wrap;
//   gap: 5px;
// `;

///////////////////////////////////////////////
//backup copy

// import { useEffect, useState } from "react";
// import { Link, NavLink } from "react-router-dom";
// import styled from "styled-components";
// import BgImage from "./BgImage";
// import { SpinnerCircular } from "spinners-react";
// import LeftSideBar from "./LeftSideBar";
// import RightSideBar from "./RightSideBar";
// import RecipeImg from "./RecipeImg";
// import IngredientsList from "./IngredientsList";

// const SearchByIngredient = ({
//   searchedByIngResults,
//   setSearchedByIngResults,
// }) => {
//   const [value, setValue] = useState("");
//   const [value2, setValue2] = useState("");
//   const [value3, setValue3] = useState("");
//   const [value4, setValue4] = useState("");
//   const [value5, setValue5] = useState("");
//   const key = process.env.REACT_APP_API_KEY;
//   const key1 = process.env.REACT_APP_API_KEY1;

//   const [recipes, setRecipes] = useState(null);

//   //const [searchResults, setSearchResults] = useState(null);
//   // console.log(process.env.REACT_APP_API_KEY);

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
//         setSearchedByIngResults(data);
//         setValue("");
//         setValue2("");
//         setValue3("");
//         setValue4("");
//         setValue5("");
//       });
//   };
//   return (
//     <>
//       <Main>
//         <StyledInput
//           type="text"
//           value={value}
//           placeholder="ingredient"
//           onChange={(e) => {
//             setValue(e.target.value);
//           }}
//         />

//         <StyledInput
//           placeholder="ingredient "
//           type="text"
//           value={value2}
//           onChange={(e) => {
//             setValue2(e.target.value);
//           }}
//         />
//         <StyledInput
//           placeholder="ingredient "
//           type="text"
//           value={value3}
//           onChange={(e) => {
//             setValue3(e.target.value);
//           }}
//         />
//         <StyledInput
//           placeholder="ingredient "
//           type="text"
//           value={value4}
//           onChange={(e) => {
//             setValue4(e.target.value);
//           }}
//         />
//         <StyledInput
//           placeholder="ingredient "
//           type="text"
//           value={value5}
//           onChange={(e) => {
//             setValue5(e.target.value);
//           }}
//         />
//         <StyledButton
//           onClick={() => {
//             clickHandler();
//           }}
//         >
//           Find recipes
//         </StyledButton>
//       </Main>
//       {!recipes ? (
//         <StyledLoading>{/* <SpinnerCircular /> */}</StyledLoading>
//       ) : (
//         <Wrapper>
//           {recipes.map((recipe) => {
//             return (
//               <StyledResponse>
//                 <RecipeImg recipe={recipe} />
//               </StyledResponse>
//             );
//           })}
//         </Wrapper>
//       )}
//     </>
//   );
// };

// export default SearchByIngredient;

// const StyledLoading = styled.div`
//   position: absolute;
//   /* display: flex;
//   justify-content: center;
//   align-items: center; */
//   //background-color: red;
//   margin-left: 50%;
//   margin-top: 50%;
// `;

// const Main = styled.div`
//   //margin-top: 15px;
//   display: flex;
//   flex-direction: column;
//   border: solid 1px gray;
//   align-items: center;
//   background-color: #d9d9d9;
//   padding: 10px 0;
// `;
// const StyledInput = styled.input`
//   height: 20px;
//   width: 450px;
//   //border: none;
//   border-bottom: 1px solid gray;
//   border-top: none;
//   border-left: none;
//   border-right: none;
//   background-color: #d9d9d9;
//   border-radius: 0;
//   &::placeholder {
//     color: red;
//     font-size: 15px;
//   }
//   color: green;
//   font-size: 15px;
// `;
// const StyledButton = styled.button`
//   margin-top: 5px;
//   background-color: #509e2f;
//   border: none;
//   padding: 10px 30px;
// `;
// const StyledResponse = styled.div`
//   display: flex;
// `;

// const Wrapper = styled.div`
//   margin-top: 15px;
//   display: flex;
//   flex-wrap: wrap;
//   gap: 5px;
// `;
