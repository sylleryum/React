import React from 'react';
import './App.css';
import Greet from './components/GreetFunctionComponent'
import Welcome from './components/GreetClassComponent'
import Hello from './components/GreetFunctionNoJsx'
import Message from './components/MessageState'
import Counter from './components/Counter'


function App() {
  return (
    <div className="App">
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
      <Welcome name="HelloPropsClass" secondAtt="World"/>

      {/*same as above only to exemplify how the same result can be achieved with no JSX*/}
      <Hello/>

      
    </div>
  );
}

export default App;
