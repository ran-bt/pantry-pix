// const TaskItem = ({ item, deleteIngredient }) => {
//   return (
//     <li>
//       {item.name}
//       <button
//         onClick={() => {
//           deleteIngredient(item.id);
//         }}
//       >
//         delete
//       </button>
//     </li>
//   );
// };

import styled from "styled-components";

// export default TaskItem;

const TaskItem = ({ task, deleteTask }) => {
  return (
    <li>
      {task.name}
      <StyledButton
        onClick={() => {
          deleteTask(task.id);
        }}
      >
        X
      </StyledButton>
    </li>
  );
};

export default TaskItem;
const StyledButton = styled.button`
  color: red;
  border: none;
  &:hover {
    cursor: pointer;
  }
`;
