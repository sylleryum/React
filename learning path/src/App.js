import React, {Fragment} from 'react';
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
import StylingCss from "./components/StylingCss";
import EmailForm from "./components/forms/EmailForm";
import HotelBookingForm from "./components/forms/HotelBookingForm";
import HotelBookingFormSingleEvent from "./components/forms/HotelBookingFormSingleEvent";
import HotelBookingFormMultipleComponents
    from "./components/forms/individual componenets/HotelBookingFormMultipleComponents";
import RefsDemo from "./components/refs/RefsDemo";
import Hero from "./components/errorBoundary/Hero";
import ErrorBoundary from "./components/errorBoundary/ErrorBoundary";
import ButtonParent from "./components/hoc/ButtonParent";
import Button from "./components/hoc/Button";
import ClickCounter from './components/hoc/2/ClickCounter';
import HoverCounter from './components/hoc/2/HoverCounter';
import CounterParent from "./components/renderProps/CounterParent";
import ClickCounterRP from "./components/renderProps/ClickCounterRP";
import HoverCounterRP from "./components/renderProps/HoverCounterRP";
import ParameterFromComponentToInvoker from "./components/ParameterFromComponentToInvoker ";
import {UserProvider} from "./components/context/userContextParentComponent";
import ComponentC from "./components/context/ComponentC";
import ComponentE from "./components/context/ComponentE";
import Users from "./components/context/2/Users";
import Departments from "./components/context/2/Departments";
import ParentContext from "./components/context/2/ParentContext";
import PostListGetRequest from "./components/fetchFromApi/PostListGetRequest";
import UseState from "./components/hooks/UseState";
import UseState2 from "./components/hooks/UseState2";
import UseEffect from "./components/hooks/UseEffect";
import UseEffectOuter from "./components/hooks/UseEffectCleanup";


function App() {

    //used to pass to a map (similar to java stream, and create one component for each of these items)
    const theList = ["listElement1", "listElement2"];
    const ExtendedButton = ButtonParent(Button)


    return (
        <div className="App">
            <UseEffectOuter/>
            <UseEffect/>

            {/*state in function (useState hook)*/}
            <UseState2/>
            <UseState/>

            {/*using get on an API*/}
            <PostListGetRequest/>

            {/*context*/}
            <ParentContext/>

            {/*<UserProvider value="a name passed to the components">*/}
            ********************context:
            <ComponentC/>
            {/*</UserProvider>*/}


            {/*render Props*/}
            ********************render props:
            <CounterParent render={(count, incrementCount) => (
                <ClickCounterRP count={count} incrementCount={incrementCount}/>
            )}/>

            <CounterParent render={(count, incrementCount) => (
                <HoverCounterRP count={count} incrementCount={incrementCount}/>
            )}/>

            {/*hoc 2*/}
            *******************hoc 2<br/>

            <ClickCounter toChild="hoc OK"/>
            <HoverCounter/>

            {/*hoc*/}
            **hoc 1
            <Button toChild="coming from app>ButtonParent>Button"/>

            {/*error boundary*/}
            {/*<ErrorBoundary>*/}
            {/*    <Hero heroName={"Batman"}/>*/}
            {/*</ErrorBoundary>*/}
            {/*<ErrorBoundary>*/}
            {/*    <Hero heroName={"Superman"}/>*/}
            {/*</ErrorBoundary>*/}
            {/*<ErrorBoundary>*/}
            {/*    <Hero heroName={"joker"}/>*/}
            {/*</ErrorBoundary>*/}

            {/*refs*/}
            <RefsDemo/>

            {/*multiple components*/}
            **multiple components
            <HotelBookingFormMultipleComponents/>
            {/*form with textarea/text input and select done through 1 event only*/}
            **form with single event handler:
            <HotelBookingFormSingleEvent/>

            {/*form with textarea/text input and select done manually*/}
            **form with multiple event handler:
            <HotelBookingForm/>

            {/*simple text input using form*/}
            <EmailForm/>

            {/* css / styling */}
            <StylingCss primary={true}/>

            {/* passing method to child this method passed to child, receives a parameter (which return to parent) */}
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
            {theList.map((eachListItem) => <Welcome nameWelcome={eachListItem} secondAttWelcome={eachListItem}/>)}
            <div>===</div>

            <ParameterFromComponentToInvoker toUpper={() => "calling from the outside"}/>

            {/*simple button with event*/}
            <div>Simple event (shows clicked on the console)</div>
            <FunctionClick/>

            <div>current value of state (press below events)<br/>
                hold down shift or alt to change amount to increase/decrease
            </div>
            {/*simple button with event that gets the event as which key is being hold*/}
            <SyntheticEvents></SyntheticEvents>
        </div>
    );
}

export default App;
