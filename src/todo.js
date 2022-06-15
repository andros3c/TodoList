import uuid from "react-uuid";

export default function Todo({ local, setLocal }) {

    function HasDone(element, index) {
      local.todo.splice(index, 1);
      
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
              
              onClick={() => HasDone(element, index)}
              type="checkbox"
              id={element}
            ></input>
            <label >{element}</label>
            <button
              className="btn btn-sm btn-danger"
              onClick={() => Deletetodo(index)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    );
  }