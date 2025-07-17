
import React, { useState } from "react";

function App() {
  const [form, setForm] = useState({ name: "", symbol: "", supply: "" });
  const [result, setResult] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:3001/create-coin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    const data = await res.json();
    setResult(data.message);
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Create Meme Coin</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" onChange={handleChange} /><br />
        <input name="symbol" placeholder="Symbol" onChange={handleChange} /><br />
        <input name="supply" placeholder="Total Supply" onChange={handleChange} /><br />
        <button type="submit">Create</button>
      </form>
      <p>{result}</p>
    </div>
  );
}

export default App;
