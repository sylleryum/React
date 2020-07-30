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
      <Counter theProps="Success!"/>
      <Greet name="HelloPropsFunction" secondAtt="World">
        <button>this is a chidren element</button>
      </Greet>
      <Greet name="HelloPropsFunction2" secondAtt="World2"></Greet>

      <Welcome name="HelloPropsClass" secondAtt="World"/>
      <Welcome name="HelloPropsClass2" secondAtt="World2"/>
      <Hello/>
      <Message/>
    </div>
  );
}

export default App;
