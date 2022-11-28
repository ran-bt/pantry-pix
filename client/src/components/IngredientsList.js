import TaskItem from "./TaskItem";

const IngredientsList = ({ tasks, deleteTask }) => {
  //   return <ul className={styles.tasks}></ul>;
  return (
    <ul>
      {tasks
        .sort((a, b) => b.id - a.id)
        .map((task) => (
          <TaskItem deleteTask={deleteTask} key={task.id} task={task} />
        ))}
    </ul>
  );
};

export default IngredientsList;
