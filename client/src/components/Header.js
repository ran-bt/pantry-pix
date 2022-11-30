import { NavLink, Link } from "react-router-dom";
import styled from "styled-components";
import { MdSearch } from "react-icons/md";
import LoginButton from "../LoginButton";
import LogoutButton from "../LogoutButton";
import ProfileInfo from "./ProfileInfo";
import { useAuth0 } from "@auth0/auth0-react";

const Header = () => {
  const { isLoading, error } = useAuth0();

  return (
    <StyledContainer>
      <StyledLink to={"/"}>PANTRYpicks</StyledLink>
      <StyledForm>
        <StyledInput type="text" placeholder="search..." name="search" />
        <StyledButton type="submit">
          <span>
            <MdSearch />
          </span>
        </StyledButton>
      </StyledForm>
      {/* <StyledNavLink to={"/login"}>Login</StyledNavLink> */}

      <div>
        {" "}
        {error && <p>Authentication Error!</p>}
        {!error && isLoading && <p>loading...</p>}
        {!error && !isLoading && (
          <StyledProfileInfo>
            <LoginButton />
            <LogoutButton />
            <ProfileInfo />
          </StyledProfileInfo>
        )}
      </div>
    </StyledContainer>
  );
};

const StyledContainer = styled.header`
  //width: 100vw;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 18px;
  background-color: rgb(0, 146, 66);
  color: white;
`;

const StyledLink = styled(Link)`
  color: white;
  font-size: 30px;
  text-decoration: none;
  padding-left: 20px;
`;
const StyledForm = styled.form`
  background-color: white;
  padding: 2px 4px;
  display: flex;
  border-radius: 10px;
`;
const StyledInput = styled.input`
  margin-top: 2px;
  height: 25px;
  border: none;
  border-radius: 0; ;
`;
const StyledButton = styled.button`
  // float: left;
  border: none;
  background-color: white;
  &:hover {
    cursor: pointer;
  }
  span {
    color: black;
    font-size: 22px;
  }
`;
const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: white;
  padding-right: 20px;
`;

const StyledProfileInfo = styled.div`
  display: flex;
  gap: 10px;
  button {
    border: none;
    background-color: transparent;
    color: white;
    font-size: 18px;
    &:hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }
`;
export default Header;
