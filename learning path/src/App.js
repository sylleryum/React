import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/GreetFunctionComponent'
import Welcome from './components/GreetClassComponent'
import Hello from './components/GreetFunctionNoJsx'
import Message from './components/MessageState'

function App() {
  return (
    <div className="App">
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
