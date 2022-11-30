import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";

const ProfileInfo = () => {
  const { user, isAuthenticated } = useAuth0();
  return (
    isAuthenticated && (
      <StyledMain>
        {user?.picture && (
          <ImgBox>
            <StyledImg src={user.picture} alt={user?.name} />
          </ImgBox>
        )}

        {/* 
          <h2>{user?.given_name}</h2>
        <ul>
          {Object.keys(user).map((objkey, i) => (
            <li key={i}>
              {objkey}: {user[objkey]}
            </li>
          ))}
        </ul> */}
      </StyledMain>
    )
  );
};

export default ProfileInfo;
const StyledMain = styled.main``;
const ImgBox = styled.div`
  width: 40px;
  height: 40px;
  background-color: red;
  border-radius: 50%;
  overflow: hidden;
`;
const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
