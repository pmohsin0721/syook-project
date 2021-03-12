import React, { useState } from "react";
import "./Notes.css";

const Notes = () => {
  const [addTitle, setAddTitle] = useState([]);
  const [item, setItem] = useState("");

  const [addDescription, setAddDescription] = useState([]);
  const [storeDescription, setStoreDesciption] = useState("");

  const newTitle = (e) => {
    setItem(e.target.value);
  };

  const newDescription = (e) => {
    setStoreDesciption(e.target.value);
  };

  const addNewTask = () => {
    addTitle.push(item);
    setAddTitle([...addTitle]);
    setItem("");
    addDescription.push(storeDescription);
    setAddDescription([...addDescription]);
    setStoreDesciption("");

    task.push(addTitle);
    task.push(addDescription);
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
            value={item}
          />
          <textarea
            className="description"
            placeholder="DESCRIPTION"
            onChange={newDescription}
            value={storeDescription}
          />
          <button className="button" onClick={addNewTask}>
            Add Task
          </button>
        </div>
      </div>
    </>
  );
};
export default Notes;
