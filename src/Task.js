import React, { useState } from "react";
import "./Task.css";
import TaskList from "./TaskList";

const Task = () => {
  const [addTitle, setAddTitle] = useState("");

  const [addDescription, setAddDescription] = useState("");

  const [task, setTask] = useState([]);

  const [search, setSearch] = useState("");

  const newTitle = (e) => {
    setAddTitle(e.target.value);
  };

  const newDescription = (e) => {
    setAddDescription(e.target.value);
  };

  const addNewTask = () => {
    task.push({ title: addTitle, Description: addDescription });
    setTask([...task]);
    setAddTitle("");
    setAddDescription("");
  };

  const deleteTask = (idx) => {
    task.splice(idx, 1);
    setTask([...task]);
  };

  const editTask = (changeTitle, changeDescription, idx) => {
    task[idx] = { title: changeTitle, Description: changeDescription };
    setTask([...task]);
  };

  return (
    <>
      <div className="container">
        <div className="box">
          <h1>Task Manager</h1>
          <textarea
            className="title"
            placeholder="TITLE"
            onChange={newTitle}
            value={addTitle}
          />
          <textarea
            className="description"
            placeholder="DESCRIPTION"
            onChange={newDescription}
            value={addDescription}
          />
          <button className="button" onClick={addNewTask}>
            Add Task
          </button>
        </div>
      </div>
      <div className="taskContainer">
        <div className="task">
          <div className="taskList">
            <h2>Tasks..</h2>
            <input
              className="search"
              type="text"
              placeholder="Search"
              onChange={(e) => setSearch(e.target.value)}
              value={search}
            />
            {task
              .filter((val) => {
                if (search === "") {
                  return val;
                } else {
                  return val.title.toLowerCase().startsWith(search);
                }
              })
              .map((task, idx) => (
                <TaskList
                  title={task.title}
                  description={task.Description}
                  idx={idx}
                  key={`${task.title}_${idx}`}
                  deleteTask={deleteTask}
                  editTask={editTask}
                />
              ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default Task;
