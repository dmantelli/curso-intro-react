import "./CreateTodoButton.css";

import React from "react";

function CreateTodoButton(props) {
  const onClickButton = (msg) => {
    props.setOpenModal((prevState) => !prevState);
  };

  return (
    <button className="CreateTodoButton" onClick={onClickButton}>
      +
    </button>
  );
}

export { CreateTodoButton };
