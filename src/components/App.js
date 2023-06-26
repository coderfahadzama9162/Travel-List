import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

export default function App() {
  const [items, setItems] = useState([]);

  function handleDelete(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }
  function handleToggle(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  function deleteList() {
    const confirmed = window.confirm(
      "Are you sure you want to delete the list"
    );
    if (confirmed) setItems((items) => []);
  }
  function onAdd(item) {
    setItems((items) => [...items, item]);
  }
  return (
    <div className="app">
      <Logo />
      <Form addItems={onAdd} />
      <PackingList
        items={items}
        handleDelete={handleDelete}
        handleToggle={handleToggle}
        deleteList={deleteList}
      />
      <Stats items={items} />
    </div>
  );
}
