import Ite from "./Ite";
import { useState } from "react";
export default function PackingList({
  items,
  handleDelete,
  handleToggle,
  deleteList,
}) {
  let sortedItems;
  const [sortby, setSortby] = useState("input");

  if (sortby == "input") sortedItems = items;

  if (sortby === "description") {
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  } else {
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  }
  return (
    <div className="list">
      <ul>
        {sortedItems.map((itemObj) => (
          <Ite
            item={itemObj}
            handleDelete={handleDelete}
            handleToggle={handleToggle}
            key={itemObj.id}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortby} onChange={(e) => setSortby(e.target.value)}>
          <option value="input">Sort by input</option>
          <option value="description"> Sort by description</option>
          <option value="packed">Sort by packed</option>
        </select>
        <button onClick={() => deleteList()}>Clear List</button>
      </div>
    </div>
  );
}
