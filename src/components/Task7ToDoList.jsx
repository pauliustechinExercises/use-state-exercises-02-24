import { useState } from "react";

const ToDoList = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  const addTask = () => {
    if (task) {
      setTasks([...tasks, task]);
    }
    setTask("");
  };

  const deleteTask = (e) => {
    const tempArr = tasks.filter((task, index) => index !== Number(e.target.id));
    setTasks([...tempArr]);
  };

  return (
    <div className="tail_div">
      <p className="font-bold">**Exercise 7: Todo List**</p>
      <hr />
      <p>
        Create a `TodoList` component that: - Allows the user to add tasks to a
        list. - Displays the list of tasks. - Removes a task when a "Remove"
        button next to it is clicked.
      </p>
      <hr />
      <p className="font-bold pb-5">Solution:</p>
      <div className="flex gap-2 justify-center">
        <input
          type="text"
          onChange={(e) => {
            setTask(e.target.value);
          }}
          value={task}
        />
        <button className="ml-2" type="submit" onClick={addTask}>
          Add task
        </button>
      </div>
      <h1 className="text-2xl font-bold">ToDoList:</h1>
      <ul>
        {tasks.map((task, index) => {
          return (
            <div key={index} className="flex justify-center">
              <li  className="mr-2 list-disc">
                {task}
              </li>
              <button
                id={index}
                style={{ background: "red", padding: "2px" }}
                onClick={deleteTask}
              >
                Delete
              </button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default ToDoList;
