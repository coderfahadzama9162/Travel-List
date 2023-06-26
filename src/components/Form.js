import { useState } from "react";
export default function Form({ addItems }) {
  const [textVal, setText] = useState("fahad");
  const [optionVal, setOptionval] = useState(5);

  function handleSubmit(e) {
    e.preventDefault();

    const newItem = {
      id: Date.now(),
      description: textVal,
      quantity: Number(optionVal),
      packed: false,
    };
    addItems(newItem);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit} id={18}>
      <h3>What do you need for your 😍 trip</h3>
      <select value={optionVal} onChange={(e) => setOptionval(e.target.value)}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="text"
        value={textVal}
        onChange={(e) => setText(e.target.value)}
      />
      <button>ADD</button>
    </form>
  );
}
