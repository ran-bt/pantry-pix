import { NavLink, Link } from "react-router-dom";
import styled from "styled-components";
import { MdSearch } from "react-icons/md";

const Footer = () => {
  return (
    <StyledContainer>
      <StyledLink to={"/"}>PANTRYpicks</StyledLink>
      {/* <StyledForm>
        <StyledInput type="text" placeholder="search..." name="search" />
        <StyledButton type="submit">
          <span>
            <MdSearch />
          </span>
        </StyledButton>
      </StyledForm> */}
      <StyledDiv>
        <StyledNavLink to={"#"}>Login</StyledNavLink>
        <StyledNavLink to={"#"}>Contact us</StyledNavLink>
        <StyledNavLink to={"#"}>About us</StyledNavLink>
        <StyledNavLink to={"#"}>FAQ</StyledNavLink>
      </StyledDiv>
    </StyledContainer>
  );
};

const StyledContainer = styled.footer`
  //  width: 100vw;
  height: 140px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 18px;
  background-color: black;
  color: white;
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  //padding-left: 10px;
`;
const StyledForm = styled.form`
  //background-color: white;
  // padding: 2px 4px;
  display: flex;
  border-radius: 10px;
`;
const StyledInput = styled.input`
  margin-top: 2px;
  height: 17px;
  width: 80px;
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
const StyledDiv = styled.div``;
export default Footer;
