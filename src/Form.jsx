import { useState } from "react";
import { toast } from "react-toastify";

const Form = ({ addItem }) => {
  const [item, setItem] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!item) {
      toast.error("please provide a value");
      return;
    }
    addItem(item);
    setItem("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h4>Grocery Bud</h4>
      <div className="form-control">
        <input
          type="text"
          name="item"
          value={item}
          onChange={(e) => setItem(e.target.value)}
          id="add-item"
          className="form-input"
        />
        <button type="submit" className="btn">
          Add Item
        </button>
      </div>
    </form>
  );
};
export default Form;
