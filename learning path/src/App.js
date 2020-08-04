import React from 'react';
import './App.css';
import Greet from './components/GreetFunctionComponent'
import Welcome from './components/GreetClassComponent'
import Hello from './components/GreetFunctionNoJsx'
import Message from './components/MessageState'
import Counter from './components/Counter'
import FunctionClick from './components/FunctionClick';
import SyntheticEvents from './components/events/SyntheticEvents';
import EmployeeListLifecycle from './components/events/EmployeeListLifecycle';
import StreamingNumber from './components/events/Update/StreamingNumber';
import ParentComponent from './components/events/props to parent/ParentComponent';


function App() {

  //used to pass to a map (similar to java stream, and create one component for each of these items)
  const theList = ["listElement1", "listElement2"];

  return (
    <div className="App">

      <ParentComponent/>

      {/* mount and update lifecycle example */}
      <StreamingNumber/>

      {/* mount and unmount lifecycle example */}
      <EmployeeListLifecycle initialNames={['Ronald', 'Donald', 'Elise', 'Kim']}/>

      {/*simple state example*/}
      <Message/>

      {/*using state here with prevState (when modifying previous state)*/}
      <Counter theProps='1'/>

      {/*inside Greet there is another component, 
      nameWelcome and secondAttWelcome are for it (Welcome component at ./GreetClassComponent)*/}
      <Greet name="HelloPropsFunction" secondAtt="World" 
      nameWelcome="innercomponent" secondAttWelcome="insideprop2">        
        <button>this is a chidren element</button>
      </Greet>      

      {/*simple class component with props*/}      
      <Welcome nameWelcome="HelloPropsClass" secondAttWelcome="World"/>

      {/* <Welcome/> not passing argument = gets default value*/}
      <Welcome/>

      {/*same as above only to exemplify how the same result can be achieved with no JSX*/}
      <Hello/>

      {/*takes the list defined above before the return, each item of the same is iterated below and sent as props*/}
      <div>=Using Map=</div>
      {theList.map((eachListItem)=><Welcome nameWelcome={eachListItem} secondAttWelcome={eachListItem}/>)}
      <div>===</div>
      

      {/*simple button with event*/}
      <div>Simple event (shows clicked on the console)</div>
      <FunctionClick/>

      <div>current value of state (press below events)<br/>
        hold down shift or alt to change amount to increase/decrease</div>
      {/*simple button with event that gets the event as which key is being hold*/}
      <SyntheticEvents></SyntheticEvents>
    </div>
  );
}

export default App;
