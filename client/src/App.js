import { useState } from 'react';
import logo from './logo.svg';
import './App.css';


 
function App() {

  const [phoneNumber, setPhoneNumber] =useState("");
  const [message, setMessage] =useState("");

  // get the value that was types
  const updatePhoneNumber = (e) => {
    console.log({value:e.target.value});
    // save that value into memory
    setPhoneNumber(e.target.value);
  }
  const updateMessage = (e) => {
    console.log({value:e.target.value});
    setMessage(e.target.value);
  }

  return (
    <div className="App">
      <header className="App-header">
       Marketing Campaign
       <p>Phone number</p>
       <input value={phoneNumber} placeholder='###-###-#####' onChange={updatePhoneNumber}></input>
       <p>Message</p>
       <input value={message} placeholder='Enter a message!' onChange={updateMessage}></input>
      </header>
    </div>
  );
}

export default App;
