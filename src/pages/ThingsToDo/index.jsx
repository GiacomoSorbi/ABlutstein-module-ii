import React, { useState } from "react";
import AddTaskForm from "../../components/ToDoList/AddTaskForm";
import EditTaskForm from "../../components/ToDoList/EditTaskForm";
import TaskTable from "../../components/ToDoList/tables/TaskTable";
import "../../components/ToDoList/tables/tables.css";
import "../../components/ToDoList/forms.css";

const ThingsToDo = () => {
  const [tasks, setTasks] = useState([]);

  const [editing, setEditing] = useState(false);

  const initialFormState = {
    id: null,
    name: "",
    completed: ""
  };

  const [currentTask, setCurrentTask] = useState(initialFormState);

  const addTask = task => {
    task.id = tasks.length;
    setTasks([...tasks, task]);
  };

  const deleteTask = event => {
    setEditing(false);
    setTasks(
      tasks.filter(task => +event.currentTarget.dataset.task !== task.id)
    );
  };

  const handleChange = event => {
    const newTask = tasks.map(task => {
      if (task.id === +event.currentTarget.dataset.task) {
        task.completed = !task.completed;
      }
      return task;
    });
    setTasks(newTask);
  };

  const updateTask = currentTask => {
    setTasks(
      tasks.map(task =>
        currentTask.id === task.id ? { ...currentTask } : task
      )
    );
  };

  const editRow = event => {
    const task = tasks.find(
      elem => elem.id === +event.currentTarget.dataset.task
    );
    setEditing(true);
    setCurrentTask({
      ...task
    });
  };

  return (
    <div className="title">
      <h3>What do I have to do today?</h3>
      <div className="container">
        <div>
          {editing ? (
            <div>
              <EditTaskForm
                editing={editing}
                setEditing={setEditing}
                currentTask={currentTask}
                updateTask={updateTask}
              />
            </div>
          ) : (
            <div>
              <AddTaskForm addTask={addTask} />
            </div>
          )}
        </div>
        <div>
          <TaskTable
            tasks={tasks}
            editRow={editRow}
            deleteTask={deleteTask}
            handleChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
};

export default ThingsToDo;
