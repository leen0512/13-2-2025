import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Message from './components/props/Message';
import NumberDisplay from './components/props/NumberDisplay';
import TextChanger from './components/state/TextChanger';
import Counter from './components/state/Counter';
import OnMount from './components/useEffect/OnMount';
import CounterEffect from './components/useEffect/CounterEffect';
import FetchUserOnMount from './components/use effect state and axios/FetchUserOnMount';
import FetchPosts from './components/use effect state and axios/FetchPosts';
import FetchOnClick from './components/use effect state and axios/FetchOnClick';


function App() {
  //props
  const [message, setMessage] = useState("message...");
  const [number1, setNumber1] = useState(1);
  const [number2, setNumber2] = useState(2);
  const [number3, setNumber3] = useState(3);

  //state
  const [text, setText] = useState("welcome");
  const [count, setCount] = useState(0);

  //use effect
  const [count1, setCount1] = useState(0);

  return (
    <div className="App">
     {/* props */}
      <Message message={message}></Message>
      <NumberDisplay number1={number1} number2={number2} number3={number3}></NumberDisplay>
    
      {/* state */}
      <TextChanger text={text}></TextChanger>
      <button onClick={() => setText("Hello World")}>Click Here to Change Text</button>
      <hr></hr>
      <Counter count={count}></Counter>
      <button onClick={() => setCount(count+1)}>Click Here to Increase Count by 1</button>
      <hr></hr>
      {/* use effect */}
      <OnMount></OnMount>
      <hr></hr>
      <CounterEffect count1={count1}></CounterEffect>
      <button onClick={() => setCount1(count1+1)}>Click Here to Increase Count by 1</button>
      <hr></hr> 

      {/* axios */}
      {/* <FetchUserOnMount></FetchUserOnMount> */}
      {/* <FetchPosts></FetchPosts> */}
      <FetchOnClick></FetchOnClick>

    </div>
  );
}

export default App;
