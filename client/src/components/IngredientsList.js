// import TaskItem from "./TaskItem";

// const IngredientsList = ({ deleteIngredient, ingredients }) => {
//   //   return <ul className={styles.tasks}></ul>;
//   return (
//     <ul>
//       {ingredients
//         .sort((a, b) => b.id - a.id)
//         .map((item) => (
//           <TaskItem
//             deleteIngredient={deleteIngredient()}
//             key={item.id}
//             item={item}
//           />
//         ))}
//     </ul>
//   );
// };

// export default IngredientsList;

import styled from "styled-components";
import TaskItem from "./TaskItem";

const IngredientsList = ({ tasks, deleteTask }) => {
  console.log(tasks);
  //   return <ul className={styles.tasks}></ul>;
  return (
    <StyledUl>
      {tasks
        .sort((a, b) => b.id - a.id)
        .map((task) => (
          <TaskItem deleteTask={deleteTask} key={task.id} task={task} />
        ))}
    </StyledUl>
  );
};

const StyledUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
`;
export default IngredientsList;
