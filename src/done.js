import uuid from "react-uuid";

export default function Done({ local, setLocal }) {
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
          <li
            className="list-group-item"
            key={uuid()}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <input
              key={uuid()}
              type="checkbox"
              checked
              id={element}
              onClick={() => NotDone(element, index)}
            ></input>
            <label  style={{ textDecoration: "line-through" }}>
              {element}
            </label>
            <button
              className="btn btn-sm btn-danger"
              onClick={() => Deletedone(index)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    );
  }