import { useContext, useEffect, useState } from "react";
import { CurrentUserContext } from "./CurrentUserContext";
import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";
import { FiHeart } from "react-icons/fi";
import { Link } from "react-router-dom";

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();
  const [liked, setLiked] = useState();
  const { likedRecipes, currentUser } = useContext(CurrentUserContext);
  console.log(user);
  //const key = process.env.REACT_APP_API_KEY;
  const key1 = "c3abc385b6234ccd924ea88750a1c611";
  //process.env.REACT_APP_API_KEY1;
  //"2b1b94826ab340d0a9ecb53d13d061c8";

  //get recipe ids from currentUser context then fetch recipe information and render it on screen
  const str = likedRecipes.toString();
  //[1,2,3].to... = "[1,2,3]"
  //console.log(str);
  console.log("CurrentUser", currentUser);

  useEffect(() => {
    fetch(
      `https://api.spoonacular.com/recipes/informationBulk?apiKey=${key1}&ids=${str}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setLiked(data);
      });
  }, []);

  return (
    <StyledContainer>
      <StyledMain className="Container">
        <ProfileImgBox>
          <ProfileImg src={user.picture} alt={user?.name} />
        </ProfileImgBox>
        {/* {user?.picture && (
          <ProfileImgBox to={"/profile"}>
            <ProfileImg src={user.picture} alt={user?.name} />
          </ProfileImgBox>
        )} */}

        <ProfileInfoBox>
          <ProfileName>Name: {user.name}</ProfileName>
          <ProfileEmail>Email: {user.email}</ProfileEmail>
        </ProfileInfoBox>
      </StyledMain>
      <StyledMain2>
        <Box1>
          <StyledH2> Liked recipes</StyledH2>
        </Box1>
        <Box2></Box2>
      </StyledMain2>

      {!liked ? (
        <StyledH2>No Liked recipes</StyledH2>
      ) : (
        <Wrapper>
          {liked.map((likeRecp) => {
            return (
              <StyledDiv key={likeRecp.id}>
                <StyledHeart>
                  <>
                    <FiHeart color="red" fill="red" size="25px" />
                  </>
                </StyledHeart>

                <StyledLink to={`/recipe-detail/${likeRecp.id}`}>
                  <ImageBox>
                    <StyledImg src={likeRecp.image} alt="resp" />
                    <ImageDes>
                      <StyledP>{likeRecp.title}</StyledP>
                    </ImageDes>
                  </ImageBox>
                </StyledLink>
              </StyledDiv>
            );
          })}
        </Wrapper>
      )}
      <Box1>
        <StyledH2> Created recipes</StyledH2>
      </Box1>
    </StyledContainer>
  );
};

const StyledContainer = styled.div``;
const StyledMain = styled.main`
  display: flex;
  justify-content: space-around;
  padding: 10px 0;
  border-bottom: 2px solid #dcdcdc;
`;
const ProfileImgBox = styled.div`
  width: 240px;
  height: 240px;
  background-color: red;
  border-radius: 5%;
  overflow: hidden;
`;
const ProfileImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const ProfileInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const ProfileName = styled.h3``;
const ProfileEmail = styled.h3``;
const StyledMain2 = styled.div`
  display: flex;
`;
const Box1 = styled.div`
  margin: 15px 0;
`;
const Box2 = styled.div``;
///////////////////////////////////////////
const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const StyledDiv = styled.div`
  transition: 0.7s transform;
  &:hover {
    box-shadow: 0px 2px 17px -1px #509e2f;

    transform: scale(1.02);
  }
  border: black 1px solid;
  width: 200px;
  height: 250px;
  text-align: center;
  position: relative;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const ImageBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledImg = styled.img`
  width: 195px;
  object-fit: contain;
  overflow: hidden;
`;
const ImageDes = styled.div``;

const StyledP = styled.p`
  margin-top: 2px;
  color: black;
  font-size: small;
  font-weight: bold;
`;
const StyledHeart = styled(Link)`
  position: absolute;
  top: 5px;
  right: 10px;
`;

const StyledH2 = styled.h2`
  font-size: 30px;
`;
export default Profile;
