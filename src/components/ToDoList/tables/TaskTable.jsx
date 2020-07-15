import React from "react";
import "./tables.css";

const TaskTable = ({ deleteTask, editRow, tasks, handleChange }) => {
  return (
    <table className="table-1">
      <thead align="center">
        <tr>
          <th className="completeTab" scope="col">
            Completed
          </th>
          <th className="taskTab" scope="col">
            Task
          </th>
          <th className="actionsTab" scope="col">
            Actions
          </th>
        </tr>
      </thead>
      <tbody align="center">
        {tasks.length > 0 ? (
          tasks.map(task => (
            <tr key={task.id}>
              <td className="align-middle">
                <input
                  className="tickBox"
                  type="checkbox"
                  defaultChecked={task.completed}
                  data-task={task.id}
                  onClick={handleChange}
                />
              </td>
              <td className="align-middle">
                {task.completed ? <del>{task.name}</del> : task.name}
              </td>
              <td>
                <button
                  className="editButton"
                  data-task={task.id}
                  onClick={editRow}
                >
                  Edit
                </button>
                <button
                  className="deleteButton"
                  data-task={task.id}
                  onClick={deleteTask}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={3}>No tasks today</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default TaskTable;
