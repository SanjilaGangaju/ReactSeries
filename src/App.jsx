import { TodoForm } from "./projects/Todo/TodoForm";

import { TodoWrapper } from "./projects/Todo/TodoWrapper";
import './projects/Todo/todo.css';

function App(){
  const [inputValue, setInputValue] = useState("");
  return (
    <TodoWrapper>
      <TodoForm></TodoForm>
    </TodoWrapper>

  )
}
export default App;