import React, { useState } from "react";

const TaskList = (props) => {
  const [changeTitle, setChangeTitle] = useState(props.title);

  const [changeDescription, setChangeDescription] = useState(props.description);

  const [edit, setEdit] = useState(false);

  const clickEdit = () => {
    setEdit(true);
  };

  const clickDelete = () => {
    props.deleteTask(props.idx);
  };

  const saveTask = () => {
    props.editTask(changeTitle, changeDescription, props.idx);
    setEdit(false);
  };

  const updateTitle = (e) => {
    setChangeTitle(e.target.value);
  };

  const updateDescription = (e) => {
    setChangeDescription(e.target.value);
  };
  return (
    <>
      <div>
        <div>
          {edit ? (
            <>
              <input
                type="text"
                placeholder="edit"
                onChange={updateTitle}
                value={changeTitle}
              />
              <input
                type="text"
                placeholder="edit"
                onChange={updateDescription}
                value={changeDescription}
              />
              <button
                className="save"
                onClick={saveTask}
                disabled={
                  changeTitle.length === 0 || changeDescription.length === 0
                }
              >
                Save Task
              </button>
            </>
          ) : (
            <>
              <h3>{`Title: ${props.title}`}</h3>
              <h3>{`Description: ${props.description}`}</h3>

              <button className="editButton" onClick={clickEdit}>
                Edit
              </button>
              <button className="saveButton" onClick={clickDelete}>
                Delete
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default TaskList;
