import { useState } from "react";
import axios from "axios";

export function CreateTodo() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  return (
    <div>
      <input
        style={{
          margin: 10,
          padding: 10,
        }}
        type="text"
        placeholder="title"
        onChange={function (e) {
          const value = e.target.value;
          setTitle(e.target.value);
        }}
      />{" "}
      <br />
      <input
        style={{
          margin: 10,
          padding: 10,
        }}
        type="text"
        placeholder="description"
        onChange={function (e) {
          const value = e.target.value;
          setDescription(e.target.value);
        }}
      />{" "}
      <br />
      <button
        style={{
          margin: 10,
          padding: 10,
        }}
        onClick={() => {
          // right way to do axios
          axios
            .post("http://localhost:3000/todo", {
              title: title,
              description: description,
            })
            .then(async function (res) {
              const json = await res.json();
              alert("Todo added");
            });

          // fetch("http://localhost:3000/todo", {
          //   method: "POST",
          //   body: JSON.stringify({
          //     title: title,
          //     description: description,
          //   }),
          //   headers: {
          //     "Content-type": "applicaton/json",
          //   },
          // }).then(async function (res) {
          //   const json = await res.json();
          //   alert("Todo added");
          // });
        }}
      >
        Add a todo
      </button>
    </div>
  );
}
