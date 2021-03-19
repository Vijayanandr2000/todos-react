import React, { useState } from "react";
import "./components/style.css";
import Todo from "./components/Todo";

function App() {
  const [Input, setInput] = useState("");
  const [item, setItem] = useState([]);
  const input = (e) => {
    // console.log(e.target.value);
    setInput(e.target.value);
  };
  const add = () => {
    setItem([
      ...item,
      { text: Input, completed: false, id: Math.random() * 1000 },
    ]);
    setInput("");
  };
  // console.log(item);
  return (
    <div>
      <header>
        <h1>TODOS</h1>
      </header>
      <section>
        <input
          onChange={input}
          value={Input}
          type="text"
          placeholder="Todos..."
        />
        <button onClick={add}>ADD</button>
      </section>
      <Todo item={item} setItem={setItem} />
    </div>
  );
}

export default App;
