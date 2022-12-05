import { useEffect, useState } from "react";
import { MdUnpublished } from "react-icons/md";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import BgImage from "./BgImage";
import LeftSideBar from "./LeftSideBar";
import { v4 as uuidv4 } from "uuid";
import { FiClock } from "react-icons/fi";
import { CiForkAndKnife } from "react-icons/ci";
import { IoIosPeople } from "react-icons/io";
import { BiLike } from "react-icons/bi";
import { BsFillSquareFill } from "react-icons/bs";
import { ImList2 } from "react-icons/im";

const RecipeDetail = ({ recipes }) => {
  //declaring needed states
  const [instructions, setInstructions] = useState(null);
  const [ingredients, setIngredients] = useState(null);

  const { id } = useParams();

  const key1 = process.env.REACT_APP_API_KEY1;

  //fetching list of ingredients
  useEffect(() => {
    fetch(
      `https://api.spoonacular.com/recipes/${id}/information?apiKey=${key1}&includeNutrition=false`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log("Ingredients", data);
        setInstructions(data);
      });
  }, []);

  const tagRegExp = new RegExp("<s*[^>]*>", "g");
  return !instructions ? (
    <h1>Loading...</h1>
  ) : (
    <>
      <BgImage url={instructions.image} />
      <MainDiv>
        {/* <LeftSideBar /> */}
        <QuickInfoBox>
          <Wrapper>
            <Icon>
              {" "}
              <FiClock size={"2em"} color="green" />
            </Icon>
            <Info>
              <h2>Prep Time</h2>
              <p>{instructions.readyInMinutes} Mins</p>
            </Info>
          </Wrapper>

          <Wrapper>
            <Icon>
              {" "}
              <CiForkAndKnife size={"2em"} color="green" />
            </Icon>
            <Info>
              <h2>Cook Time</h2>
              <p>{instructions.cookingMinutes} Mins</p>
            </Info>
          </Wrapper>

          <Wrapper>
            <Icon>
              {" "}
              <IoIosPeople size={"2em"} color="green" />
            </Icon>
            <Info>
              <h2>Serving</h2>
              <p>{instructions.serving}</p>
            </Info>
          </Wrapper>

          <Wrapper>
            <Icon>
              {" "}
              <BiLike size={"2em"} color="green" />
            </Icon>
            <Info>
              <h2>Likes</h2>
              <p>{instructions.aggregateLikes}</p>
            </Info>
          </Wrapper>
        </QuickInfoBox>

        <RecipeName>{instructions.title}</RecipeName>

        <Summary>
          <p>{instructions.summary.replace(tagRegExp, "")}</p>
        </Summary>
        <IngredientsBox>
          <IngredientsH1>
            <ImList2 size={"1.5em"} color="green" />
            <h1>Ingredients</h1>
          </IngredientsH1>

          {instructions.extendedIngredients.map((item) => {
            return (
              <SubBox key={item.originalName}>
                <Ingredients>
                  <BsFillSquareFill size={"1em"} color="green" />
                  <p>
                    {item.amount} {item.originalName}
                  </p>
                </Ingredients>
              </SubBox>
            );
          })}
        </IngredientsBox>
        <InstructionsBox>
          {instructions.analyzedInstructions.map((instruction) => {
            return (
              <div key={uuidv4()}>
                <>
                  {" "}
                  {instruction.steps.map((instructionStep) => {
                    return (
                      <Steps key={uuidv4()}>
                        <StyledArrow>
                          <p>Step {instructionStep.number}:</p>
                        </StyledArrow>
                        <StyledInstructionP>
                          {/* <span>Step {instructionStep.number}:</span> */}
                          {instructionStep.step}
                        </StyledInstructionP>
                      </Steps>
                    );
                  })}
                </>
              </div>
            );
          })}
        </InstructionsBox>
      </MainDiv>
    </>
  );
};

export default RecipeDetail;
const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
`;
const RecipeName = styled.h1`
  margin-left: 30px;
  margin-top: 50px;
  font-size: 25px;
  font-weight: bold;
`;

const QuickInfoBox = styled.div`
  display: flex;
  flex-wrap: nowrap;
  gap: 3px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  height: 80px;
  background-color: #f2f2f2;
  width: 25%;
`;
const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 40px;
  padding-right: 20px;
`;
const Info = styled.div`
  padding-top: 15px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Summary = styled.div`
  margin: 50px 30px;
  p {
    line-height: 2em;
  }
`;

const IngredientsBox = styled.div`
  background-color: #f8f8f8;

  padding-top: 20px;
  padding-bottom: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const IngredientsH1 = styled.div`
  display: flex;
  justify-content: baseline;
  gap: 15px;
  //margin-bottom: 20px;
  margin: auto;
  h1 {
    font-size: 30px;
  }
`;

const SubBox = styled.div`
  display: flex;
  width: 50%;
  margin: auto;
  background-color: white;
  padding: 20px;
`;
const Ingredients = styled.div`
  display: flex;

  gap: 15px;
`;

const InstructionsBox = styled.div`
  margin: 50px 30px;
`;

const Steps = styled.div`
  line-height: 2em;
`;
const StyledArrow = styled.div`
  p {
    border-bottom: green 3px solid;
  }
`;

const StyledInstructionP = styled.p`
  margin-bottom: 12px;

  padding: 15;
  //list-style: circle;
  span {
    font-weight: bold;
    font-size: 18px;
    padding-right: 15px;
  }
`;
const TextArea = styled.input``;
