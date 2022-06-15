import "./App.css";
import TodoList from "./Todolist";
import { TodoContextProvider } from "./useTodoContext";

function App() {
  return (
    <div className="App">
      <TodoContextProvider>
        <TodoList />
      </TodoContextProvider>
    </div>
  );
}

export default App;
