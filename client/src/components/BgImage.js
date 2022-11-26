import styled from "styled-components";

const BgImage = () => {
  return <StyledContainer></StyledContainer>;
};

export default BgImage;
const StyledContainer = styled.div`
  //margin-top: 50px;
  display: flex;
  justify-content: space-around;
  min-height: 30vh;
  background-image: url("/headerImg1.jpg");
  background-position: center;
  /* background-image: url("https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"); */
  background-repeat: no-repeat;
  background-size: cover;
`;

const StyledImg = styled.img``;
