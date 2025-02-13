import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Message from './components/props/Message';
import NumberDisplay from './components/props/NumberDisplay';
import TextChanger from './components/state/TextChanger';
import Counter from './components/state/Counter';

function App() {
  //props
  const [message, setMessage] = useState("message...");
  const [number1, setNumber1] = useState(1);
  const [number2, setNumber2] = useState(2);
  const [number3, setNumber3] = useState(3);

  //state
  const [text, setText] = useState("welcome");
  const [count, setCount] = useState(0);

  return (
    <div className="App">
     {/* props */}
      <Message message={message}></Message>
      <NumberDisplay number1={number1} number2={number2} number3={number3}></NumberDisplay>
    
      {/* state */}
      <TextChanger text={text}></TextChanger>
      <button onClick={() => setText("Hello World")}>Click Here to Change Text</button>
      <Counter count={count}></Counter>
      <button onClick={() => setCount(count+1)}>Click Here to Increase Count by 1</button>
    
    </div>
  );
}

export default App;
