import * as React from "react";
import "./Todolist.css"

import Done from "./done";
import Todo from "./todo";
import { useTodoContext } from "./useTodoContext";

export default function Todolocal() {
  const [value, setValue] = React.useState("");
  const { local, setLocal } = useTodoContext();

  function HandleSubmit(e) {
    e.preventDefault();
    if (value) {
      setLocal({
        ...local,
        todo: [...local.todo, value],
      });
      setValue("");
    }
  }
  return (
    <div
      className="border"
     
    >
      <form onSubmit={HandleSubmit}>
        <h1 className="text-center font-monospace">Todolocal</h1>
        <br />
        <input
          value={value}
          className="form-control"
          onChange={(e) => setValue(e.target.value)}
        ></input>
        <br />
      </form>

      <div>
        {local.todo.length === 0 ? (
          <>
            <h3 className="text-center fs-4 font-monospace">Nothing to do</h3>
          </>
        ) : (
          <>
            <h3 className="text-center fs-4 font-monospace">
              What things to do
            </h3>
            <br />
            <Todo local={local} setLocal={setLocal} />
          </>
        )}
      </div>
      <br />
      <br />
      <div>
        {local.done.length === 0 ? (
          <></>
        ) : (
          <>
            {" "}
            <h3 className="text-center fs-4 font-monospace">
              What things has done
            </h3>
            <Done local={local} setLocal={setLocal} />
          </>
        )}
      </div>
    </div>
  );
}
