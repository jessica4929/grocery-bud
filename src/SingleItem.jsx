import { useState } from "react";
import { toast } from "react-toastify";

const SingleItem = ({ name, id, completed, removeItem, editItem }) => {
  return (
    <div className="single-item">
      <input
        type="checkbox"
        name={name}
        id=""
        checked={completed}
        onChange={() => editItem(id)}
      />
      <p
        style={{
          textTransform: "capitalize",
          textDecoration: completed && "line-through",
        }}
      >
        {name}
      </p>
      <button
        type="button"
        className="btn remove-btn"
        onClick={() => removeItem(id)}
      >
        Delete
      </button>
    </div>
  );
};
export default SingleItem;
