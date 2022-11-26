import { NavLink } from "react-router-dom";
import styled from "styled-components";

const LeftSideBar = () => {
  return (
    <StyledMain>
      <Styledh2>Filter Recipe</Styledh2>
      <StyledContainer>
        {/* <Styledh2>Filter Recipe</Styledh2> */}
        <Styleddiv>
          <Styledh3>Diet</Styledh3>
          <Styledp>Diary Free</Styledp>
          <Styledp>Sugar Free</Styledp>
          <Styledp>Gluten Free</Styledp>
        </Styleddiv>
        {/*  */}
        <Styleddiv>
          <Styledh3>Allergies</Styledh3>
          <Styledp>Glutten</Styledp>
          <Styledp>Nuts</Styledp>
          <Styledp>Shrimp</Styledp>
        </Styleddiv>

        <Styleddiv>
          <Styledh3>Cousine</Styledh3>
          <Styledp>Asian</Styledp>
          <Styledp>Italian</Styledp>
          <Styledp>Chinese</Styledp>
          <Styledp>Thai</Styledp>
        </Styleddiv>

        <Styleddiv>
          <Styledh3>Diet</Styledh3>
          <Styledp>Diary Free</Styledp>
          <Styledp>Sugar Free</Styledp>
          <Styledp>Gluten Free</Styledp>
        </Styleddiv>
      </StyledContainer>
    </StyledMain>
  );
};
const StyledMain = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 20vw;
  padding-left: 15px;
`;
const Styleddiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
const Styledh2 = styled.h2`
  color: #509e2f;
  margin-bottom: 40px;
  margin-top: 25px;
  padding-left: 15px;
  font-family: "Montez", cursive;
  font-size: 50px;
`;
const Styledh3 = styled.h3`
  margin-bottom: 10px;
  color: #509e2f;
  font-size: 20px;
`;
const Styledp = styled.p``;

export default LeftSideBar;
