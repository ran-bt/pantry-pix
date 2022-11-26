import styled from "styled-components";

const RightSideBar = () => {
  return (
    <StyledContainer>
      <ImgBox></ImgBox>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  width: 20vw;
  display: flex;
  align-items: center;
  background-color: yellow;
  margin-right: 0;
  padding-left: 0px;
`;

const ImgBox = styled.div`
  /* background-image: url("/rezel-apacionado-MZfS19xrrz0-unsplash.jpg"); */

  //display: flex;
  //justify-content: space-around;
  //min-height: 30vh;
  background-image: url("/rezel-apacionado-MZfS19xrrz0-unsplash.jpg");
  background-position: left;

  background-repeat: no-repeat;
  background-size: cover;
  overflow-y: hidden;

  background-color: yellow;
  width: 20vw;
  height: 100vh;
  //margin-right: 0;
  //padding-left: 20px;
`;
export default RightSideBar;
