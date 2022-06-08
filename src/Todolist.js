import * as React from "react";

import uuid from 'react-uuid'


function useLocalStorage(name, initialValue) {
  const [value, setValue] = React.useState(
    JSON.parse(window.localStorage.getItem(name)) ?? initialValue
  );

  const stringifiedValue = JSON.stringify(value);
  React.useEffect(() => {
    window.localStorage.setItem(name, stringifiedValue);
  }, [stringifiedValue, name]);

  return [value, setValue];
}

function Todo({ local, setLocal }) {
  function HasDone(element, index) {
   const newTodo = local.todo.splice(index, 1);
    setLocal({
      ...local,
      done: [...local.done, element],
    });
  }
  function Deletetodo(index) {
    local.todo.splice(index, 1);
    setLocal({
      ...local,
    });
  }
  return (
    <ul className="list-group">
      {local.todo.map((element, index) => (
        <li className="list-group-item" key={uuid()}>
          <input
          key={uuid()}
            onClick={() => HasDone(element, index)}
            type="checkbox"
            id={element}
          ></input>
          <label htmlFor={element}>{element}</label>
          <button className="btn btn-danger" onClick={() => Deletetodo(index)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

function Done({ local, setLocal }) {
  function NotDone(element, index) {
    local.done.splice(index, 1);
    setLocal({
      ...local,
      todo: [...local.todo, element],
    });
  }
  function Deletedone(index) {
    local.done.splice(index, 1);
    setLocal({
      ...local,
    });
  }
  return (
    <ul className="list-group">
      {local.done.map((element, index) => (
        <li className="list-group-item" key={uuid()}>
          <input
            key={uuid()}
            type="checkbox"
            checked
            id={element}
            onClick={() => NotDone(element, index)}
          ></input>
          <label htmlFor={element} style={{ textDecoration: "line-through" }}>
            {element}
          </label>
          <button className="btn btn-danger" onClick={() => Deletedone(index)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default function TodoList() {
  const [value, setValue] = React.useState("");
  const [local, setLocal] = useLocalStorage("todoList", { todo: [], done: [] });

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
    <div>
      <form onSubmit={HandleSubmit}>
        <h1>TodoList</h1>
        <input value={value} onChange={(e) => setValue(e.target.value)}></input>
      </form>

      <div>
        <h3>What things to do</h3>
        <Todo local={local} setLocal={setLocal} />
      </div>
      <div>
        <h3>What things has done</h3>
        <Done local={local} setLocal={setLocal} />
      </div>
    </div>
  );
}
