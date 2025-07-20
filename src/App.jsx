
import {Greeting} from './components/Greeting';
import InfoCard from './components/InfoCard';
import Button from './components/button';
import ClickButton from './components/clickButton';
function App(){
  const isLoggedIn = true;
  const user = {name: 'Sanjila', age: 22};
  return (
    <>
     <Greeting isLoggedIn ={isLoggedIn} user={user}></Greeting>
     <InfoCard title="React Starter" description="This is a starter project to learn React fundamentals"></InfoCard>
     <Button label="click me"></Button>
     <ClickButton></ClickButton>
    </>
  );
}
export default App;