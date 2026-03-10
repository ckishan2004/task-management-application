function TaskItem({ task, index, toggleComplete, deleteTask }) {

  return (
    <tr>

      <td>{index + 1}</td>

      <td>{task.title}</td>

      <td>{task.description}</td>

      <td>
        {task.status}
      </td>

      <td>
        {task.createdDate}
      </td>

      <td>

        <button
          className="btn btn-success btn-sm me-2"
          onClick={() => toggleComplete(task.id)}
        >
          Complete
        </button>

        <button
          className="btn btn-danger btn-sm"
          onClick={() => deleteTask(task.id)}
        >
          Delete
        </button>

      </td>

    </tr>
  );
}

export default TaskItem;