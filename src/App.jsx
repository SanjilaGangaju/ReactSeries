
import {Greeting} from './components/Greeting';
import InfoCard from './components/InfoCard';
import Button from './components/button';
import ClickButton from './components/clickButton';
import { DerivedState } from './components/DerivedState';
import { LiftingState } from './components/liftState';
import ToggleSwitchButton from './projects/ToggleSwitchButton/toggleSwitchbutton';
import {Todo} from './projects/Todo/todo';
import {InputStates} from './components/inputStates';
function App(){
  const isLoggedIn = true;
  const user = {name: 'Sanjila', age: 22};
//   return (
//     <>
//      {/* <Greeting isLoggedIn ={isLoggedIn} user={user}></Greeting>
//      <InfoCard title="React Starter" description="This is a starter project to learn React fundamentals"></InfoCard>
//      <Button label="click me"></Button>
//      <ClickButton></ClickButton>
//      <DerivedState></DerivedState>
//     
//     </>
   return (
    <>
    {/* <ToggleSwitchButton></ToggleSwitchButton> */}
    {/* <section><Todo></Todo></section> */}
    <InputStates></InputStates>
    </>
   )
//   );
}
export default App;