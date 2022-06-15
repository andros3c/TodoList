import { createContext, useContext, useState, useEffect } from "react";

const TodoContext = createContext("");

function TodoContextProvider({ children }) {
  const [local, setLocal] = useState(
    JSON.parse(window.localStorage.getItem("todolist")) ?? {
      todo: [],
      done: [],
    }
  );
  
  useEffect(() => {
    window.localStorage.setItem("todolist", JSON.stringify(local));
  }, [JSON.stringify(local)]);

  return (
    <TodoContext.Provider value={{ local, setLocal }}>
      {children}
    </TodoContext.Provider>
  );
}

function useTodoContext() {
  return useContext(TodoContext);
}

export { TodoContextProvider, useTodoContext };
