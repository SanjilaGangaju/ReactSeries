
import ComponentA from "./components/ComponentA";
import { ComponentB } from "./components/ComponentB";
import { UserProvider } from "./components/UserContext";

function App(){
 const user = {name: 'Sanjila'}
  return (
    <UserProvider>
      <ComponentA></ComponentA>
      <ComponentB></ComponentB>
    </UserProvider>
  )
}
export default App;