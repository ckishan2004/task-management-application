import TaskItem from "./TaskItem";

function TaskList({ tasks, toggleComplete, deleteTask }) {

  if (tasks.length === 0) {
    return <p className="text-center">No tasks added</p>;
  }

  return (
    <div className="table-responsive">

      <table className="table table-bordered">

        <thead className="table-dark">
<tr>
<th>#</th>
<th>Title</th>
<th>Description</th>
<th>Status</th>
<th>Created Time</th>
<th>Action</th>
</tr>
</thead>

        <tbody>

          {tasks.map((task, index) => (
            <TaskItem
              key={task.id}
              index={index}
              task={task}
              toggleComplete={toggleComplete}
              deleteTask={deleteTask}
            />
          ))}

        </tbody>

      </table>

    </div>
  );
}

export default TaskList;