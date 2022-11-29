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

// export default TaskItem;

const TaskItem = ({ task, deleteTask }) => {
  return (
    <li>
      {task.name}
      <button
        onClick={() => {
          deleteTask(task.id);
        }}
      >
        delete
      </button>
    </li>
  );
};

export default TaskItem;
