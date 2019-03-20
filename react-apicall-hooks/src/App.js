import React, { useState, useEffect } from "react";
import "./App.css";

export default function App() {
  const [repositories, setRepositories] = useState([]);

  async function fetchComment(commentId) {
    const response = await fetch("https://api.github.com/users/mwbit/repos");
    const data = await response.json();
    setRepositories(data);
  }

  useEffect(() => {
    fetchComment();
  }, []);

  return (
    <>
      <ul>
        {repositories.map(re => (
          <li key={re.id}>{re.name}</li>
        ))}
      </ul>
    </>
  );
}
