import { NavLink, Link } from "react-router-dom";
import styled from "styled-components";
import { MdSearch } from "react-icons/md";

const Header = () => {
  return (
    <StyledContainer>
      <StyledLink to={"/"}>PANTRYpix</StyledLink>
      <StyledForm>
        <StyledInput type="text" placeholder="search..." name="search" />
        <StyledButton type="submit">
          <span>
            <MdSearch />
          </span>
        </StyledButton>
      </StyledForm>
      <StyledNavLink to={"/login"}>Login</StyledNavLink>
    </StyledContainer>
  );
};

const StyledContainer = styled.header`
  //  width: 100vw;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 18px;
  background-color: rgb(0, 146, 66);
  color: white;
`;

const StyledLink = styled(Link)`
  color: white;
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
export default Header;
