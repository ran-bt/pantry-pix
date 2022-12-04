// import { useEffect, useState } from "react";
// import styled from "styled-components";
// import IngredientsList from "../IngredientsList";
// import RecipeImg from "../RecipeImg";

const CreateRecipe = () => {
  //   //⬇defining the used states
  //   const [state, setState] = useState([]);
  //   const [tasks, setTasks] = useState([]);
  //   const [newArray, SetnewArray] = useState([]);
  //   const [recipes, setRecipes] = useState(null);

  //   //⬇ 2 API Keys to alternate if we run the daily request limit ⬇

  //   //const key = process.env.REACT_APP_API_KEY;
  //   const key1 = process.env.REACT_APP_API_KEY1;

  //   const addTask = (task) => {
  //     setTasks((prevState) => [...prevState, task]);
  //   };
  //   const deleteTask = (id) => {
  //     setTasks((prevState) => prevState.filter((task) => task.id !== id));
  //   };

  //   //console.log("URL...", addUrl);
  //   const clickHandler = (e) => {
  //     e.preventDefault();
  //     addTask({
  //       name: state,
  //       id: Date.now(),
  //     });

  //     setState("");
  //   };

  //   const clickHandler2 = () => {
  //     // SetnewArray((prevState) => [...prevState]);
  //     let newArr = [...tasks];
  //     let addUrl = "";
  //     newArr.forEach((task, index) => {
  //       if (index >= 1) {
  //         addUrl += `,+${task.name}`;
  //       } else {
  //         addUrl += task.name;
  //       }
  //     });

  //     fetch(
  //       `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${key1}&ingredients=${addUrl}&number=12`
  //     )
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log(data);
  //         setRecipes(data);
  //       });
  //   };

  return (
    //     <MainDiv>
    //       <StyledForm
    //         onSubmit={(e) => {
    //           clickHandler(e);
    //         }}
    //       >
    //         <StyledInputContainer>
    //           <input type="text" />
    //         </StyledInputContainer>

    //         <StyledInputContainer>
    //           <StyledInput
    //             placeholder="add ingredient.."
    //             type="text"
    //             value={state}
    //             onChange={(e) => {
    //               //console.log(e.target.value);
    //               setState(e.target.value);
    //             }}
    //           />
    //         </StyledInputContainer>
    //         <StyledAddButton type="submit">add</StyledAddButton>
    //       </StyledForm>
    //       <StyledBox>
    //         {!tasks ? (
    //           ""
    //         ) : (
    //           <IngredientsList deleteTask={deleteTask} tasks={tasks} />
    //         )}
    //       </StyledBox>
    //       <ButtonContainer>
    //         <StyledButton
    //           onClick={() => {
    //             clickHandler2();
    //           }}
    //         >
    //           Find Recipes
    //         </StyledButton>
    //       </ButtonContainer>
    //       {!recipes ? (
    //         <></>
    //       ) : (
    //         <StyledMain>
    //           {recipes.map((recipe) => {
    //             return (
    //               <div key={recipe.id}>
    //                 <RecipeImg recipe={recipe} />
    //               </div>
    //             );
    //           })}
    //         </StyledMain>
    //       )}
    //     </MainDiv>
    <></>
  );
};

// const StyledAddButton = styled.button`
//   margin-left: -5px;
//   width: 5vw;
//   color: white;
//   background-color: black;
//   border: none;
// `;
// const MainDiv = styled.div`
//   //border: solid #f5f5f5 2px;
//   /* background-color: #fafafa; */
// `;
// const StyledForm = styled.form`
//   display: flex;
//   //justify-content: center;
//   background-color: #fafafa;
// `;
// const StyledInputContainer = styled.div`
//   width: 100%;
//   background-color: black;
// `;
// const StyledInput = styled.input`
//   width: 50vw;
//   border: 2px solid black;
//   border-radius: 0;
// `;
// const StyledBox = styled.div`
//   margin: auto;
//   width: 100%;
//   height: 150px;
//   background-color: #fafafa;
//   // background-color: red;
//   //background-image: url("/mockup-graphics-C4AQnyn59oU-unsplash.jpg");
//   overflow-x: hidden;
//   border: 1px solid rgb(232, 232, 232);
//   padding: 20px 10px;
// `;

// const ButtonContainer = styled.div`
//   width: 100%;
//   display: flex;
//   justify-content: center;
// `;

// const StyledButton = styled.button`
//   color: white;
//   background-color: green;
//   padding: 15px 25px;
//   border-radius: 3px;
//   border: none;
// `;
// const StyledMain = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   gap: 2px;
// `;

export default CreateRecipe;
