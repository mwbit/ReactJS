import React, { useState } from "react";

import Form from "./Form";
import "./App.css";

export default () => {
  const [todos, setTodos] = useState([]);

  const taskFinished = i =>
    setTodos(
      todos.map((todo, item) =>
        item === i
          ? {
              ...todo,
              finished: !todo.finished
            }
          : todo
      )
    );

  return (
    <div className="App">
      <h1>To-Do</h1>
      <Form
        onSubmit={text => setTodos([{ text, complete: false }, ...todos])}
      />
      <div>
        {todos.map(({ text, finished }, i) => (
          <div
            key={text}
            onClick={() => taskFinished(i)}
            style={{
              textDecoration: finished ? "line-through" : ""
            }}
          >
            {text}
          </div>
        ))}
      </div>
      <div className="button">
        <button onClick={() => setTodos([])}>reset</button>
      </div>
    </div>
  );
};
