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
