import styled from "styled-components";

const TaskList = ({ ingredients }) => {
  return (
    <StyledBox>
      <StyledDiv>{ingredients.name}</StyledDiv>;
    </StyledBox>
  );
};

export default TaskList;
const StyledBox = styled.div`
  width: 150px;
  height: 159px;
  background-color: red;
`;

const StyledDiv = styled.div`
  color: green;
`;
