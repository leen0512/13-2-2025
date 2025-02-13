import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Message from './components/Message';

function App() {
  const [message, setMessage] = useState("message...");
  const [number1, setNumber1] = useState(1);
  const [number2, setNumber2] = useState(2);
  const [number3, setNumber3] = useState(3);
  return (
    <div className="App">
     
      <Message message={message}></Message>

    </div>
  );
}

export default App;
