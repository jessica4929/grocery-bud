import { useState } from "react";
import Form from "./Form";
import Items from "./Items";
import { nanoid } from "nanoid";
import { ToastContainer, toast } from "react-toastify";

const setLocalStorage = (items) => {
  localStorage.setItem("list", JSON.stringify(items));
};
const defaultList = JSON.parse(localStorage.getItem("list") || "[]");
const App = () => {
  const [items, setItems] = useState(defaultList);

  const addItem = (itemName) => {
    const newItem = { name: itemName, completed: false, id: nanoid() };
    const newItems = [...items, newItem];
    setItems(newItems);
    setLocalStorage(newItems);
    toast.success("Item added");
  };

  const removeItem = (itemId) => {
    const newItems = items.filter((item) => item.id !== itemId);
    setItems(newItems);
    setLocalStorage(newItems);
    toast.success("Item removed");
  };

  const editItem = (itemId) => {
    const newItems = items.map((item) => {
      if (itemId == item.id) {
        const newItem = { ...item, completed: !item.completed };
        return newItem;
      }
      return item;
    });
    setItems(newItems);
    setLocalStorage(newItems);
  };
  return (
    <section className="section-center">
      <Form addItem={addItem} />
      <Items items={items} removeItem={removeItem} editItem={editItem} />
      <ToastContainer position="top-center" />
    </section>
  );
};

export default App;
