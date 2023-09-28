import React, { useState } from "react";

const InputTodo = () => {

  const [description, setDescription] = useState("enter todo")

  const onSubmitForm = async(e) => {
    e.preventDefault();
    try {
      const body = { description };
      const response = fetch("http://localhost:5000/todos", {
        method: "POST",
        headers: {"Content-Type": "application/json" },
        body: JSON.stringify(body)
      });

      console.log(response);
    } catch (err) {
      console.error(err.message)
    }
  }

  return (
    <>
      <h1>Input Todo</h1>
      <form onSubmit={onSubmitForm}>
        <input type="text"
        value={description}
        onChange={e=>setDescription(e.target.value)}
        />
        <button>Add</button>
      </form>
    </>
  )
}

export default InputTodo
