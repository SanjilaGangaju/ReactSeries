
// import {Greeting} from './components/Greeting';
// import InfoCard from './components/InfoCard';
// import Button from './components/button';
// import ClickButton from './components/clickButton';
// import { DerivedState } from './components/DerivedState';
// import { LiftingState } from './components/liftState';
// import ToggleSwitchButton from './projects/ToggleSwitchButton/toggleSwitchbutton';
// import {Todo} from './projects/Todo/todo';
// import {InputStates} from './components/inputStates';
import { useState } from 'react';
import { TodoForm } from './projects/Todo/todoForm';
import { TodoLists } from './projects/Todo/TodoLists';
import { TodoTemplate } from './projects/Todo/TodoTemplate';
function App(){
  // const isLoggedIn = true;
  // const user = {name: 'Sanjila', age: 22};
//   return (
//     <>
//      {/* <Greeting isLoggedIn ={isLoggedIn} user={user}></Greeting>
//      <InfoCard title="React Starter" description="This is a starter project to learn React fundamentals"></InfoCard>
//      <Button label="click me"></Button>
//      <ClickButton></ClickButton>
//      <DerivedState></DerivedState>
//     
//     </>
//    return (
//     <>
//     {/* <ToggleSwitchButton></ToggleSwitchButton> */}
//     {/* <section><Todo></Todo></section> */}
//     <InputStates></InputStates>
//     </>
//    )
const [todos, setTodos] = useState([]);

const addTodo = (text) =>{
  const newTodo = {text:text, completed:false};
  setTodos(newTodo);
  console.log(todos);
}
       return (
        <TodoTemplate>
          <TodoForm addTodo={addTodo}></TodoForm>
          <TodoLists></TodoLists>
        </TodoTemplate>
        
       )
// //   );
 }
export default App;